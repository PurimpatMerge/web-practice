import type { FC } from 'react'
import React from 'react'

import { useSession } from 'next-auth/react'

import { HeaderWrapper, SubCard, TextSlide } from '@/components/Home/ezrich/styled'
import { FooterCard } from '@/styles/shared/layout.styled'
import { imageList } from '@/components/Home/ezrich/configs/images'

const Footer: FC = () => {
  const { data: session } = useSession()
  return (
    <footer>
      {!session ? (
        <>
          <SubCard>
            <div className="flex justify-center py-2">
              <img src={imageList.home.sponsor} alt="sponsor" />
            </div>
          </SubCard>
          <TextSlide $bg="#edc967" $color="black">
            <p className="text-sm md:text-base">สมัครสมาชิก EZRICH พร้อมรับโบรัสอีกมากมาย</p>
          </TextSlide>
          <HeaderWrapper>
            <div className="py-6">
              <h2 className="text-center text-2xl text-white font-semibold">ช่องทางการฝากเงิน</h2>
              <div className="flex justify-center">
                <img src={imageList.footer.bank} alt="bank list" />
              </div>
            </div>
          </HeaderWrapper>
        </>
      ) : (
        <>
          <FooterCard>
            <div className="container mx-auto py-4 md:py-8">
              <img
                src="https://imagedelivery.net/xVhPJrN2Mvh3likGpmWIgg/729e3fa1-1d7f-430c-65f4-966fa6658900/public"
                alt="footer"
              />
            </div>
          </FooterCard>
        </>
      )}
      <div className="bg-black flex justify-center py-2">
        <p className="text-xs font-light text-white">2023 © ezRich.com | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
