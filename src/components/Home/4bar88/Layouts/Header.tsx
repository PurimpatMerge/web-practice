import type { FC } from 'react'
import React, { useState } from 'react'

import Image from 'next/image'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { BiMenu } from 'react-icons/bi'
import { styled } from 'styled-components'

import Logo from '../../../../../public/images/4bar88/logo.png'
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
      <HeaderVisitor $bg={imageList.HeaderHome} className="hidden md:flex flex-col items-center">
        <div className="container mx-auto">
          <Row gutter={10} className="header-top">
            <Col xs={12} className="flex items-center">
              <Image src={Logo} height={50} alt="logo" onClick={() => router.push('/')} className="logo" />
            </Col>
            <Col xs={12} className="flex items-center justify-end">
              <LoginRegisterBox>
                <img onClick={() => router.push('/login')} src={imageList.LoginHeader} alt="login-btn" />
                <img onClick={() => router.push('/register')} src={imageList.RegisterHeader} alt="login-btn" />
              </LoginRegisterBox>
            </Col>
          </Row>
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
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 4px 4px 0px #00000040;
  .ant-row {
    height: 70px;
  }
`
export const LoginRegisterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  img {
    height: 40px;
    cursor: pointer;
    &:hover {
      scale: 1.015;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 6px;
    img {
      width: 90px;
    }
  }
`
export const GoldHomeBox = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
