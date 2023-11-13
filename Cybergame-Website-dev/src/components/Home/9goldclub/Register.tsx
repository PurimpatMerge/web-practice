import type { FC } from 'react'

import PageHomeLayout from './Layouts'

import Register from '@/components/Shared/Register'

const RegisterT9goldclub: FC = () => {
  return (
    <PageHomeLayout title="สมัครสมาชิก" label="สมัครสมาชิก" bgFix={true}>
      <Register />
    </PageHomeLayout>
  )
}

export default RegisterT9goldclub
