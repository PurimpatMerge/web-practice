import type { FC } from 'react'
import React from 'react'

import { styled } from 'styled-components'

import { imageList } from '../configs/images'

const Footer: FC = () => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <FooterCard>
      <div className="container mx-auto py-4 md:py-8">
        <img
          src="https://imagedelivery.net/xVhPJrN2Mvh3likGpmWIgg/729e3fa1-1d7f-430c-65f4-966fa6658900/public"
          alt="footer"
        />
        <img src={imageList.bankList} alt="bank" className="mx-auto pt-4 md:pt-8" />
      </div>
      <div className="text-center py-2">
        <p className="text-xs font-light">2023 @{webName}.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer

const FooterCard = styled.div`
  background: url('https://imagedelivery.net/xVhPJrN2Mvh3likGpmWIgg/35a4118f-e2c8-4317-9ecb-654892db1b00/public');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px -4px 4px 0px #00000040;
  > div {
    &:last-child {
      background: #000;
      p {
        color: #fff;
      }
    }
  }
`
