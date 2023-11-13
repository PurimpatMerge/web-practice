import type { FC } from 'react'
import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { BiMenu } from 'react-icons/bi'
import { styled } from 'styled-components'

import Logo from '../../../../../public/images/9goldclub/logo.png'
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

interface IProps {
  bgFix?: boolean
}

const Header: FC<IProps> = ({ bgFix }) => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const [sidebar, setSidebar] = useState<boolean>(false)

  return (
    <HeaderShared>
      {/* Desktop */}
      <HeaderVisitor $bg={imageList.header} className="hidden md:block">
        <div className="flex justify-center items-center h-full">
          {!bgFix ? (
            <div className="flex items-center gap-8">
              <img src={imageList.login} alt="login" onClick={() => router.push('/login')} className="login" />
              <img
                src={imageList.register}
                alt="register"
                onClick={() => router.push('/register')}
                className="register"
              />
            </div>
          ) : (
            <img src={'/images/9goldclub/logo.png'} alt="logo" onClick={() => router.push('/')} className="logo" />
          )}
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

export const HeaderVisitor = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 120px;
  .login,
  .register {
    height: 50px;
  }
  .logo {
    height: 80px;
  }
`
