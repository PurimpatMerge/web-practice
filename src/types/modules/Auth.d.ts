import type { AxiosResponse } from 'axios'

export interface Auth {
  loading: boolean
  login: ({ email, password }) => Promise<AxiosResponse>
  logout: () => void
}

export interface IAuth {
  username: string
  password: string
}

export interface IAuthRefreshToken {
  access_token: string
  expires_in: string
  token_type: string
  refresh_token: string
  id_token: string
  user_id: string
  project_id: string
}

export interface IUser {
  type: string
  bankAccount?: string
  bankname?: string
  channelId?: number
  channel?: string
  contact?: string
  course?: string
  credit: number
  fullname: string
  id: number
  ref?: string
  memberCode?: string
  note?: string
  partner?: string
  phone: string
  promotion?: string
  trueWallet?: string
  gameToken: string
}

export interface IPhoneNumber {
  phone: string
}

export interface IForgotPassword {
  code: string
  otpId: string
  password: string
}

export interface IChangePassword {
  confirmNewPassword?: string
  newPassword: string
  oldPassword: string
}

export interface IUploadFile {
  imageUrl: string
}

export interface ISlipQrCode {
  message: string
  data: string
}

export interface IBankList {
  list: IBankListItem[]
}

export interface IBankListItem {
  id: number
  name: string
}

export interface IRecommend {
  result: IRecommendItem[]
}

export interface IRecommendItem {
  id: number
  title: string
  status: string
  url: string
  createdAt: string
}

export interface IBankItem {
  bankName: string
  bankIconUrl: string
  accountName: string
  accountNumber: string
  id: number
}

export interface IDeposit {
  amount: number
  bankId: number
  depositedAt: string
  rawQrCode: string
  slipUrl: string
}

export interface IWithdraw {
  amount: number
}

export interface ITransactionList {
  message: string
  list: ITransaction[]
  total: number
}

export interface ITransaction {
  id: number
  statementId: number
  creditAmount: number
  beforeAmount: number
  afterAmount: number
  transferAt: string
  transactionStatusId: number
  transactionStatusName: string
  transactionTypeId: number
  transactionTypeTh: string
}

export interface IGameList {
  result: IGameListItem[]
}

export interface IGameListItem {
  name: string
  vendorCode: string
  imageName: string
  category: string
}

export interface IGameSubList {
  message: string
  data: IGameSubListItem[]
}

export interface IGameSubListItem {
  gameName: string
  gameCode: string
  imageUrl: string
}

export interface IGamePlay {
  browser: string
  categoryName: string
  device: string
  lang: string
  vendor: string
  gameToken?: string
  gameCode?: string
}

export interface IGamePlayRes {
  gameUrl: string
  maxPerBet: number
  gameToken: string
}

export interface IConfigurationWithdraw {
  maximumWithdraw: number
  minimumDeposit: number
  minimumWithdraw: number
}

export interface IWebLine {
  idLine: string
  urlLine: string
}

export interface ITransferHistory {
  result: ITransferHistoryItem[]
  total: number
}

export interface ITransferHistoryItem {
  id: number
  detail: string
  status: boolean
  createdAt: string
  commission: number
}

export interface IRegisterSetting {
  id: number
  useOtpRegister: boolean
}

export interface ITransferDateFilter {
  toTransferDate?: string | Date
  transferDate?: string | Date
  fromTransferDate?: string | Date
  transactionTypeId?: number
}
