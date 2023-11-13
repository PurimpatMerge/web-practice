import { type FC } from 'react'

import { useRouter } from 'next/router'
import { Col, Row } from 'antd'
import { styled } from 'styled-components'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

export const generateImageList = (basePath: object, count: number) => {
  return Array.from({ length: count }, (_, i) => `${basePath[i + 1]}`)
}

const gameList = [
  {
    id: 1,
    col: 4,
    name: 'popular',
    list: generateImageList(imageList.popular, 6),
  },
  {
    id: 2,
    col: 4,
    name: 'slot',
    list: generateImageList(imageList.slot, 6),
  },
  {
    id: 3,
    col: 3,
    name: 'new-game',
    list: generateImageList(imageList.newGame, 16),
  },
  {
    id: 4,
    col: 4,
    name: 'casino',
    list: generateImageList(imageList.casino, 6),
  },
  {
    id: 5,
    col: 4,
    name: 'sport',
    list: generateImageList(imageList.sport, 6),
  },
]

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <VisitorShared>
      <Banner $bg={imageList.banner}>
        <Row className="container mx-auto">
          <Col xs={0} md={2}>
            <div className="flex items-end h-full">
              <img src={imageList.balloon[1]} alt="prop-banner-01" className="balloon" />
            </div>
          </Col>
          <Col xs={0} md={5}>
            <div className="flex items-center h-full">
              <img src={imageList.prop[1]} alt="prop-banner-01" className="prop" />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <div className="flex flex-col gap-4 pb-8 px-8 md:pb-0 md:px-0">
              <img src={imageList.titleBanner} alt="banner" />
              <img
                onClick={() => router.push('/register')}
                src={imageList.register}
                alt="register"
                className="register"
              />
            </div>
          </Col>
          <Col xs={0} md={5}>
            <div className="flex items-center h-full">
              <img src={imageList.prop[2]} alt="prop-banner-02" />
            </div>
          </Col>
          <Col xs={0} md={2}>
            <div className="flex items-start h-full">
              <img src={imageList.balloon[2]} alt="prop-banner-01" className="balloon" />
            </div>
          </Col>
        </Row>
      </Banner>
      <div className="container mx-auto">
        <SwiperHome
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            989.98: {
              slidesPerView: 5,
            },
            0: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item}>
              <img src={imageList.swiper[item]} alt={'swiper-' + item} />
            </SwiperSlide>
          ))}
        </SwiperHome>
      </div>
      <CardBox className="container mx-auto py-6 md:py-8">
        <div className="hidden md:flex flex-col gap-8">
          {gameList.map((list) => (
            <Row gutter={[8, 8]} key={list.id}>
              {list.list.map((img, index) => (
                <Col xs={list.col} key={index}>
                  <img
                    src={img}
                    alt={`${list.name}-${index + 1}`}
                    onClick={() => router.push('/login')}
                    className="hover:scale-[101%] transition-all"
                  />
                </Col>
              ))}
            </Row>
          ))}
        </div>
        <div className="md:hidden flex flex-col gap-4">
          {gameList.map((list) => (
            <div key={list.id} className="flex gap-2 overflow-x-scroll">
              {list.list.map((img, index) => (
                <img src={img} alt={`${list.name}-${index + 1}`} key={index} onClick={() => router.push('/login')} />
              ))}
            </div>
          ))}
        </div>
      </CardBox>
      <BannerGame $bg={imageList.bannerGame} className="container mx-auto">
        <Row>
          <Col xs={0} md={12}>
            <img src={imageList.bigWin} alt="big-win" />
          </Col>
          <Col xs={24} md={12}>
            <img src={imageList.bigWinMb} alt="big-win-mb" />
          </Col>
        </Row>
      </BannerGame>
      <div className="container mx-auto py-8">
        <Row gutter={[20, 20]}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col xs={12} md={8} lg={4} key={item}>
              <img src={imageList.card[item]} alt={'card-' + item} />
            </Col>
          ))}
        </Row>
      </div>
    </VisitorShared>
  )
}

export default UserVisitor

export const Banner = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 160px;
  margin-top: -120px;
  margin-bottom: 20px;
  img {
    margin: 0 auto;
    transition: 0.5s;
    animation: scale-in 0.5s forwards;
    &.balloon {
      animation: moveUpDown 2.5s infinite alternate ease-in-out;
    }
    &.register {
      width: 300px;
      cursor: pointer;
      @media (max-width: 1399.98px) {
        width: 200px;
      }
      @media (max-width: 989.98px) {
        width: 170px;
      }
      @media (max-width: 767.98px) {
        width: 140px;
      }
    }
    &.prop {
      animation: moveLeftRight 12s infinite alternate ease-in-out;
      @keyframes moveLeftRight {
        0%,
        100% {
          transform: translateX(-20px);
        }
        50% {
          transform: translateX(20px);
        }
      }
    }
  }
`
export const SwiperHome = styled(Swiper)`
  .swiper-slide {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
  }
`
export const BannerGame = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardBox = styled.div`
  img {
    animation: scale-in 0.5s forwards;
    cursor: pointer;
  }
  @media (max-width: 767.98px) {
    img {
      width: 180px;
    }
  }
`
