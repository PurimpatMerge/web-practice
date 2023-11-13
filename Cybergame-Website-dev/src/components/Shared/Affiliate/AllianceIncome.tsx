import { Fragment, type FC, useMemo, useCallback, useState } from 'react'

import { Button, Col, DatePicker, Form, Row, Table } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { AllianceService } from '@/services'
import type { IAllianceIncomeFilter, IAllianceIncomeItem } from '@/types/modules/Alliance'
import { DATE_FORMAT, DATE_FORMAT_FILTER, LIMIT_PAGE } from '@/configs'
import type { IPaginationQuery } from '@/types/modules/Base'
import { formatNumber } from '@/libs/parser'
import { FormFilter } from '@/styles/shared/shared.styled'

const AllianceIncome: FC = () => {
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: LIMIT_PAGE,
  })
  const [formSearch, setFormSearch] = useState<IAllianceIncomeFilter>()

  // Query
  const { data: allianceIncome, isFetching } = useQuery(['alliance-income', queryParams, formSearch], () =>
    AllianceService.allianceIncome({ ...queryParams, ...formSearch }),
  )

  const columnAllianceIncome = useMemo((): ColumnsType<IAllianceIncomeItem> => {
    return [
      {
        title: 'รหัสสมาชิก',
        dataIndex: 'memberCode',
      },
      {
        title: 'ยอดเล่นสะสม',
        dataIndex: 'accumulatedPlay',
        render: (value) => `${formatNumber(value, false)}`,
      },
      {
        title: 'ยอดแพ้-ชนะ',
        dataIndex: 'winLose',
        render: (value) => `${formatNumber(value, false)}`,
      },
      {
        title: 'ค่าคอมทั้งหมด',
        dataIndex: 'totalCommission',
        render: (value) => `${formatNumber(value, false)}`,
      },
      {
        title: 'ยอดแพ้-ชนะ พันธมิตร',
        dataIndex: 'winLoseAlliance',
        render: (value) => `${formatNumber(value, false)}`,
      },
      {
        title: 'ค่าคอม พันธมิตร',
        dataIndex: 'commissionAlliance',
        render: (value) => `${formatNumber(value, false)}`,
      },
      {
        title: 'ยอดจ่ายโบนัสทั้งหมด',
        dataIndex: 'totalBonusPayout',
        render: (value) => `${formatNumber(value, false)}`,
      },
      {
        title: 'ยอดจ่ายโบนัสพันธมิตร',
        dataIndex: 'allianceBonusPayout',
        render: (value) => `${formatNumber(value, false)}`,
      },
      {
        title: 'ยอดรายได้พันธมิตร',
        dataIndex: 'incomeAlliance',
        render: (value) => `${formatNumber(value, false)}`,
      },
    ]
  }, [])

  // _Callback
  const handleFilter = useCallback((dataFilter: IAllianceIncomeFilter) => {
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
      <FormFilter name="filterAllianceIncome" onFinish={handleFilter}>
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
        columns={columnAllianceIncome}
        dataSource={allianceIncome?.result ?? []}
        pagination={{
          current: queryParams.page,
          total: allianceIncome?.total ?? 0,
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

export default AllianceIncome
