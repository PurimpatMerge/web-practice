import React, { type FC, Fragment } from 'react'

import { useRouter } from 'next/router'
import { Col, Row } from 'antd'

import Banner from '@/components/Home/ezrich/components/Banner'
import { imageList } from '@/components/Home/ezrich/configs/images'
import { BannerWrap, TitleEx } from '@/components/Home/ezrich/styled'

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <Fragment>
      <div className="container mx-auto">
        <Banner />
        {gameList.map((list) => (
          <div key={list.id}>
            <div className="flex justify-center md:justify-start">
              <TitleEx>
                <img src={list.icon} alt={list.title} className="w-8 h-8" />
                {list.title}
              </TitleEx>
            </div>
            <div className="py-12">
              <Row gutter={[10, 10]} className="items-center">
                {list.list.map((img, index) => (
                  <Col
                    onClick={() => router.push('/login')}
                    xs={12}
                    sm={8}
                    md={list.col}
                    key={index}
                    className="hover:scale-[101%] transition-all">
                    <img src={img} alt={`${list.title} ${index + 1}`} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        ))}
      </div>
      <BannerWrap $bg={imageList.banner_bg}>
        <div className="flex justify-center">
          <img src="/images/ezrich/logo.png" alt="logo" />
        </div>
        <p className="text-center text-base sm:text-xl p-2">
          ฝาก-ถอน ออโต้ โปรแรงสุดในไทย อัพเกรดใหม่ ezrich.vip ระบบไวกว่าเดิม
        </p>
        <div className="py-2 container mx-auto">
          <Row gutter={[10, 10]} justify="center" className="items-center">
            <Col xs={24} lg={12} xl={8}>
              <div className="flex justify-end">
                <img src={imageList.home.banner1.b1} className="banner" alt="" />
              </div>
            </Col>
            <Col xs={24} lg={12} xl={9}>
              <h3 className="title">ยินดีต้อนรับเข้าสู่ ezrich.vip</h3>
              <div className="flex justify-center">
                <div className="w-full md:w-[85%]">
                  <p className="text">
                    ศูนย์รวมคาสิโนและค่ายสล็อตทุกค่าย สมัครเข้ามาเป็นนักบิด ในสนามของเรา เพื่อรับสิทธิพิเศษทุกสัปดาห์
                    ครอบคลุมธุรกรรมการเงินด้วยเทคโนโลยี ล้ำสมัย ฝาก-ถอน ไวตลอด 24 ชั่วโมง MASTER PRO เว็บชั้นนำ เร็ว แรง
                    ทะลุไมล์
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </BannerWrap>
      <BannerWrap $bg={imageList.banner_bg1}>
        <div className="py-2 container mx-auto">
          <Row gutter={[10, 10]} justify="center" className="items-center">
            <Col xs={24} lg={12} xl={9}>
              <h3 className="title">เกี่ยวกับเรา ezrich.vip</h3>
              <div className="flex justify-center">
                <div className="w-full md:w-[90%]">
                  <p className="text">
                    เมื่อยุคสมัยเปลี่ยนไป โลกของการสร้างรายได้ บนโลกออนไลน์ ที่เป็นแค่โลก เสมือนจริง
                    ได้เปลี่ยนความไม่แน่นอน ให้เกิดความแน่นอน ทั้งยังสร้างรายได้ที่ กล้วยเข้าปาก ได้จริง ๆ
                    ด้วยสิ่งสำคัญเพียงข้อเดียวคือ…การเลือก คาสิโน ออนไลน์ ที่เชื่อถือได้ และให้บริการแก่สมาชิกทุก ๆ
                    ท่านได้ อย่างไม่มีแบ่งแยก ไม่ ของความเป็นจริง และถ้าหากคุณเป็นหนึ่งคน ที่กำลังมองหาการสร้างรายได้ ใน
                    รูปแบบนี้ การเข้ามาที่ คาสิโนออนไลน์ MASTER PRO แห่งนี้ แปลว่าคุณมาถูกที่ เลือกใหม่ ได้เต็มรูปแบบ
                    ครบวงจร และสร้างความหลากหลาย ได้เงินจริง!! ได้ เท่ากับ ที่ คาสิโนออนไลน์ MASTER PRO
                    อีกแล้วอย่างแน่นอน
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12} xl={8}>
              <div className="flex justify-end">
                <img src={imageList.home.banner1.b2} className="banner" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </BannerWrap>
    </Fragment>
  )
}

export default UserVisitor

const gameList = [
  {
    id: 1,
    icon: imageList.menu_icon.slot,
    title: 'สล็อตออนไลน์',
    col: 4,
    list: Object.values(imageList.home.game.game_slot),
  },
  {
    id: 2,
    icon: imageList.menu_icon.sport,
    title: 'กีฬาออนไลน์',
    col: 4,
    list: Object.values(imageList.home.game.game_sport),
  },
  {
    id: 3,
    icon: imageList.menu_icon.casino,
    title: 'คาสิโนออนไลน์',
    col: 4,
    list: Object.values(imageList.home.game.game_casino),
  },
  {
    id: 4,
    icon: imageList.menu_icon.slot,
    title: 'เกมส์แนะนำ',
    col: 3,
    list: Object.values(imageList.home.game.hot_games),
  },
]
