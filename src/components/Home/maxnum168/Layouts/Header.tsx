import type { FC } from 'react'
import React, { useState } from 'react'

import Image from 'next/image'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { BiMenu } from 'react-icons/bi'
import { styled } from 'styled-components'

import Logo from '../../../../../public/images/maxnum168/logo.png'

import { HeaderShared, HeaderMobileShared } from '@/styles/shared/layout.styled'
import type { IMenu } from '@/types/modules/Base'

const menu = [
  {
    label: 'หน้าหลัก',
    path: '/',
  },
  {
    label: 'สมัครสมาชิก',
    path: '/register',
  },
  {
    label: 'เข้าสู่ระบบ',
    path: '/login',
  },
  {
    label: 'โปรโมชั่น',
    path: '/promotion',
  },
  {
    label: 'ติดต่อเรา',
    path: '/contact',
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
        <div className="container mx-auto flex items-center justify-between h-full">
          <Image src={Logo} height={80} alt="logo" onClick={() => router.push('/')} className="logo" />
          <div className="flex gap-4">
            <Button onClick={() => router.push('/login')} className="login">
              เข้าสู่ระบบ
            </Button>
            <Button onClick={() => router.push('/register')} className="register">
              สมัครสมาชิก
            </Button>
          </div>
        </div>
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

export const HeaderVisitor = styled.div`
  background: linear-gradient(270deg, #0f9e66 0.04%, #00251e 99.97%);
  box-shadow: 0px 4px 4px 0px #00000040;
  height: 90px;
  .ant-btn {
    width: 140px;
    height: 40px;
    border-radius: 50px;
    border: 4px solid #daffef;
    box-shadow: 0px 0px 11.48718px 0px #41e2be, 0px 0px 11.48718px 0px #41e2be,
      0px 3.28205px 20.51282px 0px #41e2be inset;
    &.login {
      background: #00301d;
    }
    &.register {
      background: #c60000;
    }
  }
`
