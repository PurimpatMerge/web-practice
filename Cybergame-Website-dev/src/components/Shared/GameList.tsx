import { type FC } from 'react'

import { Col, Row, Spin, message } from 'antd'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import type { IGameList } from '@/types/modules/Auth'
import { GameBox } from '@/styles/shared/shared.styled'

interface IProps {
  gameList: IGameList
  loading: boolean
  checkGameSubList: (vendorCode: string) => void
  setGameName: (name: string) => void
  setVendor: (vendorCode: string) => void
  setCategoryName: (categoryName: string) => void
}

const GameList: FC<IProps> = ({ gameList, loading, checkGameSubList, setGameName, setVendor, setCategoryName }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const themeImage = process.env.NEXT_PUBLIC_WEB_THEME_IMAGE

  return (
    <GameBox className="xl:px-32">
      {gameList?.result && !loading ? (
        <Row gutter={[14, 12]}>
          {gameList?.result.map((item, index) => (
            <Col key={index} xs={12} md={8}>
              <img
                src={`https://storage.googleapis.com/cbgame/themes/${themeImage}/` + item.imageName + '.png'}
                alt={item.name}
                onClick={() => {
                  session?.user?.ref && session?.token?.gameToken
                    ? (setGameName(item.name),
                      setVendor(item.vendorCode),
                      setCategoryName(item.category),
                      checkGameSubList(item.vendorCode))
                    : router.push('/deposit') && message.info('กรุณาฝากเงินก่อน')
                }}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Spin className="pt-4" />
      )}
    </GameBox>
  )
}

export default GameList
