import type { FC } from 'react'
import React, { useState } from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { BiMenu } from 'react-icons/bi'
import { styled } from 'styled-components'

import { imageList } from '../configs/images'

import { HeaderShared, HeaderMobileShared } from '@/styles/shared/layout.styled'
import type { IMenu } from '@/types/modules/Base'

const menu = [
  {
    label: 'หน้าหลัก',
    path: '/',
  },
  {
    label: 'เข้าสู่ระบบ',
    path: '/login',
  },
  {
    label: 'สมัครสมาชิก',
    path: '/register',
  },
] as IMenu[]

const Header: FC = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const [sidebar, setSidebar] = useState<boolean>(false)

  return (
    <HeaderShared>
      {/* Desktop */}
      <HeaderVisitor className="hidden md:block">
        <div className="flex justify-between items-center container mx-auto h-full">
          <img src={imageList.logo} alt="logo" onClick={() => router.push('/')} />
          <LoginRegisterBox className="flex">
            <img onClick={() => router.push('/login')} src={imageList.loginHeader} alt="login" />
            <img onClick={() => router.push('/register')} src={imageList.registerHeader} alt="register" />
          </LoginRegisterBox>
        </div>
        <div className="flex justify-center py-1 w-full">
          <p className="text-xl font-semibold">คาสิโนมาตรฐานสากล</p>
        </div>
      </HeaderVisitor>

      {/*  Mobile */}
      <HeaderMobileShared className="md:hidden">
        <div className="container mx-auto">
          <div className="header-menu flex items-center justify-between">
            <img src={imageList.logo} alt="logo" onClick={() => router.push('/')} style={{ height: 40 }} />
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

export const HeaderVisitor = styled.div`
  background: #020d2b;
  box-shadow: 0px 4px 4px 0px #00000040;
  > div {
    &:first-child {
      height: 70px;
      img {
        height: 60px;
      }
    }
    &:last-child {
      background: #000;
    }
  }
`
export const LoginRegisterBox = styled.div`
  img {
    height: 60px;
  }
`
