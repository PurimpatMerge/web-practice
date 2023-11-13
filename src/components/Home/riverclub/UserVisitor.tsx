import { Fragment, type FC } from 'react'

import { useRouter } from 'next/router'
import type { TabsProps } from 'antd'
import { Col, Row, Tabs } from 'antd'
import { styled } from 'styled-components'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

import 'swiper/swiper-bundle.css'

const UserVisitor: FC = () => {
  const router = useRouter()

  const itemsHome: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <Fragment>
          <img src={imageList.tab[1]} alt="tab-01" />
          หน้าแรก
        </Fragment>
      ),
      children: (
        <Fragment>
          <div className="text-center md:px-32 pt-4">
            <p className="text-sm md:text-base">
              Riverclub เว็บตรง ไม่ผ่าน Agency ฟังก์ชันใช้งานง่าย ฝาก - ถอนไว ด้วยระบบ AUTO
              เล่นได้ทุกห้องโดยไม่ต้องโยกเงิน ไม่มีขั้นต่ำและไม่มีติดเทรินโอเวอร์ เราได้รวบรวม กีฬา คาสิโน
              เกมสล็อตชั้นนำมาไว้ให้คุณได้เลือกหลากหลาย
              เพื่อให้คุณได้เพลิดเพลินกับการเดิมพันออนไลน์แบบครบวงจรไม่ต้องสมัครหลายเว็บให้เสียเวลา
              <br /> <br />
              Riverclub ใช้ระบบมีความปลอดภัยสูง และมีความมั่นคงทางการเงินระดับแนวหน้า ทำให้คุณได้เดิมพันได้อย่างไร้กังวล
              ใช้งานง่ายสะดวกสบายสามารถเล่นได้ทุกที่ทุกเวลาพร้อมทั้งให้บริการระดับพรีเมี่ยมดูแลทุกการเดิมพันจากทีมงานคุณภาพ
              บริษัท Riverclub Company
            </p>
          </div>
          <img src={imageList.cardTab[1]} alt="" className="mx-auto mt-8" />
        </Fragment>
      ),
    },
    {
      key: '2',
      label: (
        <Fragment>
          <img src={imageList.tab[2]} alt="tab-02" />
          วิธีใช้งาน
        </Fragment>
      ),
      children: <img src={imageList.cardTab[2]} alt="how-to-use" className="mx-auto" />,
    },
    {
      key: '3',
      label: (
        <Fragment>
          <img src={imageList.tab[3]} alt="tab-03" />
          รีวิว
        </Fragment>
      ),
      children: <img src={imageList.cardTab[3]} alt="review" className="mx-auto" />,
    },
    {
      key: '4',
      label: (
        <Fragment>
          <img src={imageList.tab[4]} alt="tab-04" />
          โปรโมชัน
        </Fragment>
      ),
      children: (
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay]}>
          <SwiperSlide>
            <img src={imageList.CardPromotion1} alt="promotion-01" className="mx-auto" />,
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageList.CardPromotion2} alt="promotion-02" className="mx-auto" />,
          </SwiperSlide>
        </Swiper>
      ),
    },
    {
      key: '5',
      label: (
        <Fragment>
          <img src={imageList.tab[5]} alt="tab-05" />
          ติดต่อเรา
        </Fragment>
      ),
      children: null,
    },
  ]

  return (
    <VisitorShared>
      <div className="container mx-auto">
        <BannerBox className="py-4">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={16}>
              <img src={imageList.banner} alt="banner" />
            </Col>
            <Col xs={24} md={8}>
              <div className="flex flex-col text-center gap-4">
                <p>
                  ฝาก-ถอน กับธนาคารชั้นนำ <br />
                  <span className="font-bold text-[#FCFF73]">ตลอด 24 ชม.</span>
                </p>
                <img src={imageList.bankList} alt="bank" className="bank" />
                <img
                  src={imageList.register}
                  alt="register"
                  onClick={() => router.push('/register')}
                  className="register"
                />
              </div>
            </Col>
          </Row>
        </BannerBox>
        <TabsHome $bg={imageList.tab.bg} defaultActiveKey="1" items={itemsHome} />
        <CardBox gutter={[20, 20]} className="py-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col xs={12} md={8} lg={4} key={item}>
              <img src={imageList.card[item]} alt={'card-' + item} />
            </Col>
          ))}
        </CardBox>
      </div>
    </VisitorShared>
  )
}

export default UserVisitor

export const BannerBox = styled.div`
  .ant-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
    margin: auto;
    &.bank {
      max-width: 280px;
    }
    &.register {
      max-width: 240px;
      cursor: pointer;
      &:hover {
        scale: 1.015;
      }
    }
  }
  p,
  span {
    font-size: 24px;
    line-height: 130%;
  }
  @media (max-width: 989.98px) {
    p,
    span {
      font-size: 18px;
    }
  }
  @media (max-width: 454.98px) {
    p,
    span {
      font-size: 16px;
    }
  }
`
export const CardBox = styled(Row)`
  animation: moveUpDown 2.5s infinite alternate ease-in-out;
  @media (max-width: 767.98px) {
    animation: none;
  }
`
export const TabsHome = styled(Tabs)<{ $bg: string }>`
  margin: 0;
  .ant-tabs-nav {
    .ant-tabs-nav-wrap {
      background: url(${(props) => props.$bg});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 15px;
      border: 1px solid var(--main-color);
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          margin: 0 40px;
          .ant-tabs-tab-btn {
            color: #fff;
            font-weight: 500;
            img {
              width: 50px;
            }
            &:hover {
              color: var(--main-color);
              img {
                scale: 1.015;
              }
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
  }
  .ant-tabs-ink-bar {
    background: #fff;
  }
  .ant-tabs-content-holder {
    img {
      width: 100%;
      max-width: 500px;
    }
  }
  @media (max-width: 767.98px) {
    .ant-tabs-nav {
      .ant-tabs-nav-wrap {
        border-radius: 5px;
        .ant-tabs-nav-list {
          .ant-tabs-tab {
            margin: 0 16px;
            .ant-tabs-tab-btn {
              img {
                width: 40px;
              }
            }
          }
        }
      }
    }
  }
`
