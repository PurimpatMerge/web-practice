import { Fragment, type FC } from 'react'

import { useRouter } from 'next/router'
import type { TabsProps } from 'antd'
import { Col, Row, Tabs } from 'antd'
import { styled } from 'styled-components'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

const UserVisitor: FC = () => {
  const router = useRouter()

  const itemsHome: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <Fragment>
          <img src={imageList.Tab1} alt="tabs" />
          หน้าแรก
        </Fragment>
      ),
      children: (
        <div className="text-center md:px-32 pt-8">
          <p className="text-sm md:text-base">
            4bar88 เว็บตรง ไม่ผ่าน Agency ฟังก์ชันใช้งานง่าย ฝาก - ถอนไว ด้วยระบบ AUTO เล่นได้ทุกห้องโดยไม่ต้องโยกเงิน
            ไม่มีขั้นต่ำและไม่มีติดเทรินโอเวอร์ เราได้รวบรวม กีฬา คาสิโน เกมสล็อตชั้นนำมาไว้ให้คุณได้เลือกหลากหลาย
            เพื่อให้คุณได้เพลิดเพลินกับการเดิมพันออนไลน์แบบครบวงจรไม่ต้องสมัครหลายเว็บให้เสียเวลา
            <br /> <br />
            4bar88 ใช้ระบบมีความปลอดภัยสูง และมีความมั่นคงทางการเงินระดับแนวหน้า ทำให้คุณได้เดิมพันได้อย่างไร้กังวล
            ใช้งานง่ายสะดวกสบายสามารถเล่นได้ทุกที่ทุกเวลาพร้อมทั้งให้บริการระดับพรีเมี่ยมดูแลทุกการเดิมพันจากทีมงานคุณภาพ
            บริษัท 4bar88 Company
          </p>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <Fragment>
          <img src={imageList.Tab2} alt="tabs" />
          วิธีใช้งาน
        </Fragment>
      ),
      children: <img src={imageList.CardTab2} alt="how-to-use" width={500} className="mx-auto" />,
    },
    {
      key: '3',
      label: (
        <Fragment>
          <img src={imageList.Tab3} alt="tabs" />
          รีวิว
        </Fragment>
      ),
      children: <img src={imageList.CardTab3} alt="review" width={500} className="mx-auto" />,
    },
    {
      key: '4',
      label: (
        <Fragment>
          <img src={imageList.Tab4} alt="tabs" />
          โปรโมชัน
        </Fragment>
      ),
      children: <img src={imageList.CardTab4} alt="promotion" width={500} className="mx-auto" />,
    },
    {
      key: '5',
      label: (
        <Fragment>
          <img src={imageList.Tab5} alt="tabs" />
          ติดต่อเรา
        </Fragment>
      ),
      children: null,
    },
  ]

  return (
    <VisitorShared>
      <div className="container mx-auto">
        <BannerBox>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={16}>
              <img src={imageList.Banner} alt="banner" />
            </Col>
            <Col xs={24} md={8}>
              <div className="flex flex-col text-center gap-4">
                <p>
                  ฝาก-ถอน กับธนาคารชั้นนำ <br />
                  <span className="font-bold text-[#FCFF73]">ตลอด 24 ชม.</span>
                </p>
                <img src={imageList.BankList} alt="bank" className="bank" />
                <img
                  src={imageList.Register}
                  alt="register"
                  onClick={() => router.push('/register')}
                  className="register"
                />
                <p>
                  ออโต้เต็มระบบ <br />
                  <span className="font-bold text-[#FCFF73]">บริการ 24 ชั่วโมง</span> <br />
                </p>
                <p>
                  SPORT BETTING AND CASINO <br /> AND GAME ONLINE
                </p>
              </div>
            </Col>
          </Row>
        </BannerBox>
        <TabsHome $bg={imageList.Tab} defaultActiveKey="1" items={itemsHome} />
        <CardBox gutter={[20, 20]}>
          <Col xs={12} md={8} lg={4}>
            <img src={imageList.Card1} alt="sport-book" />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <img src={imageList.Card2} alt="sport-book" />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <img src={imageList.Card3} alt="sport-book" />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <img src={imageList.Card4} alt="sport-book" />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <img src={imageList.Card5} alt="sport-book" />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <img src={imageList.Card6} alt="sport-book" />
          </Col>
        </CardBox>
      </div>
    </VisitorShared>
  )
}

export default UserVisitor

export const BannerBox = styled.div`
  padding-top: 20px;
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
  @media (max-width: 480px) {
    p,
    span {
      font-size: 16px;
    }
  }
`
export const LoginRegisterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  img {
    cursor: pointer;
    &:hover {
      scale: 1.015;
    }
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    gap: 6px;
    img {
      width: 90px;
    }
  }
`
export const CardBox = styled(Row)`
  animation: moveUpDown 2.5s infinite alternate ease-in-out;
  padding-bottom: 20px;
  .ant-col {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 260px;
      animation: scale-in 0.5s forwards;
    }
  }
  @media (max-width: 767.98px) {
    animation: none;
  }
`
export const TabsHome = styled(Tabs)<{ $bg: string }>`
  margin-bottom: 50px;
  .ant-tabs-nav {
    .ant-tabs-nav-wrap {
      background: url(${(props) => props.$bg});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 15px;
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          margin: 0 40px;
          .ant-tabs-tab-btn {
            color: #000;
            font-weight: 500;
            img {
              width: 50px;
            }
            &:hover {
              color: #fff;
              img {
                scale: 1.015;
              }
            }
          }
          &.ant-tabs-tab-active {
            .ant-tabs-tab-btn {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .ant-tabs-ink-bar {
    background: #000;
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
