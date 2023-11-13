import { Fragment } from 'react'

import type { GetServerSidePropsContext, NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { getSession } from 'next-auth/react'

import { getI18nProps } from '@/libs/getServerSide'
import LoginMk88max from '@/components/Home/mk88max/Login'
import LoginAutowin from '@/components/Home/autowin/Login'
import LoginAutoslot168 from '@/components/Home/autoslot168/Login'
import LoginUk888club from '@/components/Home/uk888club/Login'
import LoginS7luck from '@/components/Home/s7luck/Login'
import LoginRiverclub from '@/components/Home/riverclub/Login'
import LoginT4bar88 from '@/components/Home/4bar88/Login'
import LoginTherich333 from '@/components/Home/therich333/Login'
import LoginBaza888 from '@/components/Home/baza888/Login'
import LoginGm1 from '@/components/Home/gm1/Login'
import LoginEleven111 from '@/components/Home/eleven111/Login'
import LoginEzRich from '@/components/Home/ezrich/Login'
import LoginRoyal447 from '@/components/Home/royal447/Login'
import LoginT9goldclub from '@/components/Home/9goldclub/Login'
import LoginMr89 from '@/components/Home/mr89/Login'
import LoginMaxnum168 from '@/components/Home/maxnum168/Login'

const LoginPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <Fragment>
      {webName === 'mk88max' && <LoginMk88max />}
      {webName === 'autowin' && <LoginAutowin />}
      {webName === 'autoslot168' && <LoginAutoslot168 />}
      {webName === 'uk888club' && <LoginUk888club />}
      {webName === 's7luck' && <LoginS7luck />}
      {webName === 'riverclub' && <LoginRiverclub />}
      {webName === '4bar88' && <LoginT4bar88 />}
      {webName === 'therich333' && <LoginTherich333 />}
      {webName === 'baza888' && <LoginBaza888 />}
      {webName === 'gm1' && <LoginGm1 />}
      {webName === 'eleven111' && <LoginEleven111 />}
      {webName === 'ezrich' && <LoginEzRich />}
      {webName === 'royal447' && <LoginRoyal447 />}
      {webName === '9goldclub' && <LoginT9goldclub />}
      {webName === 'mr89' && <LoginMr89 />}
      {webName === 'maxnum168' && <LoginMaxnum168 />}
    </Fragment>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx)
  const props = await getI18nProps(ctx, ['common', 'login'])

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      ...props,
      callbackUrl: ctx.query?.callbackUrl ?? null,
    },
  }
}

export default LoginPage
