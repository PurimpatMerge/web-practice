import { Fragment, type FC, type ReactNode } from 'react'

import { default as NextHead } from 'next/head'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import { BiChevronLeft } from 'react-icons/bi'
import { useQuery } from '@tanstack/react-query'

import Header from './Header'
import Footer from './Footer'

import { WebService } from '@/services'
import { ContentBodyShared, FloatingLine, Wrapper } from '@/styles/shared/layout.styled'
import { changeTheme } from '@/utils/helper'

interface IProps {
  children: ReactNode
  title: string
  label?: string
  back?: string
}

const PageLayout: FC<IProps> = ({ title, children, label, back }) => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME
  changeTheme(webName)
  const router = useRouter()

  // _Query
  const { data: webLine } = useQuery(['web-line'], () => WebService.webLine())

  return (
    <Fragment>
      <NextHead>
        <title>{title}</title>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={`/images/${webName}/favicon.ico`} />
      </NextHead>
      <Wrapper>
        <FloatingLine
          onClick={() => window.open(webLine?.urlLine)}
          src={`/images/${webName}/line.png`}
          alt="floating-line-icon"
        />
        <div>
          <Header />
          <ContentBodyShared>
            {label && <h1 className="text-xl md:text-2xl text-center font-semibold mb-4">{label}</h1>}
            {back && (
              <div className="container mx-auto">
                <Button icon={<BiChevronLeft />} onClick={() => router.push(back)} className="back-btn mb-2">
                  กลับ
                </Button>
              </div>
            )}
            {children}
          </ContentBodyShared>
        </div>
        <Footer />
      </Wrapper>
    </Fragment>
  )
}

export default PageLayout
