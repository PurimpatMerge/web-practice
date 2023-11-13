import { type FC, Fragment } from 'react'

import { useSession } from 'next-auth/react'

import UserVisitor from '@/components/Home/ezrich/UserVisitor'
import UserLogin from '@/components/Shared/UserLogin'
import PageHomeLayout from '@/components/Home/ezrich/Layouts'
import PageLayout from '@/layouts'

const HomeEzRich: FC = () => {
  const { data: session } = useSession()

  return (
    <Fragment>
      {!session?.user ? (
        <PageHomeLayout noMarginTop title="หน้าแรก">
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

export default HomeEzRich
