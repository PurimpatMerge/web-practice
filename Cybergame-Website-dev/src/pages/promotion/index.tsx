import React, { Fragment } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import { makeServerSideProps } from '@/libs/getServerSide'
import { DEFAULT_LOCALE } from '@/configs/locale'
import PromotionMk88max from '@/components/Home/mk88max/Pomotion'
import PromotionAutowin from '@/components/Home/autowin/Pomotion'
import PromotionAutoslot168 from '@/components/Home/autoslot168/Pomotion'
import PromotionUk888club from '@/components/Home/uk888club/Pomotion'
import PromotionS7luck from '@/components/Home/s7luck/Pomotion'
import PromotionRiverclub from '@/components/Home/riverclub/Pomotion'
import PromotionT4bar88 from '@/components/Home/4bar88/Pomotion'
import PromotionTherich333 from '@/components/Home/therich333/Pomotion'
import PromotionBaza888 from '@/components/Home/baza888/Pomotion'
import PromotionGm1 from '@/components/Home/gm1/Pomotion'
import PromotionEleven111 from '@/components/Home/eleven111/Pomotion'
import PromotionEzRich from '@/components/Home/ezrich/Pomotion'
import PromotionRoyal447 from '@/components/Home/royal447/Pomotion'
import PromotionT9goldclub from '@/components/Home/9goldclub/Pomotion'
import PromotionMr89 from '@/components/Home/mr89/Pomotion'
import PromotionMaxnum168 from '@/components/Home/maxnum168/Pomotion'

const PromotionNewsPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <Fragment>
      {webName === 'mk88max' && <PromotionMk88max />}
      {webName === 'autowin' && <PromotionAutowin />}
      {webName === 'autoslot168' && <PromotionAutoslot168 />}
      {webName === 'uk888club' && <PromotionUk888club />}
      {webName === 's7luck' && <PromotionS7luck />}
      {webName === 'riverclub' && <PromotionRiverclub />}
      {webName === '4bar88' && <PromotionT4bar88 />}
      {webName === 'therich333' && <PromotionTherich333 />}
      {webName === 'baza888' && <PromotionBaza888 />}
      {webName === 'gm1' && <PromotionGm1 />}
      {webName === 'eleven111' && <PromotionEleven111 />}
      {webName === 'ezrich' && <PromotionEzRich />}
      {webName === 'royal447' && <PromotionRoyal447 />}
      {webName === '9goldclub' && <PromotionT9goldclub />}
      {webName === 'mr89' && <PromotionMr89 />}
      {webName === 'maxnum168' && <PromotionMaxnum168 />}
    </Fragment>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default PromotionNewsPage
