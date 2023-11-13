import { Fragment, type FC, useMemo, useState, useCallback } from 'react'

import { Button, Col, DatePicker, Form, Input, Row, Table } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { AllianceService } from '@/services'
import type { IAllianceMemberFilter, IAllianceTransactionItem } from '@/types/modules/Alliance'
import type { IPaginationQuery } from '@/types/modules/Base'
import { DATE_FORMAT, DATE_FORMAT_FILTER, LIMIT_PAGE } from '@/configs'
import { formatNumber } from '@/libs/parser'
import { FormFilter } from '@/styles/shared/shared.styled'

const AllianceMember: FC = () => {
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: LIMIT_PAGE,
  })
  const [formSearch, setFormSearch] = useState<IAllianceMemberFilter>()

  // Query
  const { data: allianceMember, isFetching } = useQuery(['alliance-member', queryParams, formSearch], () =>
    AllianceService.allianceMember({ ...queryParams, ...formSearch }),
  )

  const columnAllianceMember = useMemo((): ColumnsType<IAllianceTransactionItem> => {
    return [
      {
        title: 'รหัสสมาชิก',
        dataIndex: 'memberCode',
      },
      {
        title: 'ฝาก',
        dataIndex: 'deposit',
        render: (value) => `${formatNumber(value)}`,
      },
      {
        title: 'ถอน',
        dataIndex: 'withdraw',
        render: (value) => `${formatNumber(value)}`,
      },
      {
        title: 'สุทธิ',
        dataIndex: 'netAmount',
        render: (value) => `${formatNumber(value)}`,
      },
    ]
  }, [])

  // _Callback
  const handleFilter = useCallback((dataFilter: IAllianceMemberFilter) => {
    setQueryParams({
      page: 1,
      limit: LIMIT_PAGE,
    })
    setFormSearch({
      memberCode: dataFilter.memberCode,
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
      <FormFilter name="filterAllianceMember" onFinish={handleFilter}>
        <Row gutter={[8, 8]}>
          <Col>
            <Form.Item name="dateRange">
              <DatePicker.RangePicker format={DATE_FORMAT} disabledDate={(date) => date > dayjs()} inputReadOnly />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="memberCode">
              <Input placeholder="ค้นหารหัสสมาชิก" />
            </Form.Item>
          </Col>
          <Col>
            <Button htmlType="submit">ค้นหา</Button>
          </Col>
        </Row>
      </FormFilter>
      <Table
        columns={columnAllianceMember}
        dataSource={allianceMember?.list ?? []}
        pagination={{
          current: queryParams.page,
          total: allianceMember?.total ?? 0,
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

export default AllianceMember
