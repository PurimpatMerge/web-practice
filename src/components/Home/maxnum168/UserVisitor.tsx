import { type FC } from 'react'

import { useRouter } from 'next/router'
import { Col, Row } from 'antd'
import { styled } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

export const generateImageList = (basePath: object, count: number) => {
  return Array.from({ length: count }, (_, i) => `${basePath[i + 1]}`)
}

const gameList = [
  {
    id: 1,
    icon: `${imageList.sport.icon}`,
    title: 'SPORT ONLINE',
    col: 4,
    list: generateImageList(imageList.sport, 6),
  },
  {
    id: 2,
    icon: `${imageList.casino.icon}`,
    title: 'CASINO ONLINE',
    col: 4,
    list: generateImageList(imageList.casino, 6),
  },
  {
    id: 3,
    icon: `${imageList.slot.icon}`,
    title: 'SLOT ONLINE',
    col: 4,
    list: generateImageList(imageList.slot, 6),
  },
  {
    id: 4,
    icon: `${imageList.popular.icon}`,
    title: 'POPULAR GAME',
    col: 3,
    list: generateImageList(imageList.popular, 16),
  },
]

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <VisitorShared>
      <div className="container mx-auto">
        <div className="mt-4 mb-8">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              989.98: {
                slidesPerView: 2,
              },
              454.98: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay]}>
            {[1, 2, 3, 4].map((item) => (
              <SwiperSlide key={item}>
                <img src={imageList.swiper[item]} alt={`swiper-${item}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Row className="pt-4">
            {[1, 2, 3, 4].map((item) => (
              <Col xs={12} md={6} key={item}>
                <img key={item} src={imageList.card[item]} alt={`card-${item}`} />
              </Col>
            ))}
          </Row>
        </div>
        {gameList.map((list) => (
          <div key={list.id}>
            <div className="flex justify-center md:justify-start">
              <TitleEx>
                <img src={list.icon} alt={list.title} />
                <p>{list.title}</p>
              </TitleEx>
            </div>
            <div className="pt-4 pb-8">
              <Row gutter={[10, 10]}>
                {list.list.map((img, index) => (
                  <Col onClick={() => router.push('/login')} xs={12} sm={8} md={list.col} key={index}>
                    <img
                      src={img}
                      alt={`${list.title}-${index + 1}`}
                      className="hover:scale-[101%] transition-all cursor-pointer mx-auto"
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        ))}
      </div>
    </VisitorShared>
  )
}

export default UserVisitor

export const TitleEx = styled.div`
  border: 5px solid #daffef;
  background: #00301d;
  box-shadow: 0px 0px 14px 0px #41e2be, 0px 0px 14px 0px #41e2be, 0px 4px 25px 0px #41e2be inset;
  border-radius: 15px;
  padding: 0.5rem;
  gap: 10px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  padding-right: 16px;
  img {
    width: 50px;
  }
  p {
    color: #fff;
    font-size: 20px;
  }
  @media (max-width: 454.98px) {
    font-size: 16px;
    padding: 0.25rem;
    padding-right: 12px;
  }
`
