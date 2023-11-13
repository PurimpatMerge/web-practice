import { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import type { JWTError } from 'enums/auth'

import type { IUser } from '@/types/modules/Auth'

declare module 'next-auth' {
  // Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
  interface Session {
    user?: IUser
    token?: {
      accessToken?: string
      refreshToken?: string
      gameToken?: string
    }
    token?: string
    error?: JWTError
  }

  interface User {
    profile?: IUser
    accessToken?: string
    refreshToken?: string
  }
}

declare module 'next-auth/jwt' {
  // Returned by the `jwt` callback and `getToken`, when using JWT sessions
  interface JWT {
    // OpenID ID Token
    profile?: IUser
    accessToken?: string
    accessTokenExpires?: number
    refreshToken?: string
    gameToken?: string
    error?: JWTError
  }
}
