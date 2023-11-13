import { Fragment, type FC } from 'react'

import { useSession } from 'next-auth/react'

import PageHomeLayout from '../Layouts'

import PromotionList from '@/components/Shared/Promotion/List'
import PageLayout from '@/layouts'

const PromotionListAutoslot168: FC = () => {
  const { data: session } = useSession()

  return (
    <Fragment>
      {!session?.user ? (
        <PageHomeLayout title="โปรโมชั่น" label="โปรโมชั่น" back="/promotion">
          <PromotionList />
        </PageHomeLayout>
      ) : (
        <PageLayout title="โปรโมชั่น" label="โปรโมชั่น" back="/promotion">
          <PromotionList />
        </PageLayout>
      )}
    </Fragment>
  )
}

export default PromotionListAutoslot168
