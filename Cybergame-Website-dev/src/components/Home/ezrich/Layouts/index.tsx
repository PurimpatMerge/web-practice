import type { FC, ReactNode } from 'react'

import { default as NextHead } from 'next/head'
import { Button } from 'antd'
import { BiChevronLeft } from 'react-icons/bi'
import Script from 'next/script'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'

import { WebService } from '@/services'
import { FloatingLine } from '@/styles/shared/layout.styled'
import { Box, Wrapper } from '@/components/Home/ezrich/styled'
import { changeTheme } from '@/utils/helper'

interface IProps {
  children: ReactNode
  title: string
  label?: string
  back?: string
  isLogin?: boolean
  noMarginTop?: boolean
}

const PageHomeLayout: FC<IProps> = ({ title, children, label, back, isLogin, noMarginTop }) => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME
  const router = useRouter()
  changeTheme(webName)

  // _Query
  const { data: webLine } = useQuery(['web-line'], () => WebService.webLine())
  // _Query

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ezrich',
    url: 'https://ezrich.com/',
    logo: 'https://ezrich.com/images/ezrich/logo.png',
    description:
      'บริการพนันออนไลน์เต็มรูปแบบ แทงบอล เล่นคาสิโน แทงหวย แทงมวยออนไลน์ ฯ ตัวแทนโดยตรงจากเว็บ ราคาดี จ่ายเร็ว ปลอดภัย 100%',
    sameAs: [],
  }

  return (
    <Wrapper $isLogin={isLogin}>
      <NextHead>
        <title>{webName + '.com | ' + title}</title>
        <meta
          name="description"
          content="บริการพนันออนไลน์เต็มรูปแบบ แทงบอล เล่นคาสิโน แทงหวย แทงมวยออนไลน์ ฯ ตัวแทนโดยตรงจากเว็บ ราคาดี จ่ายเร็ว ปลอดภัย 100%"
        />
        <meta name="keywords" content="เว็บแทงบอลออนไลน์ ,บาคาร่าออนไลน์" />
        <meta name="author" content="ezRich" />
        <link rel="canonical" href="https://ezRich.com/" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={`/images/${webName}/favicon.ico`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </NextHead>
      <Box>
        <FloatingLine
          onClick={() => window.open(webLine?.urlLine)}
          src={`/images/${webName}/line.png`}
          alt="floating-line-icon"
        />
        <div>
          <Header />
          <div className={`${!noMarginTop ? 'my-12' : 'mt-0'}`}>
            {label && <h1 className="text-xl md:text-2xl text-center font-semibold mb-4">{label}</h1>}
            {back && (
              <div className="container mx-auto">
                <Button icon={<BiChevronLeft />} onClick={() => router.push(back)} className="back-btn mb-2">
                  กลับ
                </Button>
              </div>
            )}
            {children}

            <Script id="google-analytics">
              {`
                (function (w, d, s, l, i) {
                  w[l] = w[l] || []
                  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : ''
                  j.async = true
                  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
                  f.parentNode.insertBefore(j, f)
                })(window, document, 'script', 'dataLayer', 'GTM-XXXXXX');
              `}
            </Script>

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></Script>
            <Script id="google-tag">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXX');
              `}
            </Script>

            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </div>
        </div>
        <Footer />
      </Box>
    </Wrapper>
  )
}

export default PageHomeLayout
