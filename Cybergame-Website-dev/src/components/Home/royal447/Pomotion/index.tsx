import { Fragment, type FC } from 'react'

import { useSession } from 'next-auth/react'

import PageHomeLayout from '../Layouts'

import Promotion from '@/components/Shared/Promotion'
import PageLayout from '@/layouts'

const PromotionRoyal447: FC = () => {
  const { data: session } = useSession()

  return (
    <Fragment>
      {!session?.user ? (
        <PageHomeLayout title="โปรโมชั่น" label="โปรโมชั่น">
          <Promotion />
        </PageHomeLayout>
      ) : (
        <PageLayout title="โปรโมชั่น" label="โปรโมชั่น">
          <Promotion />
        </PageLayout>
      )}
    </Fragment>
  )
}

export default PromotionRoyal447
