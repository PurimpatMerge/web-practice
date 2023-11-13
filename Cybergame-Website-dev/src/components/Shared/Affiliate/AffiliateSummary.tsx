import { Fragment, type FC, useMemo } from 'react'

import { Col, Row, Table } from 'antd'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import type { ColumnsType } from 'antd/es/table'

import { ButtonBox } from '@/styles/shared/shared.styled'
import { formatNumber } from '@/libs/parser'
import { AffiliateService } from '@/services'
import type { ISummaryCommission } from '@/types/modules/Affiliate'
import { CardReport } from '@/styles/shared/affiliate.styled'

const AffiliateSummary: FC = () => {
  const router = useRouter()

  // Query
  const { data: affiliateSummary } = useQuery(['affiliate-summary'], () => AffiliateService.affiliateSummary())

  const columnAffiliateSummary = useMemo((): ColumnsType<ISummaryCommission> => {
    return [
      {
        title: 'ประเภทเกมส์ (ค่าคอมมิชชั่น %)',
        render: (_, value) => `${value.name + ' (' + value.percent + '%)'}`,
      },
      {
        title: 'รายได้ยอดเล่นทั้งหมด',
        dataIndex: 'value',
        render: (value) => `${formatNumber(value, false)}`,
      },
    ]
  }, [])

  const affiliateSummaryCommission: Array<ISummaryCommission> = [
    {
      name: 'บอลออนไลน์',
      percent: affiliateSummary?.percentSport ? affiliateSummary?.percentSport : 0,
      value: affiliateSummary?.commissionSport,
    },
    {
      name: 'คาสิโนออนไลน์',
      percent: affiliateSummary?.percentCasino ? affiliateSummary?.percentCasino : 0,
      value: affiliateSummary?.commissionCasino,
    },
    {
      name: 'เกมส์สล็อต',
      percent: affiliateSummary?.percentSlot ? affiliateSummary?.percentSlot : 0,
      value: affiliateSummary?.commissionSlot,
    },
  ]

  return (
    <Fragment>
      <div className="flex flex-col gap-3">
        <Row gutter={[18, 12]}>
          <Col xs={0} md={6} />
          <Col xs={24} md={12}>
            <CardReport>
              <p>รายได้คงเหลือ</p>
              <h1>{formatNumber(affiliateSummary?.commissionCurrent, false)}</h1>
            </CardReport>
          </Col>
          <Col xs={0} md={6} />
          <Col xs={24} md={8}>
            <CardReport>
              <p>รายได้ทั้งหมด</p>
              <h1>{formatNumber(affiliateSummary?.commissionTotal, false)}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>โบนัส แชร์ลิ้ง</p>
              <h1>{formatNumber(affiliateSummary?.bonusShareTotal, false)}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>โบนัส ยอดฝากแรก</p>
              <h1>{formatNumber(affiliateSummary?.firstDepositBonus, false)}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนกดเข้าลิ้ง</p>
              <h1>{formatNumber(affiliateSummary?.linkClickTotal, false)}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนสมาชิกสมัคร</p>
              <h1>{formatNumber(affiliateSummary?.memberTotal, false)}</h1>
            </CardReport>
          </Col>
          <Col xs={24} md={8}>
            <CardReport>
              <p>จำนวนสมาชิกฝาก</p>
              <h1>{formatNumber(affiliateSummary?.memberDepositTotal, false)}</h1>
            </CardReport>
          </Col>
        </Row>
        <Table
          columns={columnAffiliateSummary}
          dataSource={affiliateSummaryCommission ?? []}
          pagination={false}
          rowKey={(record) => record.name}
        />
      </div>
      <ButtonBox onClick={() => router.push('/transfer-history')} className="mx-auto mt-8">
        ประวัติการโอนเข้ากระเป๋าหลัก
      </ButtonBox>
    </Fragment>
  )
}

export default AffiliateSummary
