import { Fragment } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import { makeServerSideProps } from '@/libs/getServerSide'
import { DEFAULT_LOCALE } from '@/configs/locale'
import ContactMk88max from '@/components/Home/mk88max/Contact'
import ContactAutowin from '@/components/Home/autowin/Contact'
import ContactAutoslot168 from '@/components/Home/autoslot168/Contact'
import ContactUk888club from '@/components/Home/uk888club/Contact'
import ContactS7luck from '@/components/Home/s7luck/Contact'
import ContactRiverclub from '@/components/Home/riverclub/Contact'
import ContactT4bar88 from '@/components/Home/4bar88/Contact'
import ContactTherich333 from '@/components/Home/therich333/Contact'
import ContactBaza888 from '@/components/Home/baza888/Contact'
import ContactGm1 from '@/components/Home/gm1/Contact'
import ContactEleven111 from '@/components/Home/eleven111/Contact'
import ContactEzRich from '@/components/Home/ezrich/Contact'
import ContactRoyal447 from '@/components/Home/royal447/Contact'
import ContactT9goldclub from '@/components/Home/9goldclub/Contact'
import ContactMr89 from '@/components/Home/mr89/Contact'
import ContactMaxnum168 from '@/components/Home/maxnum168/Contact'

const ContactPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <Fragment>
      {webName === 'mk88max' && <ContactMk88max />}
      {webName === 'autowin' && <ContactAutowin />}
      {webName === 'autoslot168' && <ContactAutoslot168 />}
      {webName === 'uk888club' && <ContactUk888club />}
      {webName === 's7luck' && <ContactS7luck />}
      {webName === 'riverclub' && <ContactRiverclub />}
      {webName === '4bar88' && <ContactT4bar88 />}
      {webName === 'therich333' && <ContactTherich333 />}
      {webName === 'baza888' && <ContactBaza888 />}
      {webName === 'gm1' && <ContactGm1 />}
      {webName === 'eleven111' && <ContactEleven111 />}
      {webName === 'ezrich' && <ContactEzRich />}
      {webName === 'royal447' && <ContactRoyal447 />}
      {webName === '9goldclub' && <ContactT9goldclub />}
      {webName === 'mr89' && <ContactMr89 />}
      {webName === 'maxnum168' && <ContactMaxnum168 />}
    </Fragment>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default ContactPage
