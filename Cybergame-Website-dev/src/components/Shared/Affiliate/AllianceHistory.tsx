import { Fragment, type FC, useMemo, useState, useCallback } from 'react'

import { Button, Col, DatePicker, Form, Row, Table } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { CardReport } from '@/styles/shared/affiliate.styled'
import { DATE_FORMAT, DATE_FORMAT_FILTER, DATE_TIME_FORMAT, LIMIT_PAGE } from '@/configs'
import { AllianceService } from '@/services'
import type { IAllianceHistoryFilter, IAllianceHistoryListItem } from '@/types/modules/Alliance'
import type { IPaginationQuery } from '@/types/modules/Base'
import { covertIndexPage, formatNumber, formatPhoneNumber } from '@/libs/parser'
import { FormFilter } from '@/styles/shared/shared.styled'

const AllianceHistory: FC = () => {
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: LIMIT_PAGE,
  })
  const [formSearch, setFormSearch] = useState<IAllianceHistoryFilter>()

  // Query
  const { data: allianceHistorySummary } = useQuery(['alliance-history-summary', formSearch], () =>
    AllianceService.allianceHistorySummary({ ...formSearch }),
  )
  const { data: allianceHistoryList, isFetching } = useQuery(['alliance-hsitory-list', queryParams, formSearch], () =>
    AllianceService.allianceHistoryList({ ...queryParams, ...formSearch }),
  )

  const columnHistory = useMemo((): ColumnsType<IAllianceHistoryListItem> => {
    return [
      {
        title: '#',
        render: (_, value, index) => <p>{covertIndexPage(index, queryParams.page, LIMIT_PAGE)}</p>,
      },
      {
        title: 'เบอร์โทร',
        dataIndex: 'phone',
        render: (value) => `${formatPhoneNumber(value)}`,
      },
      {
        title: 'รหัสสมาชิก',
        dataIndex: 'memberCode',
      },
      {
        title: 'ฝากครั้งแรก',
        dataIndex: 'credit',
        render: (value) => `${formatNumber(value)}`,
      },
      {
        title: 'วันที่สมัคร',
        dataIndex: 'registerDate',
        render: (value) => `${dayjs(value).format(DATE_TIME_FORMAT)}`,
      },
    ]
  }, [queryParams.page])

  // _Callback
  const handleFilter = useCallback((dataFilter: IAllianceHistoryFilter) => {
    setQueryParams({
      page: 1,
      limit: LIMIT_PAGE,
    })
    setFormSearch({
      from: dataFilter.dateRange ? dayjs(dataFilter.dateRange[0]).format(DATE_FORMAT_FILTER) : null,
      to: dataFilter.dateRange ? dayjs(dataFilter.dateRange[1]).format(DATE_FORMAT_FILTER) : null,
    })
  }, [])

  const handleTableChange = useCallback((newPagination: TablePaginationConfig) => {
    const params: IPaginationQuery = {
      page: Number(newPagination.current),
      limit: Number(newPagination.pageSize),
    }
    setQueryParams({ ...params })
  }, [])

  return (
    <Fragment>
      <FormFilter name="filterAllianceHistory" onFinish={handleFilter}>
        <Row gutter={[8, 8]}>
          <Col>
            <Form.Item name="dateRange">
              <DatePicker.RangePicker format={DATE_FORMAT} disabledDate={(date) => date > dayjs()} inputReadOnly />
            </Form.Item>
          </Col>
          <Col>
            <Button htmlType="submit">ค้นหา</Button>
          </Col>
        </Row>
      </FormFilter>
      <Row gutter={[18, 12]} className="mb-3">
        <Col xs={24} sm={12} lg={6}>
          <CardReport>
            <p>จำนวนไม่ได้รับยูส</p>
            <h1>{allianceHistorySummary?.noMemberCode}</h1>
          </CardReport>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <CardReport>
            <p>จำนวนได้รับยูส</p>
            <h1>{allianceHistorySummary?.haveMemberCode}</h1>
          </CardReport>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <CardReport>
            <p>จำนวนทั้งหมด</p>
            <h1>{allianceHistorySummary?.recommendTotal}</h1>
          </CardReport>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <CardReport>
            <p>จำนวนฝากครั้งแรก</p>
            <h1>{allianceHistorySummary?.firstDepositCount}</h1>
          </CardReport>
        </Col>
      </Row>
      <Table
        columns={columnHistory}
        dataSource={allianceHistoryList?.list ?? []}
        pagination={{
          current: queryParams.page,
          total: allianceHistoryList?.total ?? 0,
          pageSize: LIMIT_PAGE,
          responsive: true,
          showSizeChanger: false,
        }}
        rowKey={(record) => record.id}
        loading={isFetching}
        onChange={handleTableChange}
        scroll={{ x: true }}
      />
    </Fragment>
  )
}

export default AllianceHistory
