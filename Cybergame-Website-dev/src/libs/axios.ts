import type { AxiosError } from 'axios'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
})

let accessToken: string | null = null
let refreshToken: string | null = null

const isAxiosError = (payload: unknown): payload is AxiosError<unknown, unknown> => {
  return Axios.isAxiosError(payload)
}

const axiosCancelToken = Axios.CancelToken

const setAccessToken = (token: string | null) => {
  if (token) {
    accessToken = token
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
  }
}

const setRefreshToken = (token: string | null) => {
  if (token) refreshToken = token
}

const getAccessToken = () => accessToken
const getRefreshToken = () => refreshToken

export { axios, axiosCancelToken, setAccessToken, setRefreshToken, isAxiosError, getAccessToken, getRefreshToken }
