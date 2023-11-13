import type { FC } from 'react'
import React from 'react'

import { styled } from 'styled-components'

import { imageList } from '../configs/images'

const Footer: FC = () => {
  return (
    <FooterCard>
      <div className="container mx-auto pt-4">
        <div className="flex justify-center items-center">
          <img src={imageList.BankAll} alt="bank-all" />
        </div>
      </div>
      <div className="text-center py-2">
        <p className="text-xs font-light text-white">2023 © royal447.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer

const FooterCard = styled.div`
  background: var(--main-color);
  box-shadow: 0px -4px 4px 0px #00000040;
`
