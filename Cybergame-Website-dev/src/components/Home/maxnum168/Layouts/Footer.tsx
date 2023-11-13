import type { FC } from 'react'
import React from 'react'

import { styled } from 'styled-components'

const Footer: FC = () => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <FooterCard>
      <div className="container mx-auto py-4 md:py-8">
        <img src="/images/maxnum168/logo.png" alt="footer" className="mx-auto" />
        <p className="text-center text-sm md:text-xl pt-4">ฝาก-ถอน ออโต้ โปรแรงสุดในไทย อัพเกรดใหม่ระบบไวกว่าเดิม</p>
      </div>
      <div className="text-center py-2">
        <p className="text-xs font-light">2023 @{webName}.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer

const FooterCard = styled.div`
  background: var(--main-color);
  box-shadow: 0px -4px 4px 0px #00000040;
  > div {
    &:first-child {
      img {
        width: 100%;
        max-width: 500px;
      }
      p {
        color: #fff;
      }
    }
    &:last-child {
      background: #000;
      p {
        color: #fff;
      }
    }
  }
`
