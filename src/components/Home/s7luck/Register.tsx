import type { FC } from 'react'

import PageHomeLayout from './Layouts'

import Register from '@/components/Shared/Register'

const RegisterS7luck: FC = () => {
  return (
    <PageHomeLayout title="สมัครสมาชิก" label="สมัครสมาชิก">
      <Register />
    </PageHomeLayout>
  )
}

export default RegisterS7luck
