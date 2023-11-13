import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'

import { Spin, message } from 'antd'
import { signOut, useSession } from 'next-auth/react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { setAccessToken, setRefreshToken } from '@/libs/axios'

interface IProps {
  children: ReactNode
}

const Loader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`

const LoadedWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`

const SessionLoader: FC<IProps> = ({ children }) => {
  const { data: session, status } = useSession()
  const router = useRouter()

  // _Effect
  useEffect(() => {
    if (session?.error) {
      message.error(session.error)
      signOut()
    }
    if (status === 'authenticated' && session.token) {
      const { accessToken, refreshToken } = session.token

      setAccessToken(accessToken)
      setRefreshToken(refreshToken)
    }
  }, [status, session])

  return (
    <AnimatePresence mode={'wait'}>
      {status === 'loading' ? (
        <Loader key={'session-loading'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Spin size="large" />
        </Loader>
      ) : (
        <LoadedWrapper key={'session-loaded'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {children}
        </LoadedWrapper>
      )}
    </AnimatePresence>
  )
}

export default SessionLoader
