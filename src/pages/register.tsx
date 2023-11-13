import { Fragment } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import { makeServerSideProps } from '@/libs/getServerSide'
import { DEFAULT_LOCALE } from '@/configs/locale'
import RegisterMk88max from '@/components/Home/mk88max/Register'
import RegisterAutowin from '@/components/Home/autowin/Register'
import RegisterAutoslot168 from '@/components/Home/autoslot168/Register'
import RegisterUk888club from '@/components/Home/uk888club/Register'
import RegisterS7luck from '@/components/Home/s7luck/Register'
import RegisterRiverclub from '@/components/Home/riverclub/Register'
import RegisterT4bar88 from '@/components/Home/4bar88/Register'
import RegisterTherich333 from '@/components/Home/therich333/Register'
import RegisterBaza888 from '@/components/Home/baza888/Register'
import RegisterGm1 from '@/components/Home/gm1/Register'
import RegisterEleven111 from '@/components/Home/eleven111/Register'
import RegisterEzRich from '@/components/Home/ezrich/Register'
import RegisterRoyal447 from '@/components/Home/royal447/Register'
import RegisterT9goldclub from '@/components/Home/9goldclub/Register'
import RegisterMr89 from '@/components/Home/mr89/Register'
import RegisterMaxnum168 from '@/components/Home/maxnum168/Register'

const RegisterPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <Fragment>
      {webName === 'mk88max' && <RegisterMk88max />}
      {webName === 'autowin' && <RegisterAutowin />}
      {webName === 'autoslot168' && <RegisterAutoslot168 />}
      {webName === 'uk888club' && <RegisterUk888club />}
      {webName === 's7luck' && <RegisterS7luck />}
      {webName === 'riverclub' && <RegisterRiverclub />}
      {webName === '4bar88' && <RegisterT4bar88 />}
      {webName === 'therich333' && <RegisterTherich333 />}
      {webName === 'baza888' && <RegisterBaza888 />}
      {webName === 'gm1' && <RegisterGm1 />}
      {webName === 'eleven111' && <RegisterEleven111 />}
      {webName === 'ezrich' && <RegisterEzRich />}
      {webName === 'royal447' && <RegisterRoyal447 />}
      {webName === '9goldclub' && <RegisterT9goldclub />}
      {webName === 'mr89' && <RegisterMr89 />}
      {webName === 'maxnum168' && <RegisterMaxnum168 />}
    </Fragment>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default RegisterPage
