import { Fragment } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import { makeServerSideProps } from '@/libs/getServerSide'
import { DEFAULT_LOCALE } from '@/configs/locale'
import PromotionNewsMk88max from '@/components/Home/mk88max/Pomotion/News'
import PromotionNewsAutowin from '@/components/Home/autowin/Pomotion/News'
import PromotionNewsAutoslot168 from '@/components/Home/autoslot168/Pomotion/News'
import PromotionNewsUk888club from '@/components/Home/uk888club/Pomotion/News'
import PromotionNewsS7luck from '@/components/Home/s7luck/Pomotion/News'
import PromotionNewsRiverclub from '@/components/Home/riverclub/Pomotion/News'
import PromotionNewsT4bar88 from '@/components/Home/4bar88/Pomotion/News'
import PromotionNewsTherich333 from '@/components/Home/therich333/Pomotion/News'
import PromotionNewsBaza888 from '@/components/Home/baza888/Pomotion/News'
import PromotionNewsGm1 from '@/components/Home/gm1/Pomotion/News'
import PromotionNewsEleven111 from '@/components/Home/eleven111/Pomotion/News'
import PromotionNewsEzRich from '@/components/Home/ezrich/Pomotion/News'
import PromotionNewsRoyal447 from '@/components/Home/royal447/Pomotion/News'
import PromotionNewsT9goldclub from '@/components/Home/9goldclub/Pomotion/News'
import PromotionNewsMr89 from '@/components/Home/mr89/Pomotion/News'
import PromotionNewsMaxnum168 from '@/components/Home/maxnum168/Pomotion/News'

const PromotionNewsPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <Fragment>
      {webName === 'mk88max' && <PromotionNewsMk88max />}
      {webName === 'autowin' && <PromotionNewsAutowin />}
      {webName === 'autoslot168' && <PromotionNewsAutoslot168 />}
      {webName === 'uk888club' && <PromotionNewsUk888club />}
      {webName === 's7luck' && <PromotionNewsS7luck />}
      {webName === 'riverclub' && <PromotionNewsRiverclub />}
      {webName === '4bar88' && <PromotionNewsT4bar88 />}
      {webName === 'therich333' && <PromotionNewsTherich333 />}
      {webName === 'baza888' && <PromotionNewsBaza888 />}
      {webName === 'gm1' && <PromotionNewsGm1 />}
      {webName === 'eleven111' && <PromotionNewsEleven111 />}
      {webName === 'ezrich' && <PromotionNewsEzRich />}
      {webName === 'royal447' && <PromotionNewsRoyal447 />}
      {webName === '9goldclub' && <PromotionNewsT9goldclub />}
      {webName === 'mr89' && <PromotionNewsMr89 />}
      {webName === 'maxnum168' && <PromotionNewsMaxnum168 />}
    </Fragment>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default PromotionNewsPage
