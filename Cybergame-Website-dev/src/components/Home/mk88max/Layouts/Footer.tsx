import type { FC } from 'react'
import React from 'react'

import { styled } from 'styled-components'

const Footer: FC = () => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <FooterCard>
      <div className="container mx-auto py-4 md:py-8">
        <img
          src="https://imagedelivery.net/xVhPJrN2Mvh3likGpmWIgg/729e3fa1-1d7f-430c-65f4-966fa6658900/public"
          alt="footer"
        />
      </div>
      <div className="text-center py-2">
        <p className="text-xs font-light">2023 @{webName}.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer

const FooterCard = styled.div`
  background: var(--secondary-color);
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
