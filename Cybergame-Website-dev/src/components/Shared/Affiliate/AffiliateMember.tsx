import { Fragment, type FC, useMemo, useState } from 'react'

import { Table } from 'antd'
import { useQuery } from '@tanstack/react-query'
import type { ColumnsType } from 'antd/es/table'

import { AffiliateService } from '@/services'
import type { IAffiliateMemberItem } from '@/types/modules/Affiliate'
import type { IPaginationQuery } from '@/types/modules/Base'
import { formatNumber } from '@/libs/parser'

const AffiliateMember: FC = () => {
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: 20,
  })

  // Query
  const { data: affiliateMember, isFetching } = useQuery(['affiliate-member', queryParams], () =>
    AffiliateService.affiliateMember({ ...queryParams }),
  )

  const columnAffiliateMember = useMemo((): ColumnsType<IAffiliateMemberItem> => {
    return [
      {
        title: 'รหัสสมาชิก',
        dataIndex: 'memberCode',
      },
      {
        title: 'ยอดเล่น',
        dataIndex: 'playBalance',
        render: (value) => `${formatNumber(value)}`,
      },
      {
        title: 'ยอดที่ได้รับ',
        dataIndex: 'receivedBalance',
        render: (value) => `${formatNumber(value)}`,
      },
    ]
  }, [])

  return (
    <Fragment>
      <p className="mb-1">20 รายการล่าสุด</p>
      <Table
        columns={columnAffiliateMember}
        dataSource={affiliateMember?.list ?? []}
        pagination={false}
        rowKey={(record) => record.id}
        loading={isFetching}
        scroll={{ x: true }}
      />
    </Fragment>
  )
}

export default AffiliateMember
