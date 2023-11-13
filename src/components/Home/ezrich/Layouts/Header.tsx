import type { FC } from 'react'
import React, { useEffect, useState } from 'react'

import type { MenuProps } from 'antd'
import { Button, Col, Dropdown, Modal, Row } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { BiMenu, BiSolidUserCircle, BiSolidWallet } from 'react-icons/bi'
import { ImExit } from 'react-icons/im'
import io from 'socket.io-client'
import { MdOutlineLogin } from 'react-icons/md'
import { HiOutlinePlusSm } from 'react-icons/hi'
import { styled } from 'styled-components'

import { formatNumber } from '@/libs/parser'
import { imageList } from '@/components/Home/ezrich/configs/images'
import {
  HeaderCard,
  HeaderWrapper,
  MenuLogin,
  MenuMobile,
  ProfileInfoBox,
  RegisButton,
  SubCard,
} from '@/components/Home/ezrich/styled'

const socket = io(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT)

export interface ISocket {
  amount: number
  message: string
  userId: number
}

const Header: FC = () => {
  const { t } = useTranslation(['common'])
  const { asPath, locale, route } = useRouter()
  const router = useRouter()
  const { data: session } = useSession()
  const [sidebar, setSidebar] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

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
        Modal.success({
          content: 'ฝากเงินสำเร็จ',
          okText: 'ตกลง',
          okButtonProps: {
            className: 'btn-active',
          },
          centered: true,
          width: 320,
        })
      }
    })
    // เมื่อคอมโพเนนต์ถูกถอดเชื่อม
    return () => {
      socket.off('deposit')
    }
  }, [session?.user?.id])

  return (
    <HeaderCard $bg="">
      {/* Desktop */}
      {!session?.user ? (
        <div className="hidden md:block">
          <HeaderWrapper>
            <div className="container mx-auto">
              <div className="header">
                <img
                  src="/images/ezrich/logo.png"
                  onClick={() => router.push('/')}
                  className="object-center w-40"
                  alt="Logo"
                />
                <div className="btn-zone">
                  <RegisButton onClick={() => router.push('/login')}>
                    <div className="inner-card">เข้าสู่ระบบ</div>
                    <MdOutlineLogin className="text-black w-6 h-6 mr-2" />
                  </RegisButton>
                  <RegisButton $regis onClick={() => router.push('/register')}>
                    <div className="inner-card">สมัครสมาชิก</div>
                    <HiOutlinePlusSm className="text-white w-6 h-6 mr-2" />
                  </RegisButton>
                </div>
              </div>
            </div>
          </HeaderWrapper>
          <SubCard>
            {itemsMenu.map((item) => (
              <div onClick={() => router.push(item.path)} key={item.label} className="item">
                <img src={item.icon} alt={item.label} className="w-6 h-6 " />
                <p className={router.pathname === item.path ? 'active' : ''}>{item.label}</p>
              </div>
            ))}
          </SubCard>
        </div>
      ) : (
        <MenuLogin className="hidden md:block">
          <div className="container mx-auto">
            <Row>
              <Col xs={10} />
              <Col xs={4} className="flex justify-center items-center">
                <img src="/images/ezrich/logo.png" alt="logo" onClick={() => router.push('/')} className="logo" />
              </Col>
              <Col xs={10} className="flex items-center justify-end">
                <ProfileInfoBox className="flex items-center justify-end gap-2">
                  <div className="name-credit-box">
                    <div>
                      <div>
                        <BiSolidUserCircle size={20} />
                      </div>
                      <p>{session?.user?.fullname}</p>
                    </div>
                    <div>
                      <div>
                        <BiSolidWallet size={20} />
                      </div>
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
                </ProfileInfoBox>
              </Col>
            </Row>
            <ul>
              {itemsMenuLogin.map((item, index) => (
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
      )}

      {/*  Mobile */}
      <MenuMobile className="md:hidden">
        <div className="container mx-auto">
          <div className="header-menu flex items-center justify-between">
            <img
              src="/images/ezrich/logo.png"
              height={50}
              alt="logo"
              onClick={() => router.push('/')}
              className="logo"
            />
            <BiMenu onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))} />{' '}
            {!session?.user ? (
              <ul className={sidebar ? 'sidebar active' : 'sidebar'}>
                <li onClick={() => router.push('/login')} className={router.pathname === '/login' ? 'active' : ''}>
                  เข้าสู่ระบบ
                </li>
                {itemsMenu.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => router.push(item.path)}
                    className={router.pathname === item.path ? 'active' : ''}>
                    {item.label}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className={sidebar ? 'sidebar active' : 'sidebar'}>
                {itemsMenuLogin.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => router.push(item.path)}
                    className={router.pathname === item.path ? 'active' : ''}>
                    {item.label}
                  </li>
                ))}
                <li onClick={() => setIsOpenModal(true)}>ออกจากระบบ</li>
              </ul>
            )}
          </div>
          {session?.user && (
            <ProfileInfoBox className="flex items-center justify-end gap-2">
              <div className="name-credit-box">
                <div>
                  <div>
                    <BiSolidUserCircle size={20} />
                  </div>
                  <p>{session?.user?.fullname}</p>
                </div>
                <div>
                  <div>
                    <BiSolidWallet size={20} />
                  </div>
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
            </ProfileInfoBox>
          )}
        </div>
      </MenuMobile>

      {/* Modal Logout */}
      <Modal
        width={300}
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={false}
        className="modal-logout">
        <h1>ยืนยันออกจากระบบ</h1>
        <div className="flex justify-center mt-4">
          <Button onClick={() => signOut()}>ออกจากระบบ</Button>
        </div>
      </Modal>
    </HeaderCard>
  )
}

export default Header

const itemsMenu = [
  {
    label: 'หน้าหลัก',
    path: '/',
    icon: imageList.menu_icon.home,
  },
  {
    label: 'คาสิโน',
    path: '/games/casino',
    icon: imageList.menu_icon.casino,
  },
  {
    label: 'สล็อต',
    path: '/games/slot',
    icon: imageList.menu_icon.slot,
  },
  {
    label: 'กีฬา',
    path: '/games/sport',
    icon: imageList.menu_icon.sport,
  },
  {
    label: 'โปรโมชัน',
    path: '/promotion',
    icon: imageList.menu_icon.promotion,
  },
  {
    label: 'ติดต่อเรา',
    path: '/contact',
    icon: imageList.menu_icon.line,
  },
]

const itemsMenuLogin = [
  {
    label: 'หน้าหลัก',
    path: '/',
  },
  {
    label: 'กิจกรรม',
    path: '/activity',
  },
  {
    label: 'โปรโมชัน',
    path: '/promotion',
  },
  {
    label: 'พันธมิตร',
    path: '/affiliate',
  },
  {
    label: 'บัญชี',
    path: '/account',
  },
  {
    label: 'ติดต่อเรา',
    path: '/contact',
  },
]
