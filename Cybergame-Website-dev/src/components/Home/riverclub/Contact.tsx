import { Fragment, type FC } from 'react'

import { useSession } from 'next-auth/react'

import PageHomeLayout from './Layouts'

import Contact from '@/components/Shared/Contact'
import PageLayout from '@/layouts'

const ContactRiverclub: FC = () => {
  const { data: session } = useSession()

  return (
    <Fragment>
      {!session?.user ? (
        <PageHomeLayout title="ติดต่อเรา" label="ติดต่อเรา">
          <Contact />
        </PageHomeLayout>
      ) : (
        <PageLayout title="ติดต่อเรา" label="ติดต่อเรา">
          <Contact />
        </PageLayout>
      )}
    </Fragment>
  )
}

export default ContactRiverclub
