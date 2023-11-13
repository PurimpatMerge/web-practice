import { Fragment } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import HomeMk88max from '@/components/Home/mk88max'
import HomeAutowin from '@/components/Home/autowin'
import HomeAutoslot168 from '@/components/Home/autoslot168'
import HomeUk888club from '@/components/Home/uk888club'
import HomeS7luck from '@/components/Home/s7luck'
import HomeRiverclub from '@/components/Home/riverclub'
import HomeT4bar88 from '@/components/Home/4bar88'
import HomeEzRich from '@/components/Home/ezrich'
import HomeTherich333 from '@/components/Home/therich333'
import HomeBaza888 from '@/components/Home/baza888'
import HomeGm1 from '@/components/Home/gm1'
import HomeEleven111 from '@/components/Home/eleven111'
import HomeRoyal447 from '@/components/Home/royal447'
import HomeT9goldclub from '@/components/Home/9goldclub'
import HomeMr89 from '@/components/Home/mr89'
import HomeMaxnum168 from '@/components/Home/maxnum168'

const IndexPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <Fragment>
      {webName === 'mk88max' && <HomeMk88max />}
      {webName === 'autowin' && <HomeAutowin />}
      {webName === 'autoslot168' && <HomeAutoslot168 />}
      {webName === 'uk888club' && <HomeUk888club />}
      {webName === 's7luck' && <HomeS7luck />}
      {webName === 'riverclub' && <HomeRiverclub />}
      {webName === '4bar88' && <HomeT4bar88 />}
      {webName === 'therich333' && <HomeTherich333 />}
      {webName === 'baza888' && <HomeBaza888 />}
      {webName === 'gm1' && <HomeGm1 />}
      {webName === 'eleven111' && <HomeEleven111 />}
      {webName === 'ezrich' && <HomeEzRich />}
      {webName === 'royal447' && <HomeRoyal447 />}
      {webName === '9goldclub' && <HomeT9goldclub />}
      {webName === 'mr89' && <HomeMr89 />}
      {webName === 'maxnum168' && <HomeMaxnum168 />}
    </Fragment>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default IndexPage
