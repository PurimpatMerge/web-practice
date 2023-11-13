import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { JWT } from 'next-auth/jwt'
import { omit } from 'lodash'

import { WebService } from '@/services'
import { JWTError } from '@/enums/auth'
import { setAccessToken } from '@/libs/axios'

const getUserProfile = async (token: JWT) => {
  try {
    setAccessToken(token.sub)
    const res = await WebService.userInfo()

    return {
      ...omit(token, ['error']),
      profile: res,
    }
  } catch (err) {
    return {
      ...token,
      error: JWTError.GET_USER_PROFILE_ERROR,
    }
  }
}

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        try {
          const { username, password } = credentials

          const res = await WebService.login({ username, password })

          const accessToken = res.token

          setAccessToken(accessToken)
          return {
            id: res.token,
            accessToken: accessToken,
            refreshToken: accessToken,
            name: res.gameToken,
          }
        } catch (err) {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, session, trigger }) {
      if (trigger === 'update') {
        return await getUserProfile({ ...token, name: session.token.gameToken })
      }
      return await getUserProfile(token)
    },
    async session({ session, token }) {
      session.token = {
        accessToken: token.sub,
        refreshToken: token.sub,
        gameToken: token.name,
      }
      session.user = token.profile
      session.error = token.error

      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: `/login`,
  },
}

export default NextAuth(options)
