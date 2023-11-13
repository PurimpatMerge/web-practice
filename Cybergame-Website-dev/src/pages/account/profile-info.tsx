import { useEffect } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Form, Input, Spin } from 'antd'
import { useQuery } from '@tanstack/react-query'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { WebService } from '@/services'
import { formatPhoneNumber } from '@/libs/parser'
import { ProfileInfo } from '@/styles/shared/profile-info.styled'

const ProfileInfoPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const [formUserInfo] = Form.useForm()

  // _Query
  const { data: userInfo } = useQuery(['user-info'], () => WebService.userInfo())

  useEffect(() => {
    formUserInfo.setFieldsValue({
      bankAccount: userInfo?.bankAccount,
      bankname: userInfo?.bankname,
      fullname: userInfo?.fullname,
      memberCode: userInfo?.memberCode ? userInfo?.memberCode : '-',
      phone: formatPhoneNumber(userInfo?.phone),
    })
  }, [formUserInfo, userInfo])

  return (
    <PageLayout title="ข้อมูลบัญชี" label="ข้อมูลบัญชี" back="/account">
      <div className="container mx-auto">
        <ProfileInfo className="mx-auto w-full md:w-3/4 lg:w-2/4 xl:w-2/5">
          {userInfo ? (
            <Form name="userInfo" form={formUserInfo}>
              <Form.Item label="คุณ" name="fullname">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="รหัสบัญชี" name="memberCode">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="เบอร์โทรศัพท์" name="phone">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="ธนาคาร" name="bankname">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="หมายเลขบัญชี" name="bankAccount">
                <Input readOnly />
              </Form.Item>
            </Form>
          ) : (
            <Spin className="flex justify-center" />
          )}
        </ProfileInfo>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default ProfileInfoPage
