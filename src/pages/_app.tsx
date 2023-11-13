import React, { useMemo } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { ConfigProvider } from 'antd'
import EN from 'antd/lib/locale/en_US'
import TH from 'antd/lib/locale/th_TH'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import dayjs from 'dayjs'

import '@fontsource/ibm-plex-sans-thai/300.css'
import '@fontsource/ibm-plex-sans-thai/400.css'
import '@fontsource/ibm-plex-sans-thai/500.css'
import '@fontsource/ibm-plex-sans-thai/600.css'
import '@fontsource/ibm-plex-sans-thai/700.css'
import '@fontsource-variable/big-shoulders-text'
import '@/styles/shared/scss/globals.scss'

import SessionLoader from '@/components/Shared/SessionLoader'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const locales = {
  th: TH,
  en: EN,
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const { locale } = useRouter()

  // _Memo
  const configLocale = useMemo(() => {
    if (!locale) {
      dayjs.locale('th')
      return locales.th
    }

    dayjs.locale(locale)
    return locales[locale]
  }, [locale])

  return (
    <SessionProvider session={session}>
      <ConfigProvider locale={configLocale}>
        <SessionLoader>
          <QueryClientProvider client={queryClient}>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
          </QueryClientProvider>
        </SessionLoader>
      </ConfigProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(MyApp)
