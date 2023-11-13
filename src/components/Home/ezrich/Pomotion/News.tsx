import { type FC, Fragment } from 'react'

import { useSession } from 'next-auth/react'

import PageHomeLayout from '../Layouts'

import PromotionNews from '@/components/Shared/Promotion/News'
import PageLayout from '@/layouts'

const PromotionNewsEzRich: FC = () => {
  const { data: session } = useSession()

  return (
    <Fragment>
      {!session?.user ? (
        <PageHomeLayout title="ข่าวสาร" label="ข่าวสาร" back="/promotion">
          <PromotionNews />
        </PageHomeLayout>
      ) : (
        <PageLayout title="ข่าวสาร" label="ข่าวสาร" back="/promotion">
          <PromotionNews />
        </PageLayout>
      )}
    </Fragment>
  )
}

export default PromotionNewsEzRich
