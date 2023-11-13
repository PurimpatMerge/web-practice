import dayjs from 'dayjs'
import jwt from 'jsonwebtoken'

export const getAccessTokenExpires = (accessToken: string) => {
  const decode = jwt.decode(accessToken) as { exp: number }
  const accessTokenExpires = decode?.exp * 1000
  return accessTokenExpires
}

export const isTokenExpired = (accessTokenExpires: number) => {
  return dayjs(accessTokenExpires).diff(dayjs(), 'hour') < 0
}
