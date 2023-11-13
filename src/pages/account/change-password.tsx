import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Form, Input, message } from 'antd'
import { useMutation } from '@tanstack/react-query'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { ButtonBox, FormBox } from '@/styles/shared/shared.styled'
import { WebService } from '@/services'
import type { IErrorResponse } from '@/types/modules/Base'
import type { IChangePassword } from '@/types/modules/Auth'
import { validatePassword } from '@/libs/validation'
import RecomPassword from '@/components/Shared/RecomPassword'

const ChangePasswordPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const [form] = Form.useForm()

  // Mutation
  const { mutate, isLoading } = useMutation(
    (data: IChangePassword) => {
      if (data.newPassword !== data.confirmNewPassword) {
        return Promise.reject({ errorCode: 'passwordNew' })
      } else {
        delete data.confirmNewPassword
        return WebService.changePassword({ ...data })
      }
    },
    {
      onSuccess: () => {
        message.success('เปลี่ยนรหัสผ่านสำเร็จ')
      },
      onError: (err: IErrorResponse) => {
        if (err.errorCode === 'passwordNew') {
          message.error('รหัสผ่านใหม่ไม่ตรงกัน')
        } else {
          message.error('รหัสผ่านเก่าไม่ถูกต้อง')
        }
      },
    },
  )

  return (
    <PageLayout title="เปลี่ยนรหัสผ่าน" label="เปลี่ยนรหัสผ่าน" back="/account">
      <div className="container mx-auto">
        <FormBox
          name="changePassword"
          form={form}
          onFinish={mutate}
          requiredMark={false}
          autoComplete="off"
          className="mx-auto w-full sm:w-96">
          <RecomPassword />
          <Form.Item label="รหัสผ่านเก่า" name="oldPassword" rules={[{ required: true, validator: validatePassword }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item label="รหัสผ่านใหม่" name="newPassword" rules={[{ required: true, validator: validatePassword }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="ยืนยันรหัสผ่านใหม่"
            name="confirmNewPassword"
            rules={[{ required: true, validator: validatePassword }]}>
            <Input.Password />
          </Form.Item>
          <ButtonBox htmlType="submit" loading={isLoading} className="mx-auto">
            ยืนยัน
          </ButtonBox>
        </FormBox>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default ChangePasswordPage
