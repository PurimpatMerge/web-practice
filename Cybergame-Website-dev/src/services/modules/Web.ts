import BaseService from './Base'

import type {
  IAuth,
  IBankItem,
  IBankList,
  IChangePassword,
  IConfigurationWithdraw,
  IDeposit,
  IForgotPassword,
  IGameList,
  IGamePlay,
  IGamePlayRes,
  IGameSubList,
  IRecommend,
  IRegisterSetting,
  ISlipQrCode,
  ITransactionList,
  ITransferDateFilter,
  IUploadFile,
  IUser,
  IWebLine,
  IWithdraw,
} from '@/types/modules/Auth'
import type { Register, SendOtpRes, IVerifyOtp } from '@/types/modules/Register'
import type { IOpenList, IPaginationQuery, IToken } from '@/types/modules/Base'
import type { IReturnDetail } from '@/types/modules/Retrun'

export default class WebService extends BaseService {
  // [GET] Register Setting
  static async registerSetting(): Promise<IRegisterSetting> {
    return this._get(`/users/register-setting`)
  }

  // [POST] Check Phone
  static async checkPhone(phone: string) {
    return this._post(`/users/check-phone`, { phone })
  }

  // [POST] Send OTP Register
  static async sendOtp(phone: string): Promise<SendOtpRes> {
    return this._post(`/users/send-otp/register`, { phone })
  }

  // [POST] Verify OTP Register
  static async verifyOtp({ ...params }: IVerifyOtp) {
    return this._post(`/users/verify-otp/register`, { ...params })
  }

  // [POST] Register
  static async register({ ...params }: Register): Promise<IToken> {
    return this._post(`/users/register`, { ...params })
  }

  // [GET] Bank List
  static async bankList(): Promise<IBankList> {
    return this._get(`/users/bank/list`)
  }

  // [GET] Recommend List
  static async recommendList(): Promise<IRecommend> {
    return this._get(`/recommends/channel`)
  }

  // [POST] Login
  static async login(params: IAuth): Promise<IToken> {
    return this._post(`/users/login`, { phone: params.username, password: params.password })
  }

  // [POST] Send OTP Forgot Password
  static async sendOtpForgot(phone: string): Promise<SendOtpRes> {
    return this._post(`/users/send-otp/forget`, { phone })
  }

  // [POST] Forgot Password
  static async forgotPassword(userId: number, params: IForgotPassword): Promise<SendOtpRes> {
    return this._post(`/users/resetpassword/${userId}`, { ...params })
  }

  // [GET] User Info
  static async userInfo(): Promise<IUser> {
    return this._get(`/users/me`)
  }

  // [PUT] Change Password
  static async changePassword({ ...params }: IChangePassword) {
    return this._put(`/users/changepassword`, { ...params })
  }

  // [GET] Game List
  static async gameList(type: string): Promise<IGameList> {
    return this._get(`/v1/games/category/${type}`)
  }

  // [GET] Game Sub List
  static async gameSubList(name: string): Promise<IGameSubList> {
    return this._get(`/v1/games/list/${name}`)
  }

  // [POST] Game Play
  static async gamePlay(params: IGamePlay): Promise<IGamePlayRes> {
    return this._post(`/v1/games/play`, { ...params })
  }

  // [POST] Upload File
  static async uploadFile(file: FormData): Promise<IUploadFile> {
    return this._post(`/files`, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  // [POST] Check QR
  static async checkQR(file: FormData): Promise<ISlipQrCode> {
    return this._post(`/web/deposit-upload-qr`, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  // [GET] Bank Deposit
  static async bankDeposit(): Promise<Array<IBankItem>> {
    return this._get(`/web-accounting/list`)
  }

  // [POST] Transaction Deposit
  static async transactionDeposit(params: IDeposit) {
    return this._post(`/web/deposit-from-users`, { ...params })
  }

  // [POST] Transaction Withdraw
  static async transactionWithdraw(amount: IWithdraw) {
    return this._post(`/web/withdrawal`, amount)
  }

  // [GET] configuration Withdraw
  static async configurationWithdraw(): Promise<IConfigurationWithdraw> {
    return this._get(`/configuration/web-amount`)
  }

  // [GET] Transaction List
  static async transactionList({ ...params }: IPaginationQuery & ITransferDateFilter): Promise<ITransactionList> {
    return this._get(`/web/user-transaction-list`, { params })
  }

  // [GET] Detail Return
  static async detailReturn(): Promise<IReturnDetail> {
    return this._get(`web/promotion-return-loser/current`)
  }

  // [POST] Take Return
  static async takeReturn() {
    return this._post(`/web/promotion-return-loser/take`)
  }

  // [GET] Open List Promotion
  static async openListPromotion(): Promise<IOpenList[]> {
    return this._get(`/web/promotions/open-list/promotion-list`)
  }

  // [GET] Web Count
  static async webCount(ref: string) {
    return this._get(`/web/count/${ref}`)
  }

  // [GET] Web Line
  static async webLine(): Promise<IWebLine> {
    return this._get(`/web/line`)
  }
}
