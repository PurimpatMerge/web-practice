import type { FC } from 'react'
import { Fragment, useEffect, useRef, useState } from 'react'

import { useTranslation } from 'next-i18next'
import { Col, Form, Input, Modal, Row, message } from 'antd'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

import { OTPInputEx } from '@/styles/shared/login-register.styled'
import { ButtonBox, FormBox } from '@/styles/shared/shared.styled'
import { WebService } from '@/services'
import type { IErrorResponse } from '@/types/modules/Base'
import type { IPhoneNumber } from '@/types/modules/Auth'
import { formatPhoneNumber } from '@/libs/parser'
import { validatePassword, validatePhoneNumber } from '@/libs/validation'
import type { IVerifyOtp } from '@/types/modules/Register'
import RecomPassword from '@/components/Shared/RecomPassword'

export interface IOtpForgot {
  otp0: string
  otp1: string
  otp2: string
  otp3: string
  otp4: string
  otp5: string
  password: string
  confirmPassword: string
}

const ForgotPassword: FC = () => {
  const { t } = useTranslation(['common'])
  const [formSendOtp] = Form.useForm()
  const [formForgotPassword] = Form.useForm()
  const router = useRouter()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [verifyOtpData, setVerifyOtpData] = useState<IVerifyOtp>()
  const otpInputs = Array(6).fill(0)
  const otpRefs = useRef([])
  const [remainingTime, setRemainingTime] = useState<number>(5 * 60)
  const [userId, setUserId] = useState<number>()
  const [refCode, setRefCode] = useState<string>()

  // Mutation
  const { mutate, isLoading } = useMutation(
    (data: IPhoneNumber) => {
      setVerifyOtpData({ phone: data.phone })
      return WebService.sendOtpForgot(data.phone)
    },
    {
      onSuccess: (res) => {
        setVerifyOtpData({ ...verifyOtpData, otpId: res.otpId })
        setUserId(res.userId)
        setRefCode(res.otpRef)
        setRemainingTime(5 * 60)
        setIsOpenModal(true)
        message.success('ส่ง OTP ไปยังเบอร์โทรศัพท์แล้ว')
      },
      onError: async (err: IErrorResponse) => {
        if (err.response.data.message === 'คุณสามารถกดขอรหัส OTP ได้หลังเวลา') {
          await message.error('ขอรหัส OTP ได้หลังเวลา ' + dayjs(err.response.data.data).format('HH.mm น.'))
        } else {
          await message.error('เซิฟเวอร์ขัดข้อง')
        }
      },
    },
  )
  const { mutate: forgotPassword, isLoading: isLoadingForgotPassword } = useMutation(
    (data: IOtpForgot) => {
      const otpData = data.otp0 + data.otp1 + data.otp2 + data.otp3 + data.otp4 + data.otp5
      if (otpData.length !== 6) {
        return Promise.reject({ errorCode: 'otpLength' })
      } else if (data.password !== data.confirmPassword) {
        return Promise.reject({ errorCode: 'password' })
      } else {
        const forgotData = {
          code: otpData,
          otpId: verifyOtpData.otpId,
          password: data.password,
        }
        return WebService.forgotPassword(userId, { ...forgotData })
      }
    },
    {
      onSuccess: async () => {
        await router.push('/login')
        message.success('เปลี่ยนรหัสผ่านสำเร็จ')
      },
      onError: (err: IErrorResponse) => {
        if (err.errorCode === 'otpLength') {
          message.error('กรอก OTP ให้ครบ')
        } else if (err.errorCode === 'password') {
          message.error('รหัสผ่านไม่ตรงกัน')
        } else {
          message.error('OTP ไม่ถูกต้อง กรอกอีกครั้ง')
        }
        formForgotPassword.resetFields()
      },
    },
  )
  const { mutate: resendOtp } = useMutation(
    () => {
      return WebService.sendOtpForgot(verifyOtpData.phone)
    },
    {
      onSuccess: (res) => {
        formForgotPassword.resetFields()
        setVerifyOtpData({ ...verifyOtpData, otpId: res.otpId })
        setUserId(res.userId)
        setRefCode(res.otpRef)
        setRemainingTime(5 * 60)
        message.success('ส่ง OTP ไปยังเบอร์โทรศัพท์แล้ว')
      },
      onError: async (err: IErrorResponse) => {
        if (err.response.data.message === 'คุณสามารถกดขอรหัส OTP ได้หลังเวลา') {
          message.error('ขอรหัส OTP ได้หลังเวลา ' + dayjs(err.response.data.data).format('HH.mm น.'))
        } else {
          message.error('เซิฟเวอร์ขัดข้อง')
        }
      },
    },
  )

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1)
      }, 1000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [remainingTime])

  const handleChangeText = (inputText: string, index: number) => {
    if (inputText !== '' && index < otpInputs.length - 1) {
      otpRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if ((e.keyCode === 8 || e.keyCode === 46) && index > 0) {
      setTimeout(() => {
        otpRefs.current[index - 1].focus()
      }, 100)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Fragment>
      <div className="container mx-auto">
        <FormBox name="phoneNumber" form={formSendOtp} onFinish={mutate} requiredMark={false} autoComplete="off">
          <Form.Item label="เบอร์โทรศัพท์" name="phone" rules={[{ required: true, validator: validatePhoneNumber }]}>
            <Input type="tel" maxLength={10} />
          </Form.Item>
          <ButtonBox htmlType="submit" loading={isLoading} className="mx-auto">
            ขอ OTP
          </ButtonBox>
        </FormBox>
      </div>

      {/* Modal OTP Forgot Password */}
      <Modal open={isOpenModal} footer={false} closeIcon={false} className="modal-otp">
        <Form
          form={formForgotPassword}
          name="otp"
          onFinish={forgotPassword}
          autoComplete="off"
          requiredMark={false}
          className="mx-auto w-full sm:w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">OTP</h1>
          <p className="text-sm text-center">ส่งรหัสยืนยันไปที่เบอร์ {formatPhoneNumber(verifyOtpData?.phone)}</p>
          <p className="mb-2 text-sm text-center">ref. {refCode}</p>
          <div className="flex items-center justify-center">
            <Row gutter={12}>
              {otpInputs.map((_, index) => (
                <Col xs={4} key={index}>
                  <Form.Item name={'otp' + index}>
                    <OTPInputEx
                      type="text"
                      pattern="\d{1}"
                      inputMode="numeric"
                      onChange={(e) => handleChangeText(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      maxLength={1}
                      ref={(ref) => (otpRefs.current[index] = ref)}
                    />
                  </Form.Item>
                </Col>
              ))}
            </Row>
          </div>
          <p className="remaining text-center">{formatTime(remainingTime)}</p>
          <RecomPassword />
          <Form.Item label="รหัสผ่านใหม่" name="password" rules={[{ required: true, validator: validatePassword }]}>
            <Input.Password maxLength={15} />
          </Form.Item>
          <Form.Item
            label="ยืนยันรหัสผ่านใหม่"
            name="confirmPassword"
            rules={[{ required: true, validator: validatePassword }]}>
            <Input.Password maxLength={15} />
          </Form.Item>
          <ButtonBox
            loading={isLoadingForgotPassword}
            disabled={remainingTime === 0}
            htmlType="submit"
            className="mx-auto mt-4 mb-8">
            ยืนยัน
          </ButtonBox>
          <p className="text-sm text-center">
            ไม่ได้รับรหัส OTP?
            <a onClick={() => resendOtp()} className="resend-otp font-semibold hover:underline text-sm ml-2">
              ส่ง OTP ให้ฉันอีกครั้ง
            </a>
          </p>
        </Form>
      </Modal>
    </Fragment>
  )
}

export default ForgotPassword
