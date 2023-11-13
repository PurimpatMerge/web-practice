import { type FC } from 'react'

import { useRouter } from 'next/router'
import { Col, Row } from 'antd'
import { styled } from 'styled-components'

import { imageList } from './configs/images'

import { VisitorShared } from '@/styles/shared/layout.styled'

const UserVisitor: FC = () => {
  const router = useRouter()

  return (
    <VisitorShared>
      <Banner $bg={imageList.bg[1]}>
        <div className="container mx-auto">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <img src={imageList.banner[1]} alt="banner-1" />
            </Col>
            <Col xs={24} md={12} className="flex flex-col items-center gap-8">
              <img src={'/images/mr89/logo.png'} alt="" className="logo" />
              <img src={imageList.text[1]} alt="text-1" />
            </Col>
          </Row>
        </div>
      </Banner>
      <Banner $bg={imageList.bg[2]}>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <img src={imageList.login} alt="login" onClick={() => router.push('/login')} className="login" />
          <img src={imageList.register} alt="register" onClick={() => router.push('/register')} className="register" />
        </div>
      </Banner>
      <Banner $bg={imageList.bg[3]}>
        <div className="container mx-auto md:px-32">
          <Row gutter={[16, 32]}>
            <Col xs={12} md={6}>
              <img src={imageList.card[1]} alt="card-1" />
            </Col>
            <Col xs={12} md={6}>
              <img src={imageList.card[2]} alt="card-2" />
            </Col>
            <Col xs={12} md={6}>
              <img src={imageList.card[3]} alt="card-3" />
            </Col>
            <Col xs={12} md={6}>
              <img src={imageList.card[4]} alt="card-4" />
            </Col>
            <Col xs={24} md={12}>
              <img src={imageList.text[2]} alt="text-2" />
            </Col>
            <Col xs={24} md={12}>
              <img src={imageList.banner[2]} alt="banner-2" />
            </Col>
            <Col xs={24} md={12}>
              <img src={imageList.banner[3]} alt="banner-3" />
            </Col>
            <Col xs={24} md={12}>
              <img src={imageList.text[3]} alt="text-3" />
            </Col>
          </Row>
        </div>
      </Banner>
      <Banner $bg={imageList.bg[4]}>
        <div className="flex flex-col gap-4 container mx-auto md:px-32">
          <img src={imageList.bannerList} alt="banner-list" />
          <img
            src={'https://imagedelivery.net/xVhPJrN2Mvh3likGpmWIgg/729e3fa1-1d7f-430c-65f4-966fa6658900/public'}
            alt="sponsor"
          />
        </div>
      </Banner>
    </VisitorShared>
  )
}

export default UserVisitor

const Banner = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px 0;
  .ant-row {
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
    &.login,
    &.register,
    &.logo {
      width: 280px;
    }
    &.login,
    &.register {
      cursor: pointer;
      &:hover {
        scale: 1.015;
      }
    }
  }
  @media (max-width: 989.98px) {
    img {
      &.login,
      &.register,
      &.logo {
        width: 240px;
      }
    }
  }
  @media (max-width: 767.98px) {
    img {
      &.login,
      &.register,
      &.logo {
        width: 200px;
      }
    }
  }
`
