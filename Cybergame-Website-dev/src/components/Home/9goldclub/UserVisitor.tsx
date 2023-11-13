import { type FC } from 'react'

import { styled } from 'styled-components'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

export const generateImageList = (basePath: object, count: number) => {
  return Array.from({ length: count }, (_, i) => `${basePath[i + 1]}`)
}

const gameList = [
  {
    id: 1,
    title: `${imageList.casino.title}`,
    name: 'casino',
    col: 8,
    list: generateImageList(imageList.casino, 6),
  },
  {
    id: 2,
    title: `${imageList.gameRecom.title}`,
    name: 'game-recom',
    col: 6,
    list: generateImageList(imageList.gameRecom, 8),
  },
  {
    id: 3,
    title: `${imageList.gameNew.title}`,
    name: 'game-new',
    col: 4,
    list: generateImageList(imageList.gameNew, 15),
  },
  {
    id: 4,
    title: `${imageList.sport.title}`,
    name: 'sport',
    col: 8,
    list: generateImageList(imageList.sport, 6),
  },
]

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <VisitorShared>
      <Banner $bg={imageList.bg}>
        <img src={'/images/9goldclub/logo.png'} alt="logo" />
        <img src={imageList.banner[1]} alt="banner" />
      </Banner>
      <div className="container mx-auto md:px-32 py-8">
        {gameList.map((list) => (
          <div key={list.id}>
            <TitleEx className="flex justify-center">
              <img src={list.title} alt={list.name} />
            </TitleEx>
            <div className="pt-4 pb-12">
              <Row gutter={[10, 10]} className="flex justify-center">
                {list.list.map((img, index) => (
                  <Col onClick={() => router.push('/login')} xs={12} sm={8} md={list.col} key={index}>
                    <img
                      src={img}
                      alt={`${list.name}-${index + 1}`}
                      className="hover:scale-[101%] transition-all cursor-pointer mx-auto"
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        ))}
        <img src={imageList.banner[2]} alt="banner-02" className="mx-auto" />
        <p className="text-center text-xs md:text-base pt-4">
          ผู้ให้บริการสล็อตออนไลน์ มีเกมส์สล็อตมากที่สุดในประเทศไทย เรามีเกมสล็อตยิงปลาและเกมอาเขต มากกว่า 2000 เกมจาก
          15 ค่ายชั้นนำ PGslot, JOKERslot, slotXO, JDB Jumbo, Nikigame, CQ9, เกมสล็อตโรม่า Romat เกมยิงจรวด เกมยิงปลา
          JackpotFishing, Cai Shen Fishing, สล็อตผลไม้ สล็อตแจ้คฟ้อต jackpot, slot, เกมฟรีสปีน, FREESPIN, เกม Sugar pop,
          เกมเปิดกระโปรง, เกมจากการ์ตูน อะนิเมะดัง one piece, ดราก้อนบอล, เซนต์เซย่า, one punch man, Slamdunk,
          เกมคีบตุ๊กตา เกมสล็อต ใหม่ล่าสุดเว็บสล็อตตรงไม่ผ่านเอเย่นต์ ต้องมาที Autofunclub สล็อตได้เงินจริง
          สล็อตบนมือถือ สล็อตออนไลน์ Slot online, แจกเครดิตฟรีทุกวัน เซียนสล็อตมีสูตรสล็อตต้องลอง บริการเกมสล็อต
          ทะ้งหมดด้วยระบบ ฝาก ถอน ออโต้ ปลอดภัยมั่นคง รวดเร็ว ไม่ต้องส่งสลิป ภายใน 10 วินาที โบนัส โปรโมชั่น
          เยอะมากมายสมัครใหม่รับโบนัส 77% 777 บาท, ค่าคอมไม่จำกัด 0.7% คือนยอดเสีย
        </p>
      </div>
    </VisitorShared>
  )
}

export default UserVisitor

export const Banner = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 32px;
  box-shadow: 0px 4px 4px 0px #00000040;
  img {
    width: 100%;
    &:first-child {
      max-width: 240px;
    }
    &:last-child {
      max-width: 700px;
    }
  }
  @media (max-width: 767.98px) {
    img {
      &:first-child {
        max-width: 160px;
      }
    }
  }
`
export const TitleEx = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    @media (max-width: 989.98px) {
      max-width: 300px;
    }
    @media (max-width: 454.98px) {
      max-width: 240px;
    }
  }
`
