import { Fragment, type FC } from 'react'

import { Col, Row, Spin } from 'antd'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { ButtonBox } from '@/styles/shared/shared.styled'
import { AllianceService } from '@/services'
import { CardReport } from '@/styles/shared/affiliate.styled'

const AllianceSummary: FC = () => {
  const router = useRouter()

  // Query
  const { data: allianceSummary } = useQuery(['alliance-summary'], () => AllianceService.allianceSummary())

  return (
    <Fragment>
      {allianceSummary ? (
        <Row gutter={[18, 12]}>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนกดเข้าลิงค์</p>
              <h1>{allianceSummary?.linkClickTotal}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนสมาชิกสมัครวันนี้</p>
              <h1>{allianceSummary?.memberRegisterToday}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนสมาชิกออนไลน์</p>
              <h1>{allianceSummary?.memberOnlineToday}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนไม่ได้รับยูส</p>
              <h1>{allianceSummary?.noMemberCode}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนได้รับยูส</p>
              <h1>{allianceSummary?.haveMemberCode}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนทั้งหมด</p>
              <h1>{allianceSummary?.recommendTotal}</h1>
            </CardReport>
          </Col>
        </Row>
      ) : (
        <Spin className="w-full mx-auto" />
      )}
      <ButtonBox onClick={() => router.push('/transfer-history')} className="mx-auto mt-8">
        ประวัติการโอนเข้ากระเป๋าหลัก
      </ButtonBox>
    </Fragment>
  )
}

export default AllianceSummary
