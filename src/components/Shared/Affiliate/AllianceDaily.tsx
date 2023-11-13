import { Fragment, type FC, useMemo, useState, useCallback } from 'react'

import { Button, Col, DatePicker, Form, Row, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { AllianceService } from '@/services'
import type { IAllianceDailyFilter, IAllianceTransactionItem } from '@/types/modules/Alliance'
import { formatNumber } from '@/libs/parser'
import { DATE_FORMAT, DATE_FORMAT_FILTER } from '@/configs'
import { FormFilter } from '@/styles/shared/shared.styled'

const AllianceDaily: FC = () => {
  const [formSearch, setFormSearch] = useState<IAllianceDailyFilter>()

  // Query
  const { data: allianceDaily, isFetching } = useQuery(['alliance-daily', formSearch], () =>
    AllianceService.allianceDaily({ ...formSearch }),
  )

  const columnAllianceDaily = useMemo((): ColumnsType<IAllianceTransactionItem> => {
    return [
      {
        title: 'วันที่',
        dataIndex: 'createdAt',
        render: (value) => `${dayjs(value).format(DATE_FORMAT)}`,
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
  const handleFilter = useCallback((dataFilter: IAllianceDailyFilter) => {
    setFormSearch({
      from: dataFilter.dateRange ? dayjs(dataFilter.dateRange[0]).format(DATE_FORMAT_FILTER) : null,
      to: dataFilter.dateRange ? dayjs(dataFilter.dateRange[1]).format(DATE_FORMAT_FILTER) : null,
    })
  }, [])

  return (
    <Fragment>
      <FormFilter name="filterAllianceDaily" onFinish={handleFilter}>
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
        columns={columnAllianceDaily}
        dataSource={allianceDaily?.list ?? []}
        pagination={false}
        rowKey={(record) => record.id}
        loading={isFetching}
        scroll={{ x: true }}
      />
    </Fragment>
  )
}

export default AllianceDaily
