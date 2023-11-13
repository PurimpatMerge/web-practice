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
      <BannerBox className="">
        <img src={imageList.Banner} alt="banner" className="mx-auto" />
      </BannerBox>
      <LoginRegisterBox>
        <div className="container mx-auto flex flex-col justify-center items-center gap-4 md:flex-row md:gap-12 py-10 md:py-18">
          <button onClick={() => router.push('/register')} className="register">
            <h2>สมัครสมาชิก</h2>
          </button>
          <button onClick={() => router.push('/login')} className="login">
            <h2>เข้าสู่ระบบ</h2>
          </button>
        </div>
      </LoginRegisterBox>
      <TextSlide>
        <p className="text-sm md:text-base">autowin คาสิโนออนไลน์ สล็อตออนไลน์ ที่ให้คุณสนุกได้ทุกรูปแบบ</p>
      </TextSlide>
      <CardBox $bg={imageList.BgBlue2}>
        <div className="container mx-auto p-8 md:px-24">
          <TitleTypeGame>
            <h2>กีฬาออนไลน์</h2>
            <hr />
          </TitleTypeGame>
          <Row gutter={[20, 20]} className="mb-8">
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Sport1} alt="sport-1" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Sport2} alt="sport-2" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Sport3} alt="sport-3" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Sport4} alt="sport-4" />
            </Col>
          </Row>
          <TitleTypeGame>
            <h2>คาสิโนออนไลน์</h2>
            <hr />
          </TitleTypeGame>
          <Row gutter={[20, 20]} className="mb-8">
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Casino1} alt="casino-1" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Casino2} alt="casino-2" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Casino3} alt="casino-3" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Casino4} alt="casino-4" />
            </Col>
          </Row>
          <TitleTypeGame>
            <h2>สล็อตและเกมส์</h2>
            <hr />
          </TitleTypeGame>
          <Row gutter={[20, 20]} className="mb-8">
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Game1} alt="game-1" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Game2} alt="game-2" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Game3} alt="game-3" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.Game4} alt="game-4" />
            </Col>
          </Row>
        </div>
      </CardBox>
      <CardBox $bg={imageList.BgBlue3}>
        <div className="container mx-auto p-8 md:px-24">
          <TitleGame>
            <h2>เกมส์มาใหม่</h2>
          </TitleGame>
          <Row gutter={[20, 20]} className="mb-8">
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame1} alt="hotgame-1" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame2} alt="hotgame-2" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame3} alt="hotgame-3" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame4} alt="hotgame-4" />
            </Col>
          </Row>
          <Row gutter={[20, 20]} className="mb-8">
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame5} alt="hotgame-5" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame6} alt="hotgame-6" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame7} alt="hotgame-7" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame8} alt="hotgame-8" />
            </Col>
          </Row>
          <Row gutter={[20, 20]} className="mb-8">
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame9} alt="hotgame-9" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame10} alt="hotgame-10" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame11} alt="hotgame-11" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.HotGame12} alt="hotgame-12" />
            </Col>
          </Row>
          <Row gutter={[20, 20]} className="mb-8">
            <Col xs={24} md={12} lg={8}>
              <img src={imageList.HotGame13} alt="hotgame-13" />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <img src={imageList.HotGame14} alt="hotgame-14" />
            </Col>
            <Col xs={24} lg={8}>
              <img src={imageList.HotGame15} alt="hotgame-15" />
            </Col>
          </Row>
        </div>
      </CardBox>
      <CardBox $bg={imageList.BgBlue4}>
        <div className="container mx-auto p-8 md:px-24">
          <Row gutter={[20, 20]} className="mb-8">
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.System1} alt="system-1" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.System2} alt="system-2" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.System3} alt="system-3" />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <img src={imageList.System4} alt="system-4" />
            </Col>
          </Row>
          <div className="flex justify-center items-center">
            <img src={imageList.BankAll} alt="bank-all" />
          </div>
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
`
const LoginRegisterBox = styled.div<{ $bg?: string }>`
  background-image: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    border-radius: 60px;
    position: relative;
    color: #fff;
    border: 1px solid var(--main-color);
    &:hover {
      scale: 1.015;
    }
    h2 {
      font-size: 28px;
      font-weight: 600;
      background: #fff;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
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
  }
`

const TextSlide = styled.div`
  background-color: #000;
  border-top: 1px var(--main-color) solid;
  border-bottom: 1px var(--main-color) solid;
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
    }
  }
`
const TitleTypeGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  h2 {
    background: var(--btn-linear);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 24px;
    font-weight: 500;
    margin-right: 10px;
  }
  hr {
    border-color: var(--main-color);
    -webkit-margin-before: 0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: auto;
    -webkit-margin-end: auto;
    border-style: inset;
    border-width: 1px;
    flex-grow: 1;
  }
`
const TitleGame = styled.div`
  text-align: center;
  margin-bottom: 36px;
  h2 {
    background: var(--btn-linear);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 32px;
    font-weight: 500;
    display: inline-block;
    border-bottom: 1px var(--main-color) solid;
    border-bottom-width: 2px;
  }
`
