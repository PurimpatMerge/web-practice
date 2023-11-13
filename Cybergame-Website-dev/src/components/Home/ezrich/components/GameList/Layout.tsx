import React from 'react'

import { Col, Row } from 'antd'
import { useRouter } from 'next/router'

import PageHomeLayout from '@/components/Home/ezrich/Layouts'
import { TitleCard } from '@/components/Home/ezrich/styled'

type Props = {
  title: string
  sourceData: string[]
}
const GameListLayout = ({ title, sourceData }: Props) => {
  const router = useRouter()
  return (
    <PageHomeLayout title={title} noMarginTop>
      <TitleCard>{title}</TitleCard>
      <div className="container mx-auto py-12">
        <Row justify="center" gutter={[0, 6]}>
          {sourceData.map((img, index) => (
            <Col key={index} xs={12} md={8}>
              <div className="flex justify-center">
                <img
                  src={img}
                  alt={`${title} ${index}`}
                  className="hover:scale-[101%] cursor-pointer"
                  onClick={() => router.push('/login')}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </PageHomeLayout>
  )
}

export default GameListLayout
