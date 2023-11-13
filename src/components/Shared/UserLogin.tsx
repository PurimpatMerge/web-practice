import { type FC, Fragment, useState } from 'react'

import type { TabsProps } from 'antd'
import { Button, Col, message, Row, Tabs } from 'antd'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  BiChevronLeft,
  BiSolidDice3,
  BiSolidDonateBlood,
  BiSolidHeartSquare,
  BiSolidHot,
  BiSolidTennisBall,
  BiSolidWallet,
} from 'react-icons/bi'
import { Autoplay } from 'swiper/modules'
import { useSession } from 'next-auth/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { browserName, isDesktop } from 'react-device-detect'

import GameList from './GameList'

import { ButtonTransaction, GameBox } from '@/styles/shared/shared.styled'
import { WebService } from '@/services'
import type { IGamePlay, IGameSubList } from '@/types/modules/Auth'

const UserLogin: FC = () => {
  const router = useRouter()
  const { locale } = useRouter()
  const { data: session, update } = useSession()
  const [gameType, setGameType] = useState<string>('POPULAR')
  const [categoryName, setCategoryName] = useState<string>()
  const [gameName, setGameName] = useState<string>()
  const [vendor, setVendor] = useState<string>()
  const [gameCode, setGameCode] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [gameSubList, setGameSubList] = useState<IGameSubList>()
  const swiperTheme = process.env.NEXT_PUBLIC_WEB_THEME_SWIPER

  // _Query
  const { data: gameList } = useQuery(['games-list', gameType], () => WebService.gameList(gameType), {
    enabled: session?.user ? true : false,
  })

  const checkGameSubList = async (vendor: string) => {
    const res = await WebService.gameSubList(vendor)
    if (res?.data) {
      setGameSubList(res)
    } else {
      setGameSubList(null)
      mutate()
    }
  }

  // Mutation
  const { mutate } = useMutation(
    () => {
      setLoading(true)
      const gamePlayData: IGamePlay = {
        device: isDesktop ? 'DESKTOP' : 'MOBILE',
        browser: browserName,
        categoryName: categoryName,
        lang: locale === 'th' ? 'th-th' : 'en-us',
        vendor: vendor,
        gameToken: session?.token?.gameToken,
        gameCode: gameCode,
      }
      return WebService.gamePlay(gamePlayData)
    },
    {
      onSuccess: async (res) => {
        setLoading(false)
        if (res.gameToken) {
          await update({
            ...session,
            token: {
              ...session?.token,
              gameToken: res.gameToken,
            },
          })
        }
        window.open(res.gameUrl)
      },
      onError: () => {
        setLoading(false)
        message.error('ไม่พร้อมใช้งาน')
      },
    },
  )

  const itemsGameList: TabsProps['items'] = [
    {
      key: 'POPULAR',
      label: (
        <Fragment>
          <BiSolidHot />
          <h2>ยอดนิยม</h2>
        </Fragment>
      ),
      children: (
        <GameList
          gameList={gameList}
          loading={loading}
          setGameName={setGameName}
          setVendor={setVendor}
          setCategoryName={setCategoryName}
          checkGameSubList={checkGameSubList}
        />
      ),
    },
    {
      key: 'SPORT',
      label: (
        <Fragment>
          <BiSolidTennisBall />
          <h2>กีฬา</h2>
        </Fragment>
      ),
      children: (
        <GameList
          gameList={gameList}
          loading={loading}
          setGameName={setGameName}
          setVendor={setVendor}
          setCategoryName={setCategoryName}
          checkGameSubList={checkGameSubList}
        />
      ),
    },
    {
      key: 'CASINO',
      label: (
        <Fragment>
          <BiSolidHeartSquare />
          <h2>คาสิโน</h2>
        </Fragment>
      ),
      children: (
        <GameList
          gameList={gameList}
          loading={loading}
          setGameName={setGameName}
          setVendor={setVendor}
          setCategoryName={setCategoryName}
          checkGameSubList={checkGameSubList}
        />
      ),
    },
    {
      key: 'SLOT',
      label: (
        <Fragment>
          <BiSolidDice3 />
          <h2>สล็อต</h2>
        </Fragment>
      ),
      children: (
        <GameList
          gameList={gameList}
          loading={loading}
          setGameName={setGameName}
          setVendor={setVendor}
          setCategoryName={setCategoryName}
          checkGameSubList={checkGameSubList}
        />
      ),
    },
  ]

  return (
    <Fragment>
      {!gameSubList ? (
        <Fragment>
          <div className="container mx-auto xl:px-32">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={10}
              breakpoints={{
                989: {
                  slidesPerView: 2.5,
                },
                767: {
                  slidesPerView: 2,
                },
              }}
              modules={[Autoplay]}>
              <SwiperSlide>
                <img src={`/images/swiper/${swiperTheme ? swiperTheme : 'set01'}/swiper-01.jpeg`} alt="swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`/images/swiper/${swiperTheme ? swiperTheme : 'set01'}/swiper-02.jpeg`} alt="swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`/images/swiper/${swiperTheme ? swiperTheme : 'set01'}/swiper-03.jpeg`} alt="swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`/images/swiper/${swiperTheme ? swiperTheme : 'set01'}/swiper-04.jpeg`} alt="swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`/images/swiper/${swiperTheme ? swiperTheme : 'set01'}/swiper-05.jpeg`} alt="swiper" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex gap-4 md:gap-8 justify-center mt-8">
            <ButtonTransaction icon={<BiSolidWallet />} onClick={() => router.push('/deposit')}>
              <h1>แจ้งฝาก</h1>
            </ButtonTransaction>
            <ButtonTransaction icon={<BiSolidDonateBlood />} onClick={() => router.push('/withdrawal')}>
              <h1>แจ้งถอน</h1>
            </ButtonTransaction>
          </div>
          <Tabs
            defaultActiveKey={gameType}
            items={itemsGameList}
            onTabClick={(key: string) => setGameType(key)}
            className="container mx-auto"
          />
        </Fragment>
      ) : (
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl text-center mb-4">เกมส์ {gameName}</h1>
          <Button icon={<BiChevronLeft />} onClick={() => setGameSubList(null)} className="back-btn mb-4">
            กลับ
          </Button>
          <GameBox $noAnimation={true}>
            <Row gutter={[14, 12]}>
              {gameSubList?.data?.map((item, index) => (
                <Col key={index} xs={12} sm={8} lg={6}>
                  <img
                    src={item.imageUrl}
                    alt={item.gameName}
                    onClick={() => {
                      !loading ? (setGameCode(item.gameCode), mutate()) : null
                    }}
                  />
                </Col>
              ))}
            </Row>
          </GameBox>
        </div>
      )}
    </Fragment>
  )
}

export default UserLogin
