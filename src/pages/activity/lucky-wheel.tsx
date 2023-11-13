import { useState } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Button, Modal } from 'antd'
import { MdLocationPin } from 'react-icons/md'
import { Spin } from 'antd/lib'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { Wheel } from '@/styles/shared/activity.styled'
import { CardDetail } from '@/styles/shared/shared.styled'

const LuckyWheelPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const [isRotating, setIsRotating] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const number = 0

  const handleCircleClick = async () => {
    const circles = document.querySelectorAll('.circle-container') as NodeListOf<HTMLDivElement>
    setIsRotating(true)
    const randomRotation = Math.floor(Math.random() * 44 + 1) + 3600
    // switch (caseNumber) {
    //   case 2:
    //     randomRotation += 270 // 5
    //     break
    //   case 3:
    //     randomRotation += 180 // 20
    //     break
    //   case 4:
    //     randomRotation += 90 // 50
    //     break
    //   case 5:
    //     randomRotation += 225 // 200
    //     break
    //   case 6:
    //     randomRotation += 135 // 500
    //     break
    //   case 7:
    //     randomRotation += 45 // 1,000
    //     break
    //   case 8:
    //     randomRotation += 315 // 10,000
    //     break
    //   default:
    //     randomRotation += 360 // 0
    //     break
    // }

    circles.forEach((circle) => {
      circle.style.transition = `${5}s ease-out`
      circle.style.transform = `rotate(${randomRotation}deg)`
    })

    setTimeout(() => {
      setIsRotating(false)
      setIsOpenModal(true)
      circles.forEach((circle) => {
        circle.style.transition = `${0}s ease-out`
        circle.style.transform = `rotate(${22.5}deg)`
      })
    }, 6000)
  }

  return (
    <PageLayout title="วงล้อนำโชค" label="วงล้อนำโชค" back="/activity">
      <div className="container mx-auto">
        <CardDetail className="mx-auto w-full md:w-96">
          <p>
            ทุกๆ ยอดเสียจำนวน 500 จะได้รับสิทธิ์หมุน 1 ครั้ง คุณได้สิทธิ์หมุนกงล้อจำนวน
            <span className="text-light font-bold"> {number}</span> ครั้ง <br />
          </p>
        </CardDetail>
        <Wheel>
          <div className="pin">
            <MdLocationPin size={90} />
          </div>
          <Button onClick={() => handleCircleClick()} disabled={isRotating || isOpenModal || number <= 0}>
            {isRotating ? <Spin /> : 'หมุน'}
          </Button>
          <div className="circle-container">
            {pieList.map((item, index) => (
              <div className="pie" style={{ background: item.bg }} key={index}>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Wheel>
      </div>

      {/* Modal */}
      <Modal width={240} open={isOpenModal} closeIcon={false} footer={false}>
        <p className="text-center mb-4">
          คุณได้รับรางวัล <span className="font-bold">0</span> บาท
        </p>
        <Button className="mx-auto" onClick={() => setIsOpenModal(false)}>
          ตกลง
        </Button>
      </Modal>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default LuckyWheelPage

const pieList = [
  { text: '5', bg: '#edc967' },
  { text: '200', bg: '#1d222e' },
  { text: '20', bg: '#edc967' },
  { text: '500', bg: '#1d222e' },
  { text: '50', bg: '#edc967' },
  { text: '1000', bg: '#1d222e' },
  { text: '0', bg: '#edc967' },
  { text: '10000', bg: '#1d222e' },
]
