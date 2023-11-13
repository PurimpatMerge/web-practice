import type { FC } from 'react'

import PageHomeLayout from './Layouts'

import ForgotPassword from '@/components/Shared/ForgotPassword'

const ForgotPasswordEzRich: FC = () => {
  return (
    <PageHomeLayout title="ลืมรหัสผ่าน" label="ลืมรหัสผ่าน">
      <ForgotPassword />
    </PageHomeLayout>
  )
}

export default ForgotPasswordEzRich
