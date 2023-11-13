import { Fragment } from 'react'

import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import { makeServerSideProps } from '@/libs/getServerSide'
import { DEFAULT_LOCALE } from '@/configs/locale'
import PromotionListMk88max from '@/components/Home/mk88max/Pomotion/List'
import PromotionListAutowin from '@/components/Home/autowin/Pomotion/List'
import PromotionListAutoslot168 from '@/components/Home/autoslot168/Pomotion/List'
import PromotionListUk888club from '@/components/Home/uk888club/Pomotion/List'
import PromotionListS7luck from '@/components/Home/s7luck/Pomotion/List'
import PromotionListRiverclub from '@/components/Home/riverclub/Pomotion/List'
import PromotionListT4bar88 from '@/components/Home/4bar88/Pomotion/List'
import PromotionListTherich333 from '@/components/Home/therich333/Pomotion/List'
import PromotionListBaza888 from '@/components/Home/baza888/Pomotion/List'
import PromotionListGm1 from '@/components/Home/gm1/Pomotion/List'
import PromotionListEleven111 from '@/components/Home/eleven111/Pomotion/List'
import PromotionListEzRich from '@/components/Home/ezrich/Pomotion/List'
import PromotionListRoyal447 from '@/components/Home/royal447/Pomotion/List'
import PromotionListT9goldclub from '@/components/Home/9goldclub/Pomotion/List'
import PromotionListMr89 from '@/components/Home/mr89/Pomotion/List'
import PromotionListMaxnum168 from '@/components/Home/maxnum168/Pomotion/List'

const PromotionListPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  const webName = process.env.NEXT_PUBLIC_WEB_NAME

  return (
    <Fragment>
      {webName === 'mk88max' && <PromotionListMk88max />}
      {webName === 'autowin' && <PromotionListAutowin />}
      {webName === 'autoslot168' && <PromotionListAutoslot168 />}
      {webName === 'uk888club' && <PromotionListUk888club />}
      {webName === 's7luck' && <PromotionListS7luck />}
      {webName === 'riverclub' && <PromotionListRiverclub />}
      {webName === '4bar88' && <PromotionListT4bar88 />}
      {webName === 'therich333' && <PromotionListTherich333 />}
      {webName === 'baza888' && <PromotionListBaza888 />}
      {webName === 'gm1' && <PromotionListGm1 />}
      {webName === 'eleven111' && <PromotionListEleven111 />}
      {webName === 'ezrich' && <PromotionListEzRich />}
      {webName === 'royal447' && <PromotionListRoyal447 />}
      {webName === '9goldclub' && <PromotionListT9goldclub />}
      {webName === 'mr89' && <PromotionListMr89 />}
      {webName === 'maxnum168' && <PromotionListMaxnum168 />}
    </Fragment>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default PromotionListPage
