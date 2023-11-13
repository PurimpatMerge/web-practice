import type { FC } from 'react'

import { useTranslation } from 'next-i18next'
import { Col, Row } from 'antd'
import { BiSolidMegaphone, BiSolidPackage } from 'react-icons/bi'
import { useRouter } from 'next/router'

import { CardMenu } from '@/styles/shared/shared.styled'

const Promotion: FC = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()

  return (
    <div className="container mx-auto">
      <Row gutter={[36, 14]}>
        <Col xs={24} md={12}>
          <CardMenu onClick={() => router.push('/promotion/news')} className="md:float-right">
            <h1>ข่าวสาร</h1>
            <BiSolidMegaphone />
          </CardMenu>
        </Col>
        <Col xs={24} md={12}>
          <CardMenu onClick={() => router.push('/promotion/list')} className="md:float-left">
            <h1>โปรโมชั่น</h1>
            <BiSolidPackage />
          </CardMenu>
        </Col>
      </Row>
    </div>
  )
}

export default Promotion
