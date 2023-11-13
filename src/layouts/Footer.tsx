import type { FC } from 'react'
import React from 'react'

import Image from 'next/image'

import { FooterCard } from '@/styles/shared/layout.styled'

const Footer: FC = () => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <FooterCard>
      <div className="container mx-auto py-4 md:py-8">
        <Image
          src={'https://imagedelivery.net/xVhPJrN2Mvh3likGpmWIgg/729e3fa1-1d7f-430c-65f4-966fa6658900/public'}
          alt="footer"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
          className="w-full h-auto"
        />
      </div>
      <div className="bg-black text-center py-2">
        <p className="text-xs font-light text-white">2023 @{webName}.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer
