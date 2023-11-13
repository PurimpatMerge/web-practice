import { Fragment } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import { makeServerSideProps } from '@/libs/getServerSide'
import { DEFAULT_LOCALE } from '@/configs/locale'
import ForgotPasswordMk88max from '@/components/Home/mk88max/ForgotPassword'
import ForgotPasswordAutowin from '@/components/Home/autowin/ForgotPassword'
import ForgotPasswordAutoslot168 from '@/components/Home/autoslot168/ForgotPassword'
import ForgotPasswordUk888club from '@/components/Home/uk888club/ForgotPassword'
import ForgotPasswordS7luck from '@/components/Home/s7luck/ForgotPassword'
import ForgotPasswordRiverclub from '@/components/Home/riverclub/ForgotPassword'
import ForgotPasswordT4bar88 from '@/components/Home/4bar88/ForgotPassword'
import ForgotPasswordTherich333 from '@/components/Home/therich333/ForgotPassword'
import ForgotPasswordBaza888 from '@/components/Home/baza888/ForgotPassword'
import ForgotPasswordGm1 from '@/components/Home/gm1/ForgotPassword'
import ForgotPasswordEleven111 from '@/components/Home/eleven111/ForgotPassword'
import ForgotPasswordEzRich from '@/components/Home/ezrich/ForgotPassword'
import ForgotPasswordRoyal447 from '@/components/Home/royal447/ForgotPassword'
import ForgotPasswordT9goldclub from '@/components/Home/9goldclub/ForgotPassword'
import ForgotPasswordMr89 from '@/components/Home/mr89/ForgotPassword'
import ForgotPasswordMaxnum168 from '@/components/Home/maxnum168/ForgotPassword'

const ForgotPasswordPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <Fragment>
      {webName === 'mk88max' && <ForgotPasswordMk88max />}
      {webName === 'autowin' && <ForgotPasswordAutowin />}
      {webName === 'autoslot168' && <ForgotPasswordAutoslot168 />}
      {webName === 'uk888club' && <ForgotPasswordUk888club />}
      {webName === 's7luck' && <ForgotPasswordS7luck />}
      {webName === 'riverclub' && <ForgotPasswordRiverclub />}
      {webName === '4bar88' && <ForgotPasswordT4bar88 />}
      {webName === 'therich333' && <ForgotPasswordTherich333 />}
      {webName === 'baza888' && <ForgotPasswordBaza888 />}
      {webName === 'gm1' && <ForgotPasswordGm1 />}
      {webName === 'eleven111' && <ForgotPasswordEleven111 />}
      {webName === 'ezrich' && <ForgotPasswordEzRich />}
      {webName === 'royal447' && <ForgotPasswordRoyal447 />}
      {webName === '9goldclub' && <ForgotPasswordT9goldclub />}
      {webName === 'mr89' && <ForgotPasswordMr89 />}
      {webName === 'maxnum168' && <ForgotPasswordMaxnum168 />}
    </Fragment>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default ForgotPasswordPage
