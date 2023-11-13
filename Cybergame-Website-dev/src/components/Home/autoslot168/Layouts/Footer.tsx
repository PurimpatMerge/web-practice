import type { FC } from 'react'
import React from 'react'

import { styled } from 'styled-components'

const Footer: FC = () => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <FooterCard>
      <div className="container mx-auto py-4 md:py-6 flex flex-col items-center gap-4">
        <img src={'/images/autoslot168/logo.png'} alt="logo" />
        <p className="text-center text-sm md:text-base">
          Autoslot เกมส์สล็อตออนไลน์ ที่ได้รับความนิยมจากผู้เล่นทั่วโลกในตอนนี้
          การเล่นสล็อตของคุณจะไม่น่าเบื่ออีกต่อไปด้วยความพิเศษที่มีรูปแบบที่เล่นง่าย แจ็คพอตแตกง่ายแตกบ่อยที่สุด
          การเล่นสล็อตสามารถเล่นได้ทุกที่ทุกเวลา เพราะเว็บของเรามีความทันสมัย
          ดูแลคุณอย่างทั่วถึงไม่ว่าจะอยู่ที่ใดของประเทศ แจ็คพอตแตก รับโบนัสตลอด
          <span> สมัครสมาชิก </span>
          กับเราเพียงไม่กี่นาที ปุ่ม <span> สมัครสมาชิก </span> อยู่ด้านบน สามารถที่จะทดลองเล่นได้ฟรี
          ฝากถอนสะดวกไม่ต้องเสียเวลา เป็นเศรษฐีใหม่ที่ทำสล็อตแตกได้ตลอดทุกช่วงเวลา ลงเดิมพันท่จำนวนเงินเท่าไหร่ก็ได้
          ไม่ต้องกังวลเรื่องขั้นต่ำ
        </p>
      </div>
      <div className="text-center py-2">
        <p className="text-xs font-light text-white">2023 @{webName}.com | All Rights Reserved</p>
      </div>
    </FooterCard>
  )
}

export default Footer

const FooterCard = styled.div`
  background: #e1e1e1;
  box-shadow: 0px -4px 4px 0px #00000040;
  > div {
    &:first-child {
      img {
        width: 160px;
        @media (max-width: 767.98px) {
          width: 120px;
        }
      }
      p {
        color: #727272;
      }
    }
    &:last-child {
      background: var(--main-color);
      p {
        color: #fff;
      }
    }
  }
  span {
    color: var(--main-color);
    font-weight: 700;
  }
`
