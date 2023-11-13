import type { FC } from 'react'

import PageHomeLayout from './Layouts'

import Register from '@/components/Shared/Register'

const RegisterEleven111: FC = () => {
  return (
    <PageHomeLayout title="สมัครสมาชิก" label="สมัครสมาชิก">
      <Register />
    </PageHomeLayout>
  )
}

export default RegisterEleven111
