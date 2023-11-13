import { type FC } from 'react'

import { Col, Row } from 'antd'
import { styled } from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Logo from '../../../../public/images/royal447/logo.png'
import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <VisitorShared>
      <div className="container mx-auto">
        <BannerBox>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={10}>
              <img src={imageList.Banner} alt="banner" />
            </Col>
            <Col xs={24} md={14}>
              <div className="flex flex-col text-center gap-4">
                <Image src={Logo} alt="logo" className="register" />
                <img src={imageList.TextBanner} alt="text-banner" className="text" />
                <div>
                  <p>ให้บริการความสนุกไม่รู้จบ ฝาก - ถอน</p>
                  <p>รวดเร็วทันใจตลอด 24 ชั่วโมง</p>
                </div>
                <img
                  src={imageList.RegisterBanner}
                  alt="register-banner"
                  onClick={() => router.push('/register')}
                  className="register"
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Per1} alt="per-1" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Per2} alt="per-2" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Per3} alt="per-3" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Per4} alt="per-4" />
            </Col>
          </Row>
        </BannerBox>
      </div>
      <CardServiceBox $bg={imageList.BgWhite1}>
        <div className="container mx-auto">
          <Row gutter={[20, 20]}>
            <Col xs={24} md={10} className="pt-6">
              <div className="flex flex-col items-center gap-4">
                <Image src={Logo} alt="logo" className="logo" />
                <img src={imageList.TextService} alt="text-service" className="text-service" />
              </div>
            </Col>
            <Col xs={24} md={14} className="py-6">
              <img src={imageList.Service} alt="service" className="service" />
            </Col>
          </Row>
        </div>
      </CardServiceBox>
      <CardBox $bg={imageList.BgRed1} className="pt-20 pb-6">
        <div className="container mx-auto">
          <div className="text-card">
            <img src={imageList.TextCard} alt="text-card" />
          </div>

          <Row gutter={[20, 20]}>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Card1} alt="card-1" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Card2} alt="card-2" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Card3} alt="card-3" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Card4} alt="card-4" />
            </Col>
          </Row>
        </div>
      </CardBox>
      <img src={imageList.BgRed2} alt="bg-red-2" className="w-full bg-white" />
      <div className="bg-white flex justify-center py-2">
        <img src={imageList.BankAll} alt="bank-all" />
      </div>
      <div className="bg-white flex justify-center py-2">
        <p className="text-xs font-light text-black">Copyright 2023 © Royal447 | All Rights Reserved</p>
      </div>
    </VisitorShared>
  )
}

export default UserVisitor

const BannerBox = styled.div`
  padding-top: 20px;
  margin-top: -20px;
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
    &.text {
      max-width: 340px;
    }
  }
  h2 {
    color: #ffffff;
    font-size: 24px;
    &:nth-child(2) {
      color: #fcff73;
      font-weight: 600;
    }
  }
  p,
  span {
    font-size: 20px;
  }
  @media (max-width: 989.98px) {
    h2 {
      font-size: 18px;
    }
    p,
    span {
      font-size: 16px;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 16px;
    }
    p,
    span {
      font-size: 14px;
    }
  }
`
const CardServiceBox = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .ant-col {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      border-radius: 5px;
      &.logo {
        max-width: 350px;
      }
      &.text-service {
        max-width: 450px;
      }
      &.service {
        max-width: 550px;
      }
    }
  }
`
const CardBox = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 15px solid #fff;
  border-bottom: 15px solid #fff;
  position: relative;
  .text-card {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      max-width: 560px;
    }
  }
  .ant-col {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 260px;
      border-radius: 5px;
      animation: moveUpDown 2.5s infinite alternate ease-in-out;
    }
  }
  @media (max-width: 767px) {
    animation: none;
    .ant-col img {
      animation: none;
    }
  }
`
