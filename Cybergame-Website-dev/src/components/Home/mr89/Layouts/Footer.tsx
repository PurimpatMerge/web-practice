import type { FC } from 'react'
import React from 'react'

import { styled } from 'styled-components'

import { imageList } from '../configs/images'

const Footer: FC = () => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <FooterCard $bg={imageList.footer}>
      <div className="container mx-auto py-4 md:py-8">
        <img src={imageList.bankList} alt="footer" className="mx-auto" />
      </div>
      <div className="text-center py-2">
        <p className="text-xs font-light">2023 @{webName}.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer

const FooterCard = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
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
