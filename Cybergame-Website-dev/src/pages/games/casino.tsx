import React from 'react'

import GameListLayout from '@/components/Home/ezrich/components/GameList/Layout'
import { imageList } from '@/components/Home/ezrich/configs/images'

const CasinoList = () => {
  const images = Object.values(imageList.game.game_casino)
  return <GameListLayout title="คาสิโน" sourceData={images} />
}

export default CasinoList
