import { Fragment, type FC, useMemo, useState, useCallback } from 'react'

import { Button, Col, DatePicker, Form, Row, Table } from 'antd'
import { useQuery } from '@tanstack/react-query'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import dayjs from 'dayjs'

import { AffiliateService } from '@/services'
import type { IAffiliateIncomeFilter, IAffiliateIncomeItem } from '@/types/modules/Affiliate'
import { DATE_FORMAT, DATE_FORMAT_FILTER, LIMIT_PAGE } from '@/configs'
import type { IPaginationQuery } from '@/types/modules/Base'
import { formatNumber } from '@/libs/parser'
import { FormFilter } from '@/styles/shared/shared.styled'

const AffiliateIncome: FC = () => {
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: LIMIT_PAGE,
  })
  const [formSearch, setFormSearch] = useState<IAffiliateIncomeFilter>()

  // Query
  const { data: affiliateIncome, isFetching } = useQuery(['affiliate-income', queryParams, formSearch], () =>
    AffiliateService.affiliateIncome({ ...queryParams, ...formSearch }),
  )

  const columnAffiliateIncome = useMemo((): ColumnsType<IAffiliateIncomeItem> => {
    return [
      {
        title: 'วันที่',
        dataIndex: 'createdAt',
        render: (value) => `${dayjs(value).format(DATE_FORMAT)}`,
      },
      {
        title: 'ยอดที่ได้รับ',
        dataIndex: 'receivedBalance',
        render: (value) => `${formatNumber(value)}`,
      },
    ]
  }, [])

  // _Callback
  const handleFilter = useCallback((dataFilter: IAffiliateIncomeFilter) => {
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
      <FormFilter name="filterAffiliateIncome" onFinish={handleFilter}>
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
      <Table
        columns={columnAffiliateIncome}
        dataSource={affiliateIncome?.list ?? []}
        pagination={{
          current: queryParams.page,
          total: affiliateIncome?.total ?? 0,
          pageSize: LIMIT_PAGE,
          responsive: true,
          showSizeChanger: false,
        }}
        rowKey={(record) => record.createdAt}
        loading={isFetching}
        onChange={handleTableChange}
        scroll={{ x: true }}
      />
    </Fragment>
  )
}

export default AffiliateIncome
