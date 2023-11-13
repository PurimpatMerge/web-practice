import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Col, Row, message } from 'antd'
import { BiCheck } from 'react-icons/bi'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { CardDetail, CardMenu } from '@/styles/shared/shared.styled'

const LoginDailyPage: NextPage = () => {
  const { t } = useTranslation(['common'])

  return (
    <PageLayout title="เช็คอิน" label="เช็คอิน รับโบนัสฟรี" back="/activity">
      <div className="container mx-auto">
        <Row gutter={[18, 14]}>
          <Col xs={24} sm={12} lg={8}>
            <CardMenu onClick={() => message.success('เช็คอินเรียบร้อย')}>
              <h1>วันที่ 1 +10</h1>
              <BiCheck />
            </CardMenu>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <CardMenu>
              <h1>วันที่ 2 +10</h1>
            </CardMenu>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <CardMenu>
              <h1>วันที่ 3 +10</h1>
            </CardMenu>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <CardMenu>
              <h1>วันที่ 4 +10</h1>
            </CardMenu>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <CardMenu>
              <h1>วันที่ 5 +10</h1>
            </CardMenu>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <CardMenu>
              <h1>วันที่ 6 +10</h1>
            </CardMenu>
          </Col>
          <Col xs={24} sm={12}>
            <CardMenu className="sm:float-right">
              <h1>วันที่ 7 +10</h1>
            </CardMenu>
          </Col>
          <Col xs={24} sm={12}>
            <CardMenu className="sm:float-left">
              <h1>โบนัสเช็คอินครบ 7 วัน +50</h1>
            </CardMenu>
          </Col>
        </Row>
        <CardDetail className="mx-auto w-full md:w-96 mt-8">
          <p className="text-center w-full text-sm md:text-base">
            <sup>**</sup> กิจกรรมจะถูกรีเช็ต ทุกวันอาทิตย์
          </p>
        </CardDetail>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default LoginDailyPage
