import { type FC } from 'react'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Col, Row, Tabs, type TabsProps } from 'antd'
import { styled } from 'styled-components'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

const UserVisitor: FC = () => {
  const itemsHome: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex flex-col jutify-center items-center gap-1 font-medium">
          <img src={imageList.Tab1} alt="tab-1" width={50} />
          หน้าแรก
        </div>
      ),
      children: <img src={imageList.Home} alt="home" className="mx-auto" />,
    },
    {
      key: '2',
      label: (
        <div className="flex flex-col jutify-center items-center gap-1 font-medium">
          <img src={imageList.Tab2} alt="tab-2" width={50} />
          วิธีใช้งาน
        </div>
      ),
      children: <img src={imageList.Promotion} alt="promotion" className="mx-auto" />,
    },
    {
      key: '3',
      label: (
        <div className="flex flex-col jutify-center items-center gap-1 font-medium">
          <img src={imageList.Tab3} alt="tab-3" width={50} />
          รีวิว
        </div>
      ),
      children: (
        <Row gutter={[20, 20]}>
          <Col xs={24} md={12} lg={6}>
            <img src={imageList.Review1} alt="review-1" className="mx-auto" />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <img src={imageList.Review2} alt="review-2" className="mx-auto" />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <img src={imageList.Review3} alt="review-3" className="mx-auto" />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <img src={imageList.Review4} alt="review-4" className="mx-auto" />
          </Col>
        </Row>
      ),
    },
    {
      key: '4',
      label: (
        <div className="flex flex-col jutify-center items-center gap-1 font-medium">
          <img src={imageList.Tab4} alt="tab-4" width={50} />
          โปรโมชั่น
        </div>
      ),
      children: (
        <Row gutter={[20, 20]}>
          <Col xs={24} lg={8}>
            <img src={imageList.Direction1} alt="direction-1" className="mx-auto" />
          </Col>
          <Col xs={24} lg={8}>
            <img src={imageList.Direction2} alt="direction-2" className="mx-auto" />
          </Col>
          <Col xs={24} lg={8}>
            <img src={imageList.Direction3} alt="direction-3" className="mx-auto" />
          </Col>
        </Row>
      ),
    },
    {
      key: '5',
      label: (
        <div className="flex flex-col jutify-center items-center gap-1 font-medium">
          <img src={imageList.Tab5} alt="tab-5" width={50} />
          ติดต่อเรา
        </div>
      ),
      children: (
        <Row gutter={[20, 20]}>
          <Col md={24}>
            <img src={imageList.Contact} alt="contact-1" className="mx-auto" />
          </Col>
        </Row>
      ),
    },
  ]

  return (
    <VisitorShared>
      <CardBox $bg="">
        <div className="container mx-auto">
          <img src={imageList.Banner} alt="banner" className="mx-auto" />
        </div>
      </CardBox>
      <div className="container mx-auto">
        <TabsHome defaultActiveKey="1" items={itemsHome} />
      </div>
      <CardBox $bg="">
        <div className="container mx-auto mb-6">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              989: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay]}>
            <SwiperSlide>
              <img src={imageList.Sponsor1} alt="sponsor-1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageList.Sponsor2} alt="sponsor-2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageList.Sponsor3} alt="sponsor-3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageList.Sponsor4} alt="sponsor-4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageList.Sponsor5} alt="sponsor-5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageList.Sponsor6} alt="sponsor-6" />
            </SwiperSlide>
          </Swiper>
        </div>
      </CardBox>
      <CardBox $bg="">
        <div className="container mx-auto">
          <img src={imageList.Agency} alt="agency" className="mx-auto" />
        </div>
      </CardBox>
      <CardBox $bg="">
        <img src={imageList.PaymentAll} alt="payment-all" className="w-full" />
      </CardBox>
      <div className="bg-black flex justify-center py-2">
        <p className="text-xs font-light text-white">2023 © gm1.com | All Rights Reserved</p>
      </div>
    </VisitorShared>
  )
}

export default UserVisitor

const TabsHome = styled(Tabs)`
  margin-top: 20px;
  margin-bottom: 50px;
  img {
    min-width: 50px;
  }
  .ant-tabs-nav {
    .ant-tabs-nav-wrap {
      background: radial-gradient(
          70.71% 70.71% at 50% 50%,
          #000 0%,
          #242321 8%,
          #000 30%,
          #0e0c08 40%,
          rgba(0, 0, 0, 0) 80%
        ),
        radial-gradient(70.71% 70.71% at 50% 50%, #1a1a1a 0%, #26261a 8%, #0a0905 25%, #1e1a12 62.5%, #1e1a11 100%);
      position: relative;
      display: flex;
      flex: auto;
      align-self: stretch;
      overflow: hidden;
      white-space: nowrap;
      box-shadow: 0px 4px 4px 0px #00000040;
      .ant-tabs-nav-list {
        margin: auto;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .ant-tabs-tab {
          margin: 0 40px;
          .ant-tabs-tab-btn {
            color: #fff;
            font-weight: 500;
            span {
              font-weight: 500;
            }
            &:hover {
              color: #fff;
            }
          }
          &.ant-tabs-tab-active {
            .ant-tabs-tab-btn {
              color: var(--main-color);
            }
          }
        }
      }
    }
    &::before {
      display: none;
    }
  }
  .ant-tabs-ink-bar {
    background: var(--main-color);
  }
  .ant-tabs-nav-more {
    display: none;
  }
  .ant-tabs-content-holder {
    overflow: hidden;
    .ant-row {
      animation: slide-in 0.5s forwards;
    }
  }
  .ant-form {
    display: flex;
    gap: 10px;
    .ant-form-item {
      margin: 0 0 12px 0;
      .ant-picker,
      .ant-input {
        border-radius: 5px;
      }
    }
  }
  @media (max-width: 767px) {
    .ant-tabs-nav {
      .ant-tabs-nav-wrap {
        border-radius: 0;
        .ant-tabs-nav-list {
          width: auto;
          .ant-tabs-tab {
            margin: 0 16px;
            .ant-tabs-tab-btn {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`
const CardBox = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .ant-col {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 260px;
      border-radius: 5px;
      animation: scale-in 0.5s forwards;
    }
  }
`
