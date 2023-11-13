import { useState } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import type { UploadProps } from 'antd'
import { Button, DatePicker, Form, InputNumber, Select, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import type { UploadChangeParam, UploadFile } from 'antd/es/upload'
import dayjs from 'dayjs'
import { useMutation, useQuery } from '@tanstack/react-query'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { ButtonBox, FormBox } from '@/styles/shared/shared.styled'
import type { IDeposit } from '@/types/modules/Auth'
import { WebService } from '@/services'
import 'dayjs/locale/th'

dayjs.locale('th')

const DepositPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<Array<unknown>>([])

  // _Query
  const { data: bankDeposit } = useQuery(['bank-deposit'], () => WebService.bankDeposit())

  // Mutation
  const { mutate, isLoading } = useMutation(
    async (data: IDeposit) => {
      const formData = new FormData()
      if (typeof fileList[0] === 'object' && 'originFileObj' in fileList[0]) {
        formData.append('file', (fileList[0] as { originFileObj: File }).originFileObj)
      }
      const responseQrUrl = await WebService.checkQR(formData)
      const responseFile = await WebService.uploadFile(formData)
      if (responseQrUrl.message === 'success' && responseFile) {
        const deposit: IDeposit = {
          amount: data.amount,
          bankId: data.bankId,
          depositedAt: dayjs(data.depositedAt).format('YYYY-MM-DD HH:mm'),
          rawQrCode: responseQrUrl?.data,
          slipUrl: responseFile?.imageUrl,
        }
        return WebService.transactionDeposit({ ...deposit })
      }
    },
    {
      onSuccess: () => {
        message.success('ส่งข้อมูลสลิปสำเร็จ')
      },
      onError: () => {
        message.error('ไม่พบบันทึก')
      },
    },
  )

  const handleUpload = (info: UploadChangeParam<UploadFile<unknown>>) => {
    const { fileList } = info
    const fileListArray = Array.from(fileList)
    setFileList(fileListArray.slice(-1))
  }

  return (
    <PageLayout title="แจ้งฝาก" label="แจ้งฝาก" back="/deposit">
      <div className="container mx-auto flex flex-col gap-8">
        <FormBox name="deposit" form={form} onFinish={mutate} requiredMark={false} className="mx-auto w-full md:w-96">
          <Form.Item label="จำนวนเงินที่ฝาก" name="amount" rules={[{ required: true, message: 'กรอกจำนวนเงิน' }]}>
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
          <Form.Item label="แนบสลิปธนาคาร" name="slipUrl" rules={[{ required: true, message: 'แนบสลิป' }]}>
            <Upload
              listType="text"
              accept=".jpg, .jpeg, .png"
              fileList={fileList as unknown as UploadProps<unknown>['fileList']}
              beforeUpload={() => false}
              onChange={(file) => {
                handleUpload(file)
              }}
              maxCount={1}>
              <Button icon={<UploadOutlined />}>เลือกรูปภาพ</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="โอนเข้าธนาคาร" name="bankId" rules={[{ required: true, message: 'เลือกธนาคาร' }]}>
            <Select placeholder="เลือกธนาคารที่โอนเข้า">
              {bankDeposit?.map((item) => (
                <Select.Option value={item.id} key={item.id}>
                  {item.bankName + ' : ' + item.accountNumber}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="วันที่ - เวลา"
            name="depositedAt"
            rules={[{ required: true, message: 'ระบุวันที่ - เวลา' }]}>
            <DatePicker
              format={'DD/MM/YYYY - HH:mm'}
              showTime={{ format: 'HH:mm' }}
              placeholder="เลือกวันที่ - เวลา"
              disabledDate={(date) => date > dayjs()}
              inputReadOnly
            />
          </Form.Item>
          <ButtonBox htmlType="submit" loading={isLoading} className="mx-auto">
            ส่งข้อมูล
          </ButtonBox>
        </FormBox>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default DepositPage
