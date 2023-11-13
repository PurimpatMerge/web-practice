import { useState } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Form, Modal, Spin, message } from 'antd'
import { useMutation, useQuery } from '@tanstack/react-query'
import { BiInfoCircle } from 'react-icons/bi'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { ButtonBox, CardDetail } from '@/styles/shared/shared.styled'
import { WebService } from '@/services'
import type { IErrorResponse } from '@/types/modules/Base'
import { formatNumber } from '@/libs/parser'
import { CardReport } from '@/styles/shared/affiliate.styled'

const ReturnLoserPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const [form] = Form.useForm()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  // Query
  const { data } = useQuery(['detail-return'], () => WebService.detailReturn())

  // Mutation
  const { mutate, isLoading } = useMutation(
    () => {
      setIsOpenModal(false)
      return WebService.takeReturn()
    },
    {
      onSuccess: async () => {
        await message.success('โยกเงินเข้ากระเป๋าหลักสำเร็จ')
        window.location.reload()
      },
      onError: async (err: IErrorResponse) => {
        await message.error(err.response.data.message)
      },
    },
  )

  return (
    <PageLayout title="คืนยอดเสีย" label={`คืนยอดเสีย ${data?.returnPercent}%`} back="/activity">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <CardDetail className="mx-auto w-full md:w-3/4 lg:w-2/4 xl:w-2/5 text-left">
            <div>
              <p className="text-light text-base font-bold mb-2">เงื่อนไข การรับยอดเสีย</p>
              {data ? (
                <div dangerouslySetInnerHTML={{ __html: data?.detail }} />
              ) : (
                <Spin className="flex justify-center" />
              )}
            </div>
          </CardDetail>
          <CardReport className="mx-auto w-full md:w-3/4 lg:w-2/4 xl:w-2/5">
            <p>จำนวนเครดิตที่ได้รับ</p>
            <h1>{formatNumber(data?.returnPrice)}</h1>
          </CardReport>
        </div>
        <ButtonBox
          onClick={() => setIsOpenModal(true)}
          className="mx-auto"
          disabled={!(data?.statusName === 'READY' && data?.returnPrice > 0)}>
          โยกเงิน
        </ButtonBox>
        <ButtonBox onClick={() => router.push('/transfer-history')} className="mx-auto">
          ประวัติการโอนเข้ากระเป๋าหลัก
        </ButtonBox>
      </div>

      {/* Modal */}
      <Modal width={400} open={isOpenModal} footer={false} onCancel={() => setIsOpenModal(false)}>
        <Form form={form} name="returnAmount" onFinish={mutate}>
          <BiInfoCircle size={90} className="mx-auto" />
          <h1 className="text-center mt-4 text-base">ต้องการ โยกเงินเข้ากระเป๋าหลัก ใช่หรือไม่</h1>
          <ButtonBox loading={isLoading} htmlType="submit" className="mx-auto mt-4 mb-8">
            ใช่, โยกเงินเข้ากระเป่าหลัก
          </ButtonBox>
        </Form>
      </Modal>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default ReturnLoserPage
