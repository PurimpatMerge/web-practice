import jwt from 'jsonwebtoken'

import BaseService from './Base'

import { isTokenExpired } from '@/libs/auth'
import { getAccessToken, getRefreshToken, setAccessToken } from '@/libs/axios'
import type { IAuthRefreshToken, IAuth, IUser } from '@/types/modules/Auth'
import type { IToken } from '@/types/modules/Base'

export default class AuthService extends BaseService {
  // [POST] Refresh token
  // เตรียมไว้ถ้า backend ทำ refresh token มา
  static async refreshToken(refreshToken: string): Promise<IAuthRefreshToken> {
    return this._post('/refresh-token', {
      refreshToken,
    })
  }

  // [POST] Check access token expires and try to refesh token on client side
  static async getAccessToken(): Promise<void> {
    const accessToken = getAccessToken()

    try {
      if (accessToken && typeof window !== 'undefined') {
        const decode = jwt.decode(accessToken) as { exp: number }
        const accessTokenExpires = decode?.exp * 1000
        const refreshToken = getRefreshToken()

        if (refreshToken && isTokenExpired(accessTokenExpires)) {
          const res = await this.refreshToken(refreshToken)
          setAccessToken(res.access_token)
        }
      }

      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
