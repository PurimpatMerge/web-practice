import { useState } from 'react'

import type { GetServerSidePropsContext, NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import type { TabsProps } from 'antd'
import { Button, Form, Modal, Spin, Tabs, message } from 'antd'
import { useMutation, useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { BiInfoCircle } from 'react-icons/bi'
import { getSession } from 'next-auth/react'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { ButtonBox } from '@/styles/shared/shared.styled'
import { copyText } from '@/libs/parser'
import { AffiliateService, WebService } from '@/services'
import type { IErrorResponse } from '@/types/modules/Base'
import AffiliateSummary from '@/components/Shared/Affiliate/AffiliateSummary'
import AffiliateMember from '@/components/Shared/Affiliate/AffiliateMember'
import AffiliateIncome from '@/components/Shared/Affiliate/AffiliateIncome'
import AllianceSummary from '@/components/Shared/Affiliate/AllianceSummary'
import AllianceDaily from '@/components/Shared/Affiliate/AllianceDaily'
import AllianceMember from '@/components/Shared/Affiliate/AllianceMember'
import AllianceIncome from '@/components/Shared/Affiliate/AllianceIncome'
import AllianceHistory from '@/components/Shared/Affiliate/AllianceHistory'
import { LinkRecom } from '@/styles/shared/affiliate.styled'
import { setAccessToken } from '@/libs/axios'

import 'dayjs/locale/th'

dayjs.locale('th')

const AffiliatePage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const [form] = Form.useForm()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  // _Query
  const { data: userInfo } = useQuery(['user-info'], () => WebService.userInfo())

  // Mutation
  const { mutate, isLoading } = useMutation(
    () => {
      setIsOpenModal(false)
      return AffiliateService.withdrawCommission()
    },
    {
      onSuccess: async () => {
        await message.success('ถอนเงินสำเร็จ')
        window.location.reload()
      },
      onError: async (err: IErrorResponse) => {
        await message.error(err.response.data.message)
      },
    },
  )

  const itemsAffiliate: TabsProps['items'] = [
    {
      key: '1',
      label: <h2>สรุป</h2>,
      children: <AffiliateSummary />,
    },
    {
      key: '2',
      label: <h2>สมาชิก</h2>,
      children: <AffiliateMember />,
    },
    {
      key: '3',
      label: <h2>สรุปรายได้</h2>,
      children: <AffiliateIncome />,
    },
    {
      key: '4',
      label: <h2 onClick={() => setIsOpenModal(true)}>ถอนรายได้</h2>,
    },
  ]

  const itemsAlliance: TabsProps['items'] = [
    {
      key: '1',
      label: <h2>สรุปภาพรวม</h2>,
      children: <AllianceSummary />,
    },
    {
      key: '2',
      label: <h2>ฝาก-ถอน รายวัน</h2>,
      children: <AllianceDaily />,
    },
    {
      key: '3',
      label: <h2>ฝาก-ถอน สมาชิก</h2>,
      children: <AllianceMember />,
    },
    {
      key: '4',
      label: <h2>รายได้</h2>,
      children: <AllianceIncome />,
    },
    {
      key: '5',
      label: <h2>ประวัติ</h2>,
      children: <AllianceHistory />,
    },
  ]

  return (
    <PageLayout
      title="พันธมิตร"
      label={
        userInfo?.type === 'AFFILIATE' ? 'ลิงค์รับทรัพย์ แนะนำเพื่อน' : userInfo?.type === 'ALLIANCE' && 'พันธมิตร'
      }>
      {userInfo ? (
        <div className="container mx-auto">
          <LinkRecom className="mx-auto md:w-3/4 lg:w-2/4 xl:w-2/5">
            <p className="whitespace-nowrap font-bold">ลิงค์แนะนำ</p>
            <p id="copy-text" className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {`${window.location.origin}/register?ref=` + userInfo?.ref}
            </p>
            <Button onClick={() => copyText('copy-text', 'คัดลอกลิ้งแนะนำไว้แล้ว')}>คัดลอก</Button>
          </LinkRecom>
          <Tabs
            defaultActiveKey="1"
            items={userInfo?.type === 'AFFILIATE' ? itemsAffiliate : userInfo?.type === 'ALLIANCE' && itemsAlliance}
          />
        </div>
      ) : (
        <Spin className="flex justify-center mt-8" />
      )}

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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const session = await getSession(ctx)
    setAccessToken(session?.token?.accessToken)
    const serverSideProps = makeServerSideProps([...DEFAULT_LOCALE])
    const user = await WebService.userInfo()

    if (user?.type === 'NONE') {
      return {
        redirect: {
          destination: '/deposit',
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

export default AffiliatePage
