import { Fragment, type FC, type ReactNode } from 'react'

import { default as NextHead } from 'next/head'
import Script from 'next/script'
import { useQuery } from '@tanstack/react-query'
import { Button } from 'antd'
import { BiChevronLeft } from 'react-icons/bi'
import router from 'next/router'
import { styled } from 'styled-components'

import Header from './Header'
import Footer from './Footer'

import { WebService } from '@/services'
import { ContentBodyShared, FloatingLine } from '@/styles/shared/layout.styled'
import { changeTheme } from '@/utils/helper'

interface IProps {
  children: ReactNode
  title: string
  label?: string
  back?: string
  bgFix?: boolean
}

const PageHomeLayout: FC<IProps> = ({ title, children, label, back, bgFix }) => {
  const webName = process.env.NEXT_PUBLIC_WEB_NAME
  changeTheme(webName)

  // _Query
  const { data: webLine } = useQuery(['web-line'], () => WebService.webLine())

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'mk88max',
    url: 'https://mk88max.com/',
    logo: 'https://mk88max.com/images/mk88max/logo.png',
    description:
      'บริการพนันออนไลน์เต็มรูปแบบ แทงบอล เล่นคาสิโน แทงหวย แทงมวยออนไลน์ ฯ ตัวแทนโดยตรงจากเว็บ ราคาดี จ่ายเร็ว ปลอดภัย 100%',
    sameAs: [],
  }

  return (
    <Fragment>
      <NextHead>
        <title>{webName + '.com | ' + title}</title>
        <meta
          name="description"
          content="บริการพนันออนไลน์เต็มรูปแบบ แทงบอล เล่นคาสิโน แทงหวย แทงมวยออนไลน์ ฯ ตัวแทนโดยตรงจากเว็บ ราคาดี จ่ายเร็ว ปลอดภัย 100%"
        />
        <meta name="keywords" content="เว็บแทงบอลออนไลน์ ,บาคาร่าออนไลน์" />
        <meta name="author" content="mk88max" />
        <link rel="canonical" href="https://mk88max.com/" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={`/images/${webName}/favicon.ico`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </NextHead>
      <Wrapper>
        <FloatingLine
          onClick={() => window.open(webLine?.urlLine)}
          src={`/images/${webName}/line.png`}
          alt="floating-line-icon"
        />
        <div>
          <Header bgFix={bgFix} />
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
          </ContentBodyShared>
        </div>
        <Footer />
      </Wrapper>
    </Fragment>
  )
}

export default PageHomeLayout

export const Wrapper = styled.div`
  background: var(--body-bg);
  overflow-x: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;
`
