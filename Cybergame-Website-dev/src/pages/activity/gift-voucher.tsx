import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Form, Input } from 'antd'
import { useMutation } from '@tanstack/react-query'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { ButtonBox, FormBox } from '@/styles/shared/shared.styled'

const GiftVoucherPage: NextPage = () => {
  const { t } = useTranslation(['common'])

  // Mutation
  const { mutate, isLoading } = useMutation(
    () => {
      return null
    },
    {
      onSuccess: () => {
        null
      },
      onError: () => {
        null
      },
    },
  )

  return (
    <PageLayout title="คูปองเงินสด" label="คูปองเงินสด" back="/activity">
      <div className="container mx-auto">
        <FormBox name="" requiredMark={false}>
          <Form.Item label="รหัสคูปอง" name="" rules={[{ required: true, message: 'กรอกรหัสคูปอง' }]}>
            <Input />
          </Form.Item>
          <ButtonBox htmlType="submit" loading={isLoading} className="mx-auto">
            ส่งรหัสคูปอง
          </ButtonBox>
        </FormBox>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default GiftVoucherPage
