import { Fragment, type FC } from 'react'

import { useTranslation } from 'next-i18next'
import { useSession } from 'next-auth/react'

import UserVisitor from '@/components/Home/mk88max/UserVisitor'
import UserLogin from '@/components/Shared/UserLogin'
import PageHomeLayout from '@/components/Home/mk88max/Layouts'
import PageLayout from '@/layouts'

const HomeMk88max: FC = () => {
  const { t } = useTranslation(['common'])
  const { data: session } = useSession()

  return (
    <Fragment>
      {!session?.user ? (
        <PageHomeLayout title="หน้าแรก">
          <UserVisitor />
        </PageHomeLayout>
      ) : (
        <PageLayout title="หน้าแรก">
          <UserLogin />
        </PageLayout>
      )}
    </Fragment>
  )
}

export default HomeMk88max
