import { useCallback, useMemo, useState } from 'react'

import type { GetServerSidePropsContext, NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Table } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { getSession, useSession } from 'next-auth/react'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { AffiliateService, AllianceService, WebService } from '@/services'
import type { ITransferHistoryItem } from '@/types/modules/Auth'
import { setAccessToken } from '@/libs/axios'
import type { IPaginationQuery } from '@/types/modules/Base'
import { DATE_TIME_FORMAT, LIMIT_PAGE } from '@/configs'
import { covertIndexPage, formatNumber } from '@/libs/parser'

const TransferHistoryPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const { data: session } = useSession()
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: LIMIT_PAGE,
  })

  // _Query
  const { data: affiliateTransferHistory, isFetching: isAffiliateFetching } = useQuery(
    ['affiliate-transfer-history', queryParams],
    () => AffiliateService.affiliateTransferHistory({ ...queryParams }),
    { enabled: session?.user?.type === 'AFFILIATE' ? true : false },
  )
  const { data: allianceTransferHistory, isFetching: isAllianceFetching } = useQuery(
    ['alliance-transfer-history', queryParams],
    () => AllianceService.allianceTransferHistory({ ...queryParams }),
    { enabled: session?.user?.type === 'ALLIANCE' ? true : false },
  )

  const columnTransferHistory = useMemo((): ColumnsType<ITransferHistoryItem> => {
    return [
      {
        title: 'รายการ',
        render: (_, value, index) => `${covertIndexPage(index, queryParams.page, LIMIT_PAGE)}`,
      },
      {
        title: 'วันเวลา',
        dataIndex: 'createdAt',
        render: (value) => `${dayjs(value).format(DATE_TIME_FORMAT)}`,
      },
      {
        title: 'จำนวน',
        dataIndex: 'commission',
        render: (value) => `${formatNumber(value)}`,
      },
    ]
  }, [queryParams.page])

  // _Callback
  const handleTableChange = useCallback((newPagination: TablePaginationConfig) => {
    const params: IPaginationQuery = {
      page: Number(newPagination.current),
      limit: Number(newPagination.pageSize),
    }
    setQueryParams({ ...params })
  }, [])

  return (
    <PageLayout title="ประวัติการโอนเข้ากระเป๋าหลัก" label="ประวัติการโอนเข้ากระเป๋าหลัก">
      <div className="container mx-auto">
        <Table
          columns={columnTransferHistory}
          dataSource={
            session?.user?.type === 'AFFILIATE'
              ? affiliateTransferHistory?.result
              : session?.user?.type === 'ALLIANCE'
              ? allianceTransferHistory?.result
              : []
          }
          pagination={{
            current: queryParams.page,
            total:
              session?.user?.type === 'AFFILIATE'
                ? affiliateTransferHistory?.total
                : session?.user?.type === 'ALLIANCE'
                ? allianceTransferHistory?.total
                : 0,
            pageSize: LIMIT_PAGE,
            responsive: true,
            showSizeChanger: false,
          }}
          rowKey={(record) => record.id}
          loading={
            session?.user?.type === 'AFFILIATE'
              ? isAffiliateFetching
              : session?.user?.type === 'ALLIANCE'
              ? isAllianceFetching
              : null
          }
          onChange={handleTableChange}
          scroll={{ x: true }}
        />
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const session = await getSession(ctx)
    setAccessToken(session?.token?.accessToken)
    const serverSideProps = makeServerSideProps([...DEFAULT_LOCALE])
    const user = await WebService.userInfo()

    if (user?.type === 'NONE') {
      return {
        redirect: {
          destination: '/',
          permanent: true,
        },
      }
    }
    return {
      props: {
        ...serverSideProps,
      },
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

export default TransferHistoryPage
