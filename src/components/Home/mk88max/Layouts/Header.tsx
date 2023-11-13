import type { FC } from 'react'
import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { BiMenu } from 'react-icons/bi'
import { styled } from 'styled-components'

import Logo from '../../../../../public/images/mk88max/logo.png'

import { HeaderShared, HeaderMobileShared } from '@/styles/shared/layout.styled'
import type { IMenu } from '@/types/modules/Base'

const menu = [
  {
    label: 'หน้าหลัก',
    path: '/',
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
        <div className="flex justify-center items-center h-full">
          <Image src={Logo} height={80} alt="logo" onClick={() => router.push('/')} className="logo" />
        </div>
        <ul>
          {menu.map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(item.path)}
              className={router.pathname === item.path ? 'active' : ''}>
              {item.label}
            </li>
          ))}
        </ul>
      </HeaderVisitor>

      {/*  Mobile */}
      <HeaderMobileShared className="md:hidden">
        <div className="container mx-auto">
          <div className="header-menu flex items-center justify-between">
            <Image src={Logo} height={50} alt="logo" onClick={() => router.push('/')} className="logo" />
            <BiMenu onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))} />
            <ul className={sidebar ? 'sidebar active' : 'sidebar'}>
              <li onClick={() => router.push('/login')} className={router.pathname === '/login' ? 'active' : ''}>
                เข้าสู่ระบบ
              </li>
              <li onClick={() => router.push('/register')} className={router.pathname === '/register' ? 'active' : ''}>
                สมัครสมาชิก
              </li>
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
  box-shadow: 0px 4px 4px 0px #00000040;
  > div {
    height: 90px;
  }
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
        background: var(--btn-linear);
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
          background: #fff;
        }
      }
      &:hover {
        color: #fff;
      }
    }
  }
`
