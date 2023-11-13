import { Fragment, type FC, useState } from 'react'

import { useRouter } from 'next/router'
import type { TabsProps } from 'antd'
import { Col, Row, Tabs } from 'antd'
import { styled } from 'styled-components'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

const UserVisitor: FC = () => {
  const router = useRouter()
  const [tabActive, setTabActive] = useState<string>('1')

  const itemsHome: TabsProps['items'] = [
    {
      key: '1',
      label: <img src={tabActive === '1' ? imageList.tab.active[1] : imageList.tab[1]} alt="tab-01" />,
      children: (
        <Fragment>
          <img src={imageList.banner[2]} alt="banner-02" width={'100%'} />
          <img src={imageList.banner[3]} alt="banner-02" width={'100%'} />
          <Description $bg={imageList.banner[4]}>
            <div className="container mx-auto text-center py-8">
              <p className="text-sm md:text-base">
                Eleven111 เว็บตรง ไม่ผ่าน Agency ฟังก์ชันใช้งานง่าย ฝาก - ถอนไว ด้วยระบบ AUTO
                เล่นได้ทุกห้องโดยไม่ต้องโยกเงิน ไม่มีขั้นต่ำและไม่มีติดเทรินโอเวอร์
                <br /> <br />
                เราได้รวบรวม กีฬา คาสิโน เกมสล็อตชั้นนำมาไว้ให้คุณได้เลือกหลากหลาย
                เพื่อให้คุณได้เพลิดเพลินกับการเดิมพันออนไลน์แบบครบวงจรไม่ต้องสมัครหลายเว็บให้เสียเวลา
                <br /> <br />
                Eleven111 ใช้ระบบมีความปลอดภัยสูง และมีความมั่นคงทางการเงินระดับแนวหน้า
                ทำให้คุณได้เดิมพันได้อย่างไร้กังวลใช้งานง่ายสะดวกสบายสามารถเล่นได้ทุกที่ทุกเวลาพร้อมทั้งให้
                บริการระดับพรีเมี่ยมดูแลทุกการเดิมพันจากทีมงานคุณภาพ บริษัท Eleven111 Company
              </p>
            </div>
          </Description>
        </Fragment>
      ),
    },
    {
      key: '2',
      label: <img src={tabActive === '2' ? imageList.tab.active[2] : imageList.tab[2]} alt="tab-02" />,
      children: (
        <div className="container mx-auto py-8 lg:px-32">
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12}>
              <img src={imageList.cardRegister[1]} alt="card-register-01" />
            </Col>
            <Col xs={24} md={12}>
              <img src={imageList.cardRegister[2]} alt="card-register-02" />
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: '3',
      label: <img src={tabActive === '3' ? imageList.tab.active[3] : imageList.tab[3]} alt="tab-03" />,
      children: (
        <div className="container mx-auto py-8 lg:px-32">
          <Row gutter={[20, 20]}>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <Col xs={12} md={8} key={item}>
                <img src={imageList.cardPromotion[item]} alt={'card-promotion-' + item} />
              </Col>
            ))}
          </Row>
        </div>
      ),
    },
    {
      key: '4',
      label: <img src={tabActive === '4' ? imageList.tab.active[4] : imageList.tab[4]} alt="tab-04" />,
      children: (
        <img
          src={imageList.cardContact}
          alt="card-contact"
          className="container mx-auto py-8"
          style={{ maxWidth: 500 }}
        />
      ),
    },
  ]

  return (
    <VisitorShared>
      <BannerBox $bg={imageList.banner[1]}>
        <div className="flex justify-end items-center container mx-auto h-full">
          <div>
            <img src={imageList.login} onClick={() => router.push('/login')} alt="login" />
            <img src={imageList.register} onClick={() => router.push('/register')} alt="register" />
          </div>
        </div>
      </BannerBox>
      <TabsHome defaultActiveKey={tabActive} items={itemsHome} onChange={(key) => setTabActive(key)} />
    </VisitorShared>
  )
}

export default UserVisitor

export const BannerBox = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  img {
    width: 300px;
    cursor: pointer;
    &:hover {
      scale: 1.015;
    }
  }
  @media (max-width: 767.98px) {
    height: 300px;
    img {
      width: 180px;
    }
  }
`
export const TabsHome = styled(Tabs)`
  margin: 0;
  .ant-tabs-nav {
    margin: 0;
    .ant-tabs-nav-wrap {
      background: #2a0942;
      border-radius: 0;
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
    padding: 0;
    .ant-col {
      margin: 0 auto;
    }
  }
  @media (max-width: 767.98px) {
    .ant-tabs-nav {
      .ant-tabs-nav-wrap {
        .ant-tabs-nav-list {
          .ant-tabs-tab {
            margin: 0 16px;
            .ant-tabs-tab-btn {
              img {
                width: 34px;
              }
            }
          }
        }
      }
    }
  }
`
export const Description = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    max-width: 900px;
    margin: 0 auto;
  }
  @media (max-width: 767.98px) {
    min-height: auto;
  }
`
