import { type FC, useState } from 'react'

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
        <div className="text-center md:px-32 pt-4">
          <p className="text-sm md:text-base">
            Therich333 เว็บตรง ไม่ผ่าน Agency ฟังก์ชั่นใช้ง่าย ฝาก - ถอนไว ด้วยระบบ AUTO
            เล่นได้ทุกห้องโดยไม่ต้องโยกเงินไม่มีขั้นต่ำและไม่มีติดเทรินโอเวอร์
            <br /> <br />
            เราได้รวบรวม กีฬา คาสิโน เกมส์สล็อต ชั้นนำมาไว้ให้คุณ ได้เลือกหลากหลาย เพื่อให้คุณ
            ได้เพลิดเพลินกับการเดิมพันออนไลน์แบบครบวงจรไม่ต้องสมัครหลายเว็บให้เสียเวลา
            <br /> <br />
            Therich333 ใช้ระบบมีความปลอดภัยสูง และมีความมั่นคงทางการเงินระดับแนวหน้า ทำให้คุณเดิมพัน
            ได้อย่างไร้กังวลใช้งานง่าย สะดวกสบาย สามารถเล่นได้ทุกที่ทุกเวลาพร้อมทั้งให้บริการระดับพรีเมี่ยม
            ดูแลทุกการเดิมพันจากทีมงานคุณภาพบริษัท Therich333 COMPANY
          </p>
        </div>
      ),
    },
    {
      key: '2',
      label: <img src={tabActive === '2' ? imageList.tab.active[2] : imageList.tab[2]} alt="tab-02" />,
      children: (
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col xs={12} md={6} key={item}>
              <img src={imageList.sport[item]} alt={'sport-' + item} />
            </Col>
          ))}
        </Row>
      ),
    },
    {
      key: '3',
      label: <img src={tabActive === '3' ? imageList.tab.active[3] : imageList.tab[3]} alt="tab-03" />,
      children: (
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Col xs={12} md={6} key={item}>
              <img src={imageList.casino[item]} alt={'casino-' + item} />
            </Col>
          ))}
        </Row>
      ),
    },
    {
      key: '4',
      label: <img src={tabActive === '4' ? imageList.tab.active[4] : imageList.tab[4]} alt="tab-04" />,
      children: (
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
            <Col xs={12} md={6} key={item}>
              <img src={imageList.game[item]} alt={'game-' + item} />
            </Col>
          ))}
        </Row>
      ),
    },
    {
      key: '5',
      label: <img src={tabActive === '5' ? imageList.tab.active[5] : imageList.tab[5]} alt="tab-05" />,
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
                <img src={'/images/therich333/logo.png'} alt="bank" className="bank" />
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
        <TabsHome
          $bg={imageList.tab.bg}
          defaultActiveKey={tabActive}
          items={itemsHome}
          onChange={(key) => setTabActive(key)}
        />
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
      border-radius: 50px;
      border: 1px solid var(--main-color);
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          margin: 0 40px;
          .ant-tabs-tab-btn {
            color: #fff;
            font-weight: 500;
            img {
              height: 60px;
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
    background: transparent;
  }
  .ant-tabs-content-holder {
    .ant-row {
      display: flex;
      justify-content: center;
      .ant-col {
        img {
          margin: 0 auto;
        }
      }
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
                height: 50px;
              }
            }
          }
        }
      }
    }
  }
`
