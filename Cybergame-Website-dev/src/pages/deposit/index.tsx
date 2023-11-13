import { useMemo, useState } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Button, Col, Row, Spin, Table } from 'antd'
import Image from 'next/image'
import type { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { useQuery } from '@tanstack/react-query'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { ButtonBox, CardBank, CardDetail } from '@/styles/shared/shared.styled'
import type { ITransaction } from '@/types/modules/Auth'
import { WebService } from '@/services'
import type { IPaginationQuery } from '@/types/modules/Base'
import { copyText, formatNumber } from '@/libs/parser'

const DepositPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const [queryParams, setQueryParams] = useState<IPaginationQuery>({
    page: 1,
    limit: 5,
  })

  // _Query
  const { data: transactionList, isFetching } = useQuery(['transaction-list', queryParams], () =>
    WebService.transactionList({ transactionTypeId: 1, ...queryParams }),
  )
  const { data: bankDeposit } = useQuery(['bank-deposit'], () => WebService.bankDeposit())
  const { data: webLine } = useQuery(['web-line'], () => WebService.webLine())

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
    <PageLayout title="ระบบฝากเงินอัตโนมัติ" label="ระบบฝากเงินอัตโนมัติ">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <CardDetail className="mx-auto w-full md:w-3/4 lg:w-2/4 xl:w-2/5">
            <p className="w-full text-sm md:text-base">
              บัญชีที่โอนมาต้องเป็นบุคคลเดียวกันกับชื่อที่สมัครมาเท่านั้น <br />
              หากเกิดปัญหา กรุณาติดต่อเจ้าหน้าที่ <br /> Line ID : <span className="text-light">{webLine?.idLine}</span>
              <br />
              กรุณาโอนเข้าไปทางบัญชีปลายทางด้างล่าง <br className="sm:hidden" />
              <span className="text-light text-sm md:text-base">เพื่อเปิดบัญชีเล่นเกมทั้งหมด</span>
              <br /> <br />
              <sup>*</sup> ฝากขั้นต่ำ <span className="text-light font-bold">1</span> บาท
            </p>
          </CardDetail>
          <Row gutter={[14, 14]} className="max-h-96 overflow-scroll">
            {bankDeposit ? (
              bankDeposit?.map((item) => (
                <Col xs={24} md={12} lg={8} xxl={6} key={item.id}>
                  <CardBank>
                    <div>
                      <div className="flex items-center gap-2">
                        <Image src={item.bankIconUrl} width={24} height={24} alt={item.accountNumber} />
                        <p className="text-sm md:text-base">{item.bankName}</p>
                      </div>
                      <p className="text-sm md:text-base">
                        เลขบัญชี <span id={'copy-text' + item.id}>{item.accountNumber}</span>
                        <br />
                        {item.accountName}
                      </p>
                    </div>
                    <Button onClick={() => copyText('copy-text' + item.id, 'คัดลอกเลขบัญชีไว้แล้ว')}>คัดลอก</Button>
                  </CardBank>
                </Col>
              ))
            ) : (
              <Spin className="mx-auto" />
            )}
          </Row>
        </div>
        <ButtonBox onClick={() => router.push('/deposit/deposit')} className="mx-auto">
          คลิกแจ้งฝาก
        </ButtonBox>
        <div>
          <p className="pb-1">ประวัติการฝาก 5 ครั้งล่าสุด </p>
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

export default DepositPage
