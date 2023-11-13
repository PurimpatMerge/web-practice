import { useMemo, useState } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Form, InputNumber, Spin, Table, message } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { ButtonBox, CardDetail, FormBox } from '@/styles/shared/shared.styled'
import { WebService } from '@/services'
import type { ITransaction, IWithdraw } from '@/types/modules/Auth'
import type { IPaginationQuery } from '@/types/modules/Base'
import { formatNumber } from '@/libs/parser'

const WithdrawalPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const [form] = Form.useForm()
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: 5,
  })

  // _Query
  const { data: userInfo, refetch } = useQuery(['user-info'], () => WebService.userInfo())
  const { data: transactionList, isFetching } = useQuery(['transaction-list', queryParams], () =>
    WebService.transactionList({ transactionTypeId: 2, ...queryParams }),
  )
  const { data: configurationWithdraw } = useQuery(['configuration-withdraw'], () => WebService.configurationWithdraw())

  // Mutation
  const { mutate, isLoading } = useMutation(
    async (data: IWithdraw) => {
      refetch()
      const userInfo = await WebService.userInfo()
      if (data.amount > userInfo?.credit) {
        message.error('ยอดเงินไม่เพียงพอ')
      } else if (data.amount < configurationWithdraw?.minimumWithdraw) {
        message.error('จำนวนเงินไม่ถึงขั้นต่ำ')
      } else if (data.amount > 50000) {
        message.error('ถอนได้สูงสุด 50,000 บาท / ครั้ง')
      } else {
        return WebService.transactionWithdraw(data)
      }
    },
    {
      onSuccess: () => {
        window.location.reload()
      },
      onError: () => {
        null
      },
    },
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

  return (
    <PageLayout title="แจ้งถอน" label="แจ้งถอน" back="/">
      <div className="container mx-auto flex flex-col gap-8">
        <FormBox
          name="withdrawal"
          form={form}
          onFinish={mutate}
          requiredMark={false}
          className="mx-auto w-full md:w-96">
          <CardDetail className="mb-4">
            {userInfo ? (
              <p className="w-full text-sm md:text-base">
                ถอนเงินเข้าบัญชี: {userInfo?.bankname} <br />
                เลขที่บัญชี: {userInfo?.bankAccount}
                <br />
                คุณ: {userInfo?.fullname}
                <br />
                ยอดเงิน: {formatNumber(userInfo?.credit)}
                <br />
                <br />
                <sup>*</sup> ถอนขั้นต่ำ
                <span className="text-light font-bold">
                  {' ' + formatNumber(configurationWithdraw?.minimumWithdraw, false) + ' '}
                </span>
                บาท
                <br />
                <sup>*</sup> ถอนสูงสุด
                <span className="text-light font-bold">{' ' + '50,000' + ' '}</span>
                บาท / ครั้ง
              </p>
            ) : (
              <Spin />
            )}
          </CardDetail>
          <Form.Item label="จำนวนเงิน" name="amount" rules={[{ required: true, message: 'กรอกจำนวนเงิน' }]}>
            <InputNumber
              formatter={(value) => {
                if (value !== undefined && value !== null) {
                  const parts = value.toString().split('.')
                  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  return parts.join('.')
                }
                return ''
              }}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
          <ButtonBox htmlType="submit" loading={isLoading} className="mx-auto">
            แจ้งถอน
          </ButtonBox>
        </FormBox>
        <div>
          <p className="pb-1">ประวัติการถอน 5 ครั้งล่าสุด</p>
          <Table
            columns={column}
            dataSource={transactionList?.list ?? []}
            pagination={false}
            rowKey={(record) => record.id}
            loading={isFetching}
            scroll={{ x: true }}
          />
        </div>
        <ButtonBox onClick={() => router.push('/transaction-history')} className="mx-auto">
          ประวัติธุรกรรมทั้งหมด
        </ButtonBox>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default WithdrawalPage
