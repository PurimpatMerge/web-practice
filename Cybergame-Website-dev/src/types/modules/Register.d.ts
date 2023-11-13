export interface RegisterProps {
  code?: string
  email: string
  firstname: string
  lastname: string
  otpId?: string
  password: string
  confirmPassword?: string
  phone: string
}

export interface Register {
  bankAccount: string
  bankId: number
  channelId: number
  code?: string
  fullname: string
  lineId?: string
  otpId?: string
  password: string
  confirmPassword?: string
  phone: string
  refBy?: string
}

export interface SendOtpRes {
  otpId: string
  otpRef: string
  userId: number
}

export interface IVerifyOtp {
  code?: string
  otpId?: string
  phone?: string
}
