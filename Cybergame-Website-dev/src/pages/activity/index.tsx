import { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Col, Row, Spin } from 'antd'
import { useRouter } from 'next/router'
import { BiSolidCalendarStar, BiSolidCoin, BiSolidColor, BiSolidCoupon } from 'react-icons/bi'
import { useQuery } from '@tanstack/react-query'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import { CardMenu } from '@/styles/shared/shared.styled'
import { WebService } from '@/services'
import type { IOpenList } from '@/types/modules/Base'

const ActivityPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const [list, setList] = useState<IOpenList[]>([])

  const { data } = useQuery(['open-list-promotion'], () => WebService.openListPromotion())

  useEffect(() => {
    if (data) {
      const updatedData = data.map((item) => {
        switch (item.key) {
          case 'GOOD_WHEEL':
            return {
              ...item,
              path: '/activity/lucky-wheel',
              icon: <BiSolidColor />,
            }
          case 'COUPON_CASH':
            return {
              ...item,
              path: '/activity/gift-voucher',
              icon: <BiSolidCoupon />,
            }
          case 'CHECK_IN':
            return {
              ...item,
              path: '/activity/login-daily',
              icon: <BiSolidCalendarStar />,
            }
          case 'RETURN_LOSS':
            return {
              ...item,
              path: '/activity/return-loser',
              icon: <BiSolidCoin />,
            }
          default:
            return item
        }
      })

      setList(updatedData)
    }
  }, [data])

  return (
    <PageLayout title="กิจกรรม" label="กิจกรรม">
      <div className="container mx-auto">
        <Row gutter={[36, 14]}>
          {data ? (
            list?.map((item, index) => (
              <Col xs={24} md={12} key={item.key}>
                <CardMenu
                  onClick={() => item.key === 'RETURN_LOSS' && router.push(item.path)}
                  className={index % 2 === 0 ? 'md:float-right' : 'md:float-left'}>
                  <h1>{item.name}</h1>
                  {item.icon}
                </CardMenu>
              </Col>
            ))
          ) : (
            <Spin className="mx-auto mt-4" />
          )}
        </Row>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default ActivityPage
