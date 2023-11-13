import { type FC } from 'react'

import { useRouter } from 'next/router'
import { BiSolidDoorOpen, BiSolidUserPlus } from 'react-icons/bi'
import { Col, Row } from 'antd'
import { styled } from 'styled-components'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <VisitorShared>
      <BannerBox $bg={imageList.bgSlide}>
        <img src={imageList.banner} alt="banner" className="mx-auto" />
        <TextSlide className="container mx-auto">
          <p className="text-sm md:text-base">mk88max คาสิโนออนไลน์ สล็อตออนไลน์ ที่ให้คุณสนุกได้ทุกรูปแบบ</p>
        </TextSlide>
      </BannerBox>
      <GoldBox $bg={imageList.bgGold[1]}>
        <div className="container mx-auto login-register">
          <button onClick={() => router.push('/register')} className="register">
            <div className="icon-box">
              <BiSolidUserPlus size={36} />
            </div>
            <h1>สมัครสมาชิก</h1>
          </button>
          <button onClick={() => router.push('/login')} className="login">
            <div className="icon-box">
              <BiSolidDoorOpen size={36} />
            </div>
            <h1>เข้าสู่ระบบ</h1>
          </button>
        </div>
      </GoldBox>
      <CardBox $bg={imageList.bgBlack[1]}>
        <div className="container mx-auto p-8 md:px-24">
          <Row gutter={[20, 20]}>
            <Col xs={12} md={6}>
              <h2 className="hidden">Sport Book</h2>
              <img src={imageList.cardGame[1]} alt="sport-book" />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="hidden">Slot Game</h2>
              <img src={imageList.cardGame[2]} alt="slot-game" />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="hidden">Live Casino</h2>
              <img src={imageList.cardGame[3]} alt="live-casino" />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="hidden">Lotto</h2>
              <img src={imageList.cardGame[4]} alt="lotto" />
            </Col>
          </Row>
        </div>
      </CardBox>
      <GoldBox $bg={imageList.bgGold[2]}>
        <Row gutter={30} className="container mx-auto">
          <Col xs={24} lg={12} className="flex items-center">
            <div className="py-10">
              <h2 className="title text-xl md:text-2xl pb-2 font-semibold">mk88max.com</h2>
              <p className="text-sm md:text-base">
                ที่เปิดประสบการณ์ให้สมาชิกทุกท่าน ได้เดิมพันออนไลน์บนทุกแพลตฟอร์ม ทั้งผ่านคอมพิวเตอร์
                และโทรศัพท์มือถือทุกระบบ มีเกมการเดิมพันให้เลือกเล่นหลากหลาย อาทิเช่น บาคาร่า มวย สล็อต เสือ มังกร
                ให้ทุกท่านเดิมพันได้ ทุกที่ ทุกเวลา ตลอด 24 ชั่วโมง
              </p>
            </div>
          </Col>
          <Col xs={0} lg={12}>
            <div className="flex justify-center">
              <img src={imageList.bgPic} alt="pic" style={{ height: 260 }} />
            </div>
          </Col>
        </Row>
      </GoldBox>
      <CardBox $bg={imageList.bgBlack[2]}>
        <div className="container mx-auto p-8 md:px-24">
          <Row gutter={[20, 20]}>
            <Col xs={12} md={6}>
              <h3 className="hidden">เว็บตรง</h3>
              <img src={imageList.cardPer[1]} alt="per-01" />
            </Col>
            <Col xs={12} md={6}>
              <h3 className="hidden">มาตรฐานสากล</h3>
              <img src={imageList.cardPer[2]} alt="per-02" />
            </Col>
            <Col xs={12} md={6}>
              <h3 className="hidden">คาสิโนครบ</h3>
              <img src={imageList.cardPer[3]} alt="per-03" />
            </Col>
            <Col xs={12} md={6}>
              <h3 className="hidden">ระบบอัตโนมัติ</h3>
              <img src={imageList.cardPer[4]} alt="per-04" />
            </Col>
          </Row>
        </div>
      </CardBox>
    </VisitorShared>
  )
}

export default UserVisitor

const BannerBox = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 20px;
  img {
    width: 100%;
    max-width: 1200px;
    border-radius: 5px;
  }
`
const GoldBox = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .login-register {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 140px;
    height: 250px;
  }
  p {
    color: #000;
  }
  img {
    animation: moveUpDown 2.5s infinite alternate ease-in-out;
  }
  button {
    width: 250px;
    height: 60px;
    border: none;
    background: var(--secondary-color);
    border-radius: 60px;
    position: relative;
    color: #fff;
    border: 1px solid var(--main-color);
    h1 {
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
      background: var(--secondary-color);
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
  @media (max-width: 767.98px) {
    button {
      width: 180px;
      height: 45px;
      h1 {
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
      gap: 12px;
      height: 200px;
    }
  }
`
const CardBox = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
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
  @keyframes text-slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-115%);
    }
  }
`
