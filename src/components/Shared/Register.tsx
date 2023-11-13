import type { FC } from 'react'
import { Fragment, useEffect, useRef, useState } from 'react'

import { useTranslation } from 'next-i18next'
import { Col, Form, Input, Modal, Row, Select, message } from 'antd'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import dayjs from 'dayjs'

import { ButtonBox, FormBox } from '@/styles/shared/shared.styled'
import { WebService } from '@/services'
import { Register } from '@/types/modules/Register'
import type { IVerifyOtp } from '@/types/modules/Register'
import type { IErrorResponse } from '@/types/modules/Base'
import type { IPhoneNumber } from '@/types/modules/Auth'
import { formatPhoneNumber } from '@/libs/parser'
import { validatePassword, validatePhoneNumber } from '@/libs/validation'
import { OTPInputEx, RegisterProgress } from '@/styles/shared/login-register.styled'
import RecomPassword from '@/components/Shared/RecomPassword'

const Register: FC = () => {
  const { t } = useTranslation(['common'])
  const [formSendOtp] = Form.useForm()
  const [formVerifyOtp] = Form.useForm()
  const [formRegister] = Form.useForm()
  const router = useRouter()
  const [step, setStep] = useState<number>(1)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [verifyOtpData, setVerifyOtpData] = useState<IVerifyOtp>()
  const otpInputs = Array(6).fill(0)
  const otpRefs = useRef([])
  const [remainingTime, setRemainingTime] = useState<number>(5 * 60)
  const [refCode, setRefCode] = useState<string>()
  const { ref } = router.query

  // _Query
  const { data: bankList } = useQuery(['bank-list'], () => WebService.bankList())
  const { data: recommendList } = useQuery(['recommend-list'], () => WebService.recommendList())
  const { data: registerSetting } = useQuery(['register-setting'], () => WebService.registerSetting())
  useQuery(['web-count'], () => WebService.webCount(String(ref)), {
    enabled: ref ? true : false,
  })

  // Mutation
  const { mutate: sendOtp, isLoading: isLoadingSendOtp } = useMutation(
    (data: IPhoneNumber) => {
      setVerifyOtpData({ phone: data.phone })
      return WebService.sendOtp(data.phone)
    },
    {
      onSuccess: (res) => {
        setVerifyOtpData({ ...verifyOtpData, otpId: res.otpId })
        setRefCode(res.otpRef)
        setRemainingTime(5 * 60)
        setIsOpenModal(true)
      },
      onError: async (err: IErrorResponse) => {
        if (err.response.data.message === 'เบอร์โทร มีอยู่ในระบบแล้ว') {
          await message.error(err.response.data.message)
        } else if (err.response.data.message === 'คุณสามารถกดขอรหัส OTP ได้หลังเวลา') {
          await message.error('ขอรหัส OTP ได้หลังเวลา ' + dayjs(err.response.data.data).format('HH.mm น.'))
        } else {
          await message.error('เซิฟเวอร์ขัดข้อง')
        }
      },
    },
  )
  const { mutate: verifyOtp, isLoading: isLoadingVerifyOtp } = useMutation(
    (data: string) => {
      const otpData = Object.values(data).join('')
      if (otpData.length !== 6) {
        return Promise.reject({ errorCode: 'otpLength' })
      } else {
        setVerifyOtpData({ ...verifyOtpData, code: otpData })
        return WebService.verifyOtp({
          ...verifyOtpData,
          code: otpData,
        })
      }
    },
    {
      onSuccess: () => {
        setIsOpenModal(false)
        setStep(2)
      },
      onError: (err: IErrorResponse) => {
        if (err.errorCode === 'otpLength') {
          message.error('กรอก OTP ให้ครบ')
        } else if (err.response.data.message === 'OTP ไม่ถูกต้อง') {
          message.error(err.response.data.message + ' กรอกอีกครั้ง')
        } else {
          message.error('เซิฟเวอร์ขัดข้อง')
        }
        formVerifyOtp.resetFields()
      },
    },
  )
  const { mutate: register, isLoading: isLoadingRegister } = useMutation(
    async (data: Register) => {
      if (data.password !== data.confirmPassword) {
        return Promise.reject({ errorCode: 'password' })
      } else {
        delete data.confirmPassword
        const res = await WebService.register({
          ...data,
          ...verifyOtpData,
          refBy: ref ? String(ref) : '',
        })
        if (res.token) {
          return signIn('credentials', {
            redirect: false,
            password: data.password,
            username: verifyOtpData.phone,
            type: 'web',
          })
        }
      }
    },
    {
      onSuccess: () => {
        message?.success('สมัครสมาชิกสำเร็จ')
        router.push('/')
      },
      onError: (err: IErrorResponse) => {
        if (err.errorCode === 'password') {
          message.error('รหัสผ่านไม่ตรงกัน')
          formRegister.resetFields(['password', 'confirmPassword'])
        }
      },
    },
  )
  const { mutate: resendOtp } = useMutation(
    () => {
      return WebService.sendOtp(verifyOtpData.phone)
    },
    {
      onSuccess: (res) => {
        formVerifyOtp.resetFields()
        setVerifyOtpData({ ...verifyOtpData, otpId: res.otpId })
        setRefCode(res.otpRef)
        setRemainingTime(5 * 60)
        message.success('ส่ง OTP ไปยังเบอร์โทรศัพท์แล้ว')
      },
      onError: (err: IErrorResponse) => {
        if (err.response.data.message === 'คุณสามารถกดขอรหัส OTP ได้หลังเวลา') {
          message.error('ขอรหัส OTP ได้หลังเวลา ' + dayjs(err.response.data.data).format('HH.mm น.'))
        } else {
          message.error('เซิฟเวอร์ขัดข้อง')
        }
      },
    },
  )
  const { mutate: checkPhone, isLoading: isLoadingCheckPhone } = useMutation(
    (data: IPhoneNumber) => {
      setVerifyOtpData({ phone: data.phone })
      return WebService.checkPhone(data.phone)
    },
    {
      onSuccess: () => {
        setStep(2)
      },
      onError: (err: IErrorResponse) => {
        if (err.response.data.message === 'เบอร์โทร มีอยู่ในระบบแล้ว') {
          message.error(err.response.data.message)
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
      <div className="container mx-auto flex flex-col gap-8">
        <RegisterProgress $step={step} className="w-full mx-auto md:w-3/4 lg:w-2/4 xl:w-2/5">
          <p>1</p>
          <p>2</p>
        </RegisterProgress>
        {step === 1 ? (
          <FormBox
            name="registerPhone"
            form={formSendOtp}
            onFinish={registerSetting?.useOtpRegister === true ? sendOtp : checkPhone}
            requiredMark={false}>
            {/* <LineLoginBtn icon={<Line />}>ดำเนินการต่อด้วย LINE</LineLoginBtn>
              <p className="text-center py-4">หรือ</p> */}
            <Form.Item label="เบอร์โทรศัพท์" name="phone" rules={[{ required: true, validator: validatePhoneNumber }]}>
              <Input type="tel" maxLength={10} />
            </Form.Item>
            <ButtonBox
              htmlType="submit"
              loading={registerSetting?.useOtpRegister === true ? isLoadingSendOtp : isLoadingCheckPhone}
              className="mx-auto">
              {registerSetting?.useOtpRegister === true ? 'ขอ OTP' : 'ยืนยัน'}
            </ButtonBox>
          </FormBox>
        ) : (
          <FormBox name="registerDetail" form={formRegister} onFinish={register} requiredMark={false}>
            <RecomPassword />
            <Form.Item label="รหัสผ่าน" name="password" rules={[{ required: true, validator: validatePassword }]}>
              <Input.Password maxLength={15} />
            </Form.Item>
            <Form.Item
              label="ยืนยันรหัสผ่าน"
              name="confirmPassword"
              rules={[{ required: true, validator: validatePassword }]}>
              <Input.Password maxLength={15} />
            </Form.Item>
            <Form.Item label="ชื่อ - สกุล" name="fullname" rules={[{ required: true, message: 'กรอกชื่อ-นามสกุล' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="เลขบัญชี" name="bankAccount" rules={[{ required: true, message: 'กรอกเลขบัญชีธนาคาร' }]}>
              <Input placeholder="เลขบัญชีธนาคาร (เฉพาะตัวเลข)" />
            </Form.Item>
            <Form.Item label="ธนาคาร" name="bankId" rules={[{ required: true, message: 'เลือกธนาคารรับเงินโอน' }]}>
              <Select placeholder="กรุณาเลือก">
                {bankList?.list.map((item) => (
                  <Select.Option value={item.id} key={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="ไอดีไลน์" name="lineId">
              <Input />
            </Form.Item>
            <Form.Item
              label="ช่องทางที่รู้จัก"
              name="channelId"
              rules={[{ required: true, message: 'เลือกช่องทางที่รู้จัก' }]}>
              <Select placeholder="กรุณาเลือก">
                {recommendList?.result.map((item) => (
                  <Select.Option value={item.id} key={item.id}>
                    {item.title}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <p className="text-center text-sm">
              <sup>**</sup> ข้อมูลบัญชีที่ถูกบันทึกไปแล้วไม่สามารถแก้ไขเองได้ <br />
              กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนบันทึก
            </p>
            <ButtonBox htmlType="submit" loading={isLoadingRegister} className="mx-auto mt-4">
              ยืนยัน
            </ButtonBox>
          </FormBox>
        )}
      </div>

      {/* Modal OTP Register */}
      <Modal open={isOpenModal} footer={false} closeIcon={false} className="modal-otp">
        <Form
          form={formVerifyOtp}
          name="otp"
          onFinish={verifyOtp}
          autoComplete="off"
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
          <ButtonBox
            loading={isLoadingVerifyOtp}
            disabled={remainingTime === 0}
            htmlType="submit"
            className="mx-auto mt-4 mb-8">
            ยืนยัน
          </ButtonBox>
          <p className="text-sm text-center">
            ไม่ได้รับรหัส OTP?
            <span onClick={() => resendOtp()} className="font-semibold hover:underline text-sm cursor-pointer ml-2">
              ส่ง OTP ให้ฉันอีกครั้ง
            </span>
          </p>
        </Form>
      </Modal>
    </Fragment>
  )
}

export default Register
