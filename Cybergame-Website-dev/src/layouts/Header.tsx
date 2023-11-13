import React, { Fragment, useEffect, useState } from 'react'
import type { FC } from 'react'

import Image from 'next/image'
import type { MenuProps } from 'antd'
import { Button, Col, Dropdown, Modal, Row } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { BiCheckSquare, BiMenu, BiSolidUserCircle, BiSolidWallet } from 'react-icons/bi'
import io from 'socket.io-client'
import { ImExit } from 'react-icons/im'

import { HeaderShared, MenuLogin, HeaderMobileShared, UserInfo } from '@/styles/shared/layout.styled'
import { formatNumber } from '@/libs/parser'
import MenuListLogin from '@/configs/menu-login'
import { ButtonBox } from '@/styles/shared/shared.styled'

const socket = io(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT)

export interface ISocket {
  amount: number
  message: string
  userId: number
}

const Header: FC = () => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME
  const { t } = useTranslation(['common'])
  const { asPath, locale } = useRouter()
  const router = useRouter()
  const { data: session } = useSession()
  const [sidebar, setSidebar] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenModalDeposit, setIsOpenModalDeposit] = useState<boolean>(false)

  const items: MenuProps['items'] = [
    {
      key: 'TH',
      label: (
        <Link href={asPath} locale="th" className="text-sm">
          TH
        </Link>
      ),
    },
    {
      key: 'EN',
      label: (
        <Link href={asPath} locale="en" className="text-sm">
          EN
        </Link>
      ),
    },
  ]

  useEffect(() => {
    // เมื่อหน้าถูกโหลด
    socket.on('deposit', async (data: ISocket) => {
      if (data.userId === session?.user?.id) {
        setIsOpenModalDeposit(true)
      }
    })
    // เมื่อคอมโพเนนต์ถูกถอดเชื่อม
    return () => {
      socket.off('deposit')
    }
  }, [session?.user?.id])

  return (
    <HeaderShared>
      {/* Desktop */}
      <MenuLogin className="hidden md:block">
        <div className="container mx-auto">
          <Row gutter={16}>
            <Col xs={10} />
            <Col xs={4} className="flex justify-center items-center">
              <img src={`/images/${webName}/logo.png`} alt="logo" onClick={() => router.push('/')} className="logo" />
            </Col>
            <Col xs={10} className="flex items-center justify-end">
              <UserInfo className="flex items-center justify-end gap-2">
                <div className="name-credit-box">
                  <div className="name-box">
                    <BiSolidUserCircle size={20} />
                    <p>{session?.user?.fullname}</p>
                  </div>
                  <div className="credit-box">
                    <BiSolidWallet size={20} />
                    <p>{formatNumber(session?.user?.credit)}</p>
                  </div>
                </div>
                <div className="logout-translate-box">
                  <Dropdown menu={{ items }} placement="bottomRight">
                    <Button>
                      <span className="text-sm">{locale.toLocaleUpperCase()}</span>
                    </Button>
                  </Dropdown>
                  <Button icon={<ImExit />} aria-label="logout" onClick={() => setIsOpenModal(true)} />
                </div>
              </UserInfo>
            </Col>
          </Row>
          <ul>
            {MenuListLogin.map((item, index) => (
              <li
                key={index}
                onClick={() => router.push(item.path)}
                className={router.pathname === item.path ? 'active' : ''}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </MenuLogin>

      {/*  Mobile */}
      <HeaderMobileShared className="md:hidden">
        <div className="header-mobile-bg">
          <div className="container mx-auto">
            <div className="header-menu flex items-center justify-between">
              <img src={`/images/${webName}/logo.png`} alt="logo" onClick={() => router.push('/')} className="logo" />
              <BiMenu onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))} />
              <ul className={sidebar ? 'sidebar active' : 'sidebar'}>
                {MenuListLogin.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => router.push(item.path)}
                    className={router.pathname === item.path ? 'active' : ''}>
                    {item.label}
                  </li>
                ))}
                <li onClick={() => setIsOpenModal(true)}>ออกจากระบบ</li>
              </ul>
            </div>
            <UserInfo className="flex items-center justify-end gap-2">
              <div className="name-credit-box">
                <div className="name-box">
                  <BiSolidUserCircle size={20} />
                  <p>{session?.user?.fullname}</p>
                </div>
                <div className="credit-box">
                  <BiSolidWallet size={20} />
                  <p>{formatNumber(session?.user?.credit)}</p>
                </div>
              </div>
              <div className="logout-translate-box">
                <Dropdown menu={{ items }} placement="bottomRight">
                  <Button>
                    <span className="text-sm">{locale.toLocaleUpperCase()}</span>
                  </Button>
                </Dropdown>
              </div>
            </UserInfo>
          </div>
        </div>
      </HeaderMobileShared>

      {/* Modal Logout */}
      <Modal
        width={300}
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={false}
        className="modal-logout">
        <h1>ยืนยันออกจากระบบ</h1>
        <div className="flex justify-center mt-4">
          <ButtonBox onClick={() => signOut()}>ออกจากระบบ</ButtonBox>
        </div>
      </Modal>

      {/* Modal Deposit Success */}
      <Modal
        width={300}
        open={isOpenModalDeposit}
        onCancel={() => setIsOpenModalDeposit(false)}
        footer={false}
        closeIcon={false}
        className="modal-logout">
        <BiCheckSquare size={90} className="mx-auto" />
        <h1>ฝากเงินสำเร็จ</h1>
        <div className="flex justify-center mt-4">
          <ButtonBox onClick={() => setIsOpenModalDeposit(false)}>ตกลง</ButtonBox>
        </div>
      </Modal>
    </HeaderShared>
  )
}

export default Header
