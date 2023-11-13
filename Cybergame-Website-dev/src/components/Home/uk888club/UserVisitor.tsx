import { type FC } from 'react'

import { useRouter } from 'next/router'
import Image from 'next/image'
import { Col, Row } from 'antd'
import { styled } from 'styled-components'

import Logo from '../../../../public/images/uk888club/logo.png'
import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <VisitorShared>
      <BannerBox $bg={imageList.Slide}>
        <div className="container mx-auto py-8">
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12}>
              <img src={imageList.Banner} alt="banner" className="mx-auto w-full" />
            </Col>
            <Col xs={24} md={12}>
              <div className="flex flex-col justify-center items-center text-center h-full">
                <Image src={Logo} height={200} alt="logo" className="mx-auto" />
                <p className="py-3">
                  เว็บพนันออนไลน์ที่ยิ่งใหญ่ที่สุดในยุคนี้ ศูนย์รวมคาสิโนและค่ายสล็อตทุกค่าย ความสนุกไม่รู้จบ
                  ฝาก-ถอนง่าย ออโต้ไม่ซับซ้อน บริการ 24 ชั่วโมง
                </p>
                <img
                  onClick={() => router.push('/register')}
                  src={imageList.BannerRegister}
                  width={300}
                  alt="banner-register"
                  className="mx-auto button"
                />
              </div>
            </Col>
          </Row>
        </div>
      </BannerBox>
      <CardBox $bg={imageList.BgGreen1}>
        <div className="container mx-auto py-8 md:px-24">
          <Row gutter={[20, 20]}>
            <Col xs={24} md={8}>
              <img src={imageList.CasinoCenter} alt="casino-center" />
            </Col>
            <Col xs={24} md={8}>
              <img src={imageList.Safe} alt="safe" />
            </Col>
            <Col xs={24} md={8}>
              <img src={imageList.AutoSystem} alt="auto-system" />
            </Col>
          </Row>
        </div>
      </CardBox>
      <CardBox $bg="">
        <div className="container mx-auto py-8">
          <div className="text-center mb-6">
            <h2 className="my-3">เว็บตรง บริการมาตรฐาน ครบครันทุกความต้องการ</h2>
            <p>
              ด้วยสุดยอดความบันเทิง ที่จัดหนัก จัดเต็ม มาให้ทุกรูปแบบ ไม่ว่าจะเป็น คาสิโนสด จากผู้ให้บริการคุณภาพเยี่ยม
              อย่าง Sa Gaming ที่มีเกม บาคาร่าออนไลน์ รูเล็ตออนไลน์ เสือ-มังกร ออนไลน์ และอีกมากมายหลายค่ายหลายเกม
              ให้เลือกเล่นกันแบบสด ๆ คมชัดทุกอณู ทั้งคาสิโน เกม อย่าง เกมสล็อตออนไลน์ เกมยิงปลาออนไลน์
              และไม่ว่าจะเป็นกีฬาออนไลน์ อย่างแทงบอลออนไลน์ มวยออนไลน์ หรือหวยออนไลน์ ก็มีมาให้ได้เลือกสรรกัน
              ท่านจะได้เข้ามาสัมผัสประสบการณ์การทำเงินใหม่ ๆ ให้เลือกใช้ เลือกทำเงิน
              กันได้อย่างไร้ขีดจำกัดเต็มเปี่ยมไปด้วย คุณภาพในการทำเงินที่ครบ จบบนเว็บไซต์ uk888club แห่งนี้เท่านั้น
            </p>
          </div>
          <Row gutter={[20, 20]}>
            <Col xs={24} md={8}>
              <img src={imageList.Per1} alt="per-1" className="move-up-down" />
            </Col>
            <Col xs={24} md={8}>
              <img src={imageList.Per2} alt="per-2" className="move-up-down" />
            </Col>
            <Col xs={24} md={8}>
              <img src={imageList.Per3} alt="per-3" className="move-up-down" />
            </Col>
          </Row>
          <h2 className="text-center my-3">เว็บตรง บริการมาตรฐาน ครบครันทุกความต้องการ</h2>
          <Row gutter={[20, 20]} className="mb-3">
            <Col xs={24} md={12} lg={4}>
              <img src={imageList.Game1} alt="game-1" />
            </Col>
            <Col xs={24} md={12} lg={4}>
              <img src={imageList.Game2} alt="game-2" />
            </Col>
            <Col xs={24} md={12} lg={4}>
              <img src={imageList.Game3} alt="game-3" />
            </Col>
            <Col xs={24} md={12} lg={4}>
              <img src={imageList.Game4} alt="game-4" />
            </Col>
            <Col xs={24} md={12} lg={4}>
              <img src={imageList.Game5} alt="game-5" />
            </Col>
            <Col xs={24} md={12} lg={4}>
              <img src={imageList.Game6} alt="game-6" />
            </Col>
          </Row>
        </div>
      </CardBox>
      <CardBox $bg={imageList.BgGreen2}>
        <div className="container mx-auto py-8">
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Sponsor1} alt="sponsor-1" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Sponsor2} alt="sponsor-2" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Sponsor3} alt="sponsor-3" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Sponsor4} alt="sponsor-4" />
            </Col>
          </Row>
        </div>
      </CardBox>
      <CardBox $bg="" className="bg-black">
        <div className="container mx-auto pt-8 pb-3">
          <div className="flex justify-center items-center mb-6">
            <img height={50} src={imageList.BankAll} alt="bank-all" />
          </div>
          <div className="flex justify-center items-center mb-6">
            <img height={50} src={imageList.TrueMoneyWallet} alt="true-money-wallet" />
          </div>
          <p className="text-xs font-light text-white text-center">
            Copyright 2023 © uk888club.com | All Rights Reserved
          </p>
        </div>
      </CardBox>
    </VisitorShared>
  )
}

export default UserVisitor

const BannerBox = styled.div<{ $bg: string }>`
  padding-top: 20px;
  margin-top: -20px;
  background-image: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    max-width: 1200px;
    border-radius: 5px;
    &.button {
      cursor: pointer;
      &:hover {
        scale: 1.015;
      }
    }
    &.w-full {
      width: 100%;
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
      &.move-up-down {
        animation: moveUpDown 2.5s infinite alternate ease-in-out;
      }
    }
  }
  h2 {
    font-size: 30px;
    color: #ffcc00;
  }
  @media (max-width: 767px) {
    animation: none;
    .ant-col img.move-up-down {
      animation: none;
    }
  }
`
