import { type FC } from 'react'

import { useRouter } from 'next/router'
import { Col, Row } from 'antd'
import { styled } from 'styled-components'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <VisitorShared>
      <div className="container mx-auto">
        <BannerBox>
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12}>
              <Swiper
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={10}
                breakpoints={{
                  989: {
                    slidesPerView: 1,
                  },
                }}
                modules={[Autoplay]}>
                <SwiperSlide>
                  <img src={imageList.Banner1} alt="banner-1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imageList.Banner2} alt="banner-2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imageList.Banner3} alt="banner-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imageList.Banner4} alt="banner-4" />
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col xs={24} md={12}>
              <div className="flex flex-col justify-center h-full">
                <h2>ยินดีต้อนรับ BAZA888 เว็บไซต์การพนันออนไลน์มาตรฐานระดับโลก</h2>
                <br />
                <br />
                <p>
                  มีสมาชิกใช้บริการมากว่า 7 ล้านท่าน แหล่งรวมบริการ คาสิโนสด สล็อตออนไลน์ แทงบอล ที่กำลังมาแรงในปี 2023
                  มีเกมให้เลือกเล่นมากกว่า 20,000 เกม มา พร้อมกับระบบ ฝาก-ถอน อัตโนมัติรูปแบบใหม่ fast auto สะดวก
                  รวดเร็ว ทันใจ เพียง 10 วิ มีเจ้าหน้าที่คอย ให้บริการตลอด 24 ชั่วโมง
                </p>
              </div>
            </Col>
          </Row>
        </BannerBox>
      </div>
      <TextSlide>
        <p className="text-sm md:text-base">baza888 คาสิโนออนไลน์ สล็อตออนไลน์ ที่ให้คุณสนุกได้ทุกรูปแบบ</p>
      </TextSlide>
      <RedBox $bg={imageList.BgRed1}>
        <div className="container mx-auto login-register">
          <img
            src={imageList.Register}
            alt="register"
            onClick={() => router.push('/register')}
            className="cursor-pointer"
          />
          <img src={imageList.Login} alt="login" onClick={() => router.push('/login')} className="cursor-pointer" />
        </div>
      </RedBox>
      <CardBox $bg={imageList.BgRed2}>
        <div className="container mx-auto p-8 md:px-24">
          <Row gutter={[20, 20]}>
            <Col xs={12} md={6}>
              <img src={imageList.Per1} alt="per-1" className="move-up-down" />
            </Col>
            <Col xs={12} md={6}>
              <img src={imageList.Per2} alt="per-2" className="move-up-down" />
            </Col>
            <Col xs={12} md={6}>
              <img src={imageList.Per3} alt="per-3" className="move-up-down" />
            </Col>
            <Col xs={12} md={6}>
              <img src={imageList.Per4} alt="per-4" className="move-up-down" />
            </Col>
          </Row>
          <PerBox>
            <Row gutter={[20, 20]}>
              <Col xs={24} md={14}>
                <div className="flex flex-col justify-center h-full">
                  <h2 className="title">เว็บพนันออนไลน์ที่ยิ่งใหญ่ที่สุดในยุคนี้ ร้อนแรงสุดในไทย</h2>
                  <br />
                  <h2>ฝาก ถอน ระบบออโต</h2>
                  <br />
                  <br />
                  <p>
                    ด้วยระบบที่ทันสมัย ที่พัฒนาขึ้นเพื่อความสะดวกในการ ทำธุรกรรมของลูกค้า ฝาก-ถอน ไม่มีขั้นต่ำ
                    ไม่เสียค่าธรรมเนียมรวดเร็ว ปลอดภัย และมีประสิทธิภาพ ไม่ต้องเสีย เวลารอนาน สามารถ
                    เล่นคาสิโนออนไลน์ได้อย่างไม่สะดุด พร้อมลุ้นรับเครดิตฟรีทุกสัปดาห์
                  </p>
                </div>
              </Col>
              <Col xs={24} md={10}>
                <img src={imageList.DepositWithdraw} alt="deposit-withdraw" className="max-w-full" />
              </Col>
            </Row>
          </PerBox>
          <PerBox>
            <Row gutter={[20, 20]}>
              <Col xs={{ span: 24, order: 2 }} md={{ span: 10, order: 1 }}>
                <img src={imageList.WanderAround} alt="wander-around" className="max-w-full" />
              </Col>
              <Col xs={{ span: 24, order: 1 }} md={{ span: 14, order: 2 }}>
                <div className="flex flex-col justify-center h-full">
                  <h2>เปิดบริการเดินพัน ตลอด 24 ชม.</h2>
                  <br />
                  <br />
                  <p>
                    ด้วยระบบที่ทันสมัย ที่พัฒนาขึ้นเพื่อความสะดวกในการ ทำธุรกรรมของลูกค้า ฝาก-ถอน ไม่มีขั้นต่ำ
                    ไม่เสียค่าธรรมเนียมรวดเร็ว ปลอดภัย และมีประสิทธิภาพ ไม่ต้องเสีย เวลารอนาน สามารถ
                    เล่นคาสิโนออนไลน์ได้อย่างไม่สะดุด พร้อมลุ้นรับเครดิตฟรีทุกสัปดาห์
                  </p>
                </div>
              </Col>
            </Row>
          </PerBox>
        </div>
      </CardBox>

      <CardBox $bg={imageList.BgRed3}>
        <div className="container mx-auto p-8 md:px-24">
          <Row gutter={[20, 20]}>
            <Col xs={24} md={24}>
              <img src={imageList.Service} alt="service" className="max-w-full" />
            </Col>
          </Row>
        </div>
      </CardBox>
    </VisitorShared>
  )
}

export default UserVisitor

const BannerBox = styled.div`
  padding-top: 20px;
  margin-top: -20px;
  img {
    width: 100%;
    max-width: 1200px;
    border-radius: 5px;
  }
  h2 {
    color: #ffcc00;
    font-size: 32px;
  }
`
const TextSlide = styled.div`
  p {
    color: #fff;
    animation: text-slide 16s linear infinite forwards;
    position: absolute;
    font-weight: 500;
    white-space: nowrap;
    width: 100%;
  }
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  overflow: hidden;
  width: 100%;
  background-color: #280000;
  border-top: 1px #ffcc00 solid;
  border-bottom: 1px #ffcc00 solid;
  @keyframes text-slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-115%);
    }
  }
`
const RedBox = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .login-register {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 250px;
  }
  p {
    color: #000;
  }
  button {
    width: 250px;
    height: 60px;
    border: none;
    background-color: var(--secondary-color);
    border-radius: 60px;
    position: relative;
    color: #fff;
    border: 1px solid var(--main-color);
    h2 {
      font-size: 28px;
      font-weight: 600;
      background: var(--btn-linear);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
    &.register {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &.login {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 80px;
      top: 50%;
      background-color: var(--secondary-color);
      transform: translateY(-50%);
      box-shadow: 0px 4px 4px 0px #00000040;
    }
    &:first-child {
      .icon-box {
        right: -45px;
      }
    }
    &:last-child {
      .icon-box {
        left: -45px;
      }
    }
  }
  .title {
    color: var(--secondary-color);
  }
  @media (max-width: 767px) {
    button {
      width: 180px;
      height: 45px;
      h2 {
        font-size: 18px;
      }
      &.register,
      &.login {
        border-radius: 45px;
      }
      .icon-box {
        display: none;
      }
    }
    .login-register {
      flex-direction: column;
      gap: 8px;
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
      &.max-w-full {
        max-width: 100%;
      }
      &.move-up-down {
        animation: moveUpDown 2.5s infinite alternate ease-in-out;
      }
    }
  }
  @media (max-width: 767px) {
    animation: none;
    .ant-col img.move-up-down {
      animation: none;
    }
  }
`
const PerBox = styled.div`
  margin: 40px 0;
  img {
    width: 100%;
    max-width: 1200px;
    border-radius: 5px;
  }
  h2 {
    font-size: 30px;

    color: #ffcc00;
    &.title {
      color: #ffffff;
    }
  }
`
