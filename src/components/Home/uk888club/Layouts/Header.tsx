import type { FC } from 'react'
import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { BiMenu } from 'react-icons/bi'
import { styled } from 'styled-components'

import Logo from '../../../../../public/images/uk888club/logo.png'
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
      <MenuVisitor $bg={imageList.BgHeader} className="hidden md:block py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between text-center">
            <Image src={Logo} height={100} alt="logo" onClick={() => router.push('/')} className="logo" />
            <div className="flex gap-3">
              <img onClick={() => router.push('/login')} width={250} src={imageList.Login} alt="login" />
              <img onClick={() => router.push('/register')} width={250} src={imageList.Register} alt="register" />
            </div>
          </div>
        </div>
      </MenuVisitor>

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

export const MenuVisitor = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  ul {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    gap: 24px;
    border-radius: 50px;
    li {
      height: 100%;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      white-space: nowrap;
      transition: 0.2s;
      display: flex;
      align-items: center;
      &.active {
        position: relative;
        background: var(--main-color);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background-color: #fff;
        }
      }
      &:hover {
        color: #fff;
      }
    }
  }
`
