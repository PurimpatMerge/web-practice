import { useCallback, useMemo, useState } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Button, Col, DatePicker, Form, Row, Select, Table } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { WebService } from '@/services'
import type { ITransaction, ITransferDateFilter } from '@/types/modules/Auth'
import type { IPaginationQuery } from '@/types/modules/Base'
import { DATE_FORMAT, DATE_FORMAT_FILTER, LIMIT_PAGE } from '@/configs'
import { formatNumber } from '@/libs/parser'
import { FormFilter } from '@/styles/shared/shared.styled'

const TransactionHistoryPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: LIMIT_PAGE,
  })
  const [formSearch, setFormSearch] = useState<ITransferDateFilter>()

  // _Query
  const { data: transactionList, isFetching } = useQuery(['transaction-list', queryParams, formSearch], () =>
    WebService.transactionList({ ...queryParams, ...formSearch }),
  )

  const column = useMemo((): ColumnsType<ITransaction> => {
    return [
      {
        title: 'รายการ',
        dataIndex: 'transactionTypeTh',
      },
      {
        title: 'วัน - เวลา',
        dataIndex: 'transferAt',
        render: (value) => `${dayjs(value).format('DD/MM/YYYY, HH:mm:ss น.')}`,
      },
      {
        title: 'จำนวน',
        dataIndex: 'creditAmount',
        render: (value) => `${formatNumber(value)}`,
      },
      {
        title: 'สถานะ',
        dataIndex: 'transactionStatusName',
        render: (value) => <p className={value === 'เสร็จสิ้น' ? 'text-success' : 'text-failed'}>{value}</p>,
      },
    ]
  }, [])

  // _Callback
  const handleFilter = useCallback((dataFilter: ITransferDateFilter) => {
    setQueryParams({
      page: 1,
      limit: LIMIT_PAGE,
    })
    setFormSearch({
      transactionTypeId: dataFilter.transactionTypeId,
      fromTransferDate: dataFilter.transferDate ? dayjs(dataFilter.transferDate[0]).format(DATE_FORMAT_FILTER) : null,
      toTransferDate: dataFilter.transferDate ? dayjs(dataFilter.transferDate[1]).format(DATE_FORMAT_FILTER) : null,
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
    <PageLayout title="ประวัติธุรกรรมทั้งหมด" label="ประวัติธุรกรรมทั้งหมด">
      <div className="container mx-auto">
        <FormFilter name="filter" onFinish={handleFilter}>
          <Row gutter={[8, 8]}>
            <Col>
              <Form.Item name="transferDate">
                <DatePicker.RangePicker format={DATE_FORMAT} inputReadOnly />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="transactionTypeId">
                <Select placeholder="รายการ">
                  <Select.Option value={null}>ทั้งหมด</Select.Option>
                  <Select.Option value="1">ฝาก</Select.Option>
                  <Select.Option value="2">ถอน</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Button htmlType="submit">ค้นหา</Button>
            </Col>
          </Row>
        </FormFilter>
        <Table
          columns={column}
          dataSource={transactionList?.list ?? []}
          pagination={{
            current: queryParams.page,
            total: transactionList?.total ?? 0,
            pageSize: LIMIT_PAGE,
            responsive: true,
            showSizeChanger: false,
          }}
          rowKey={(record) => record.id}
          loading={isFetching}
          onChange={handleTableChange}
          scroll={{ x: true }}
        />
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default TransactionHistoryPage
