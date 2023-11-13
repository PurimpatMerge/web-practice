import type { FC } from 'react'
import React from 'react'

import { styled } from 'styled-components'

const Footer: FC = () => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <FooterCard>
      <div className="flex justify-center py-2">
        <p className="text-xs font-light">2023 @{webName}.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer

const FooterCard = styled.div`
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
