import React from 'react'

import { imageList } from '@/components/Home/ezrich/configs/images'
import GameListLayout from '@/components/Home/ezrich/components/GameList/Layout'

const SlotList = () => {
  const images = Object.values(imageList.game.game_slot)
  return <GameListLayout title="สล็อต" sourceData={images} />
}

export default SlotList
