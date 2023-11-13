import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import { BiSolidLock, BiSolidUserPin } from 'react-icons/bi'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { CardMenu } from '@/styles/shared/shared.styled'

const AccountPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()

  return (
    <PageLayout title="บัญชี" label="บัญชี">
      <div className="container mx-auto">
        <Row gutter={[36, 14]}>
          <Col xs={24} md={12}>
            <CardMenu onClick={() => router.push('/account/change-password')} className="md:float-right">
              <h1>เปลี่ยนรหัสผ่าน</h1>
              <BiSolidLock />
            </CardMenu>
          </Col>
          <Col xs={24} md={12}>
            <CardMenu onClick={() => router.push('/account/profile-info')} className="md:float-left">
              <h1>ข้อมูลบัญชี</h1>
              <BiSolidUserPin />
            </CardMenu>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default AccountPage
