import type { FC } from 'react'

import { useTranslation } from 'next-i18next'
import { Form, Input, message } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { signIn, type SignInOptions } from 'next-auth/react'

import { ButtonBox, FormBox } from '@/styles/shared/shared.styled'
import { validatePhoneNumber } from '@/libs/validation'

const Login: FC = () => {
  const { t } = useTranslation(['common'])
  const [form] = Form.useForm()
  const router = useRouter()

  // Mutation
  const { mutate, isLoading } = useMutation(
    (data: SignInOptions) => {
      return signIn('credentials', {
        redirect: false,
        password: data.password,
        username: data.phone,
        type: 'web',
      })
    },
    {
      onSuccess: (data) => {
        if (data.error) {
          message.error('เบอร์โทรหรือรหัสผ่านไม่ถูกต้อง')
          form.resetFields()
        } else {
          message.success('เข้าสู่ระบบสำเร็จ')
          router.push('/')
        }
      },
      onError: () => {
        message.error('เซิฟเวอร์ขัดข้อง')
      },
    },
  )

  return (
    <div className="container mx-auto">
      <FormBox name="login" form={form} onFinish={mutate} requiredMark={false} autoComplete="off">
        {/* <LineLoginBtn icon={<Line />}>ดำเนินการต่อด้วย LINE</LineLoginBtn>
        <p className="text-center py-4">หรือ</p> */}
        <Form.Item label="เบอร์โทรศัพท์" name="phone" rules={[{ required: true, validator: validatePhoneNumber }]}>
          <Input maxLength={10} />
        </Form.Item>
        <Form.Item label="รหัสผ่าน" name="password" rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}>
          <Input.Password />
        </Form.Item>
        <div className="w-full flex justify-between">
          <Link href={'/register'} className="text-sm hover:underline">
            สมัครสมาชิก
          </Link>
          <Link href={'/forgot-password'} className="text-sm hover:underline">
            ลืมรหัสผ่าน
          </Link>
        </div>
        <ButtonBox htmlType="submit" loading={isLoading} className="mx-auto mt-4">
          เข้าสู่ระบบ
        </ButtonBox>
      </FormBox>
    </div>
  )
}

export default Login
