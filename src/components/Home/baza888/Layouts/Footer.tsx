import type { FC } from 'react'
import React from 'react'

import { styled } from 'styled-components'

import { imageList } from '../configs/images'

const Footer: FC = () => {
  return (
    <FooterCard $bg={imageList.BgZoneBankBody}>
      <div className="container mx-auto py-4 md:py-8">
        <div className="flex justify-center items-center">
          <img src={imageList.BankAll} alt="bank-all" />
        </div>
      </div>
      <div className="bg-black text-center py-2">
        <p className="text-xs font-light text-white">2023 © baza888.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer

const FooterCard = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0px -4px 4px 0px #00000040;
`
