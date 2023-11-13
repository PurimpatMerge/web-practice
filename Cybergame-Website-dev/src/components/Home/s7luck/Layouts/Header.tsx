import type { FC } from 'react'
import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { BiMenu } from 'react-icons/bi'
import { styled } from 'styled-components'

import Logo from '../../../../../public/images/s7luck/logo.png'
import { imageList } from '../configs/images'

import { HeaderShared, HeaderMobileShared } from '@/styles/shared/layout.styled'
import type { IMenu } from '@/types/modules/Base'

const menu = [
  {
    label: 'เข้าสู่ระบบ',
    path: '/login',
  },
  {
    label: 'สมัครสมาชิก',
    path: '/register',
  },
  {
    label: 'หน้าหลัก',
    path: '/',
  },
] as IMenu[]

const Header: FC = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const [sidebar, setSidebar] = useState<boolean>(false)

  return (
    <HeaderShared>
      {/* Desktop */}
      <HeaderVisitor $bg={imageList.header} className="hidden md:block">
        <div className="flex justify-between items-center container mx-auto h-full">
          <Image src={Logo} height={60} alt="logo" onClick={() => router.push('/')} className="logo" />
          <LoginRegisterBox className="flex gap-4">
            <img onClick={() => router.push('/login')} src={imageList.loginHeader} alt="login" />
            <img onClick={() => router.push('/register')} src={imageList.registerHeader} alt="register" />
          </LoginRegisterBox>
        </div>
        <GoldHomeBox $bg={imageList.gold} className="flex justify-center py-1 w-full">
          <p className="text-xl font-semibold">คาสิโนมาตรฐานสากล</p>
        </GoldHomeBox>
      </HeaderVisitor>

      {/*  Mobile */}
      <HeaderMobileShared className="md:hidden">
        <div className="container mx-auto">
          <div className="header-menu flex items-center justify-between">
            <Image src={Logo} height={50} alt="logo" onClick={() => router.push('/')} className="logo" />
            <BiMenu onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))} />
            <ul className={sidebar ? 'sidebar active' : 'sidebar'}>
              {menu.map((item, index) => (
                <li
                  key={index}
                  onClick={() => router.push(item.path)}
                  className={router.pathname === item.path ? 'active' : ''}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HeaderMobileShared>
    </HeaderShared>
  )
}

export default Header

export const HeaderVisitor = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 4px 4px 0px #00000040;
  > div {
    &:first-child {
      height: 70px;
    }
  }
`
export const LoginRegisterBox = styled.div`
  img {
    height: 46px;
  }
`
export const GoldHomeBox = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
