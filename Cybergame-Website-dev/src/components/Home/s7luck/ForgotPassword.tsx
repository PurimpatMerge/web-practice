import type { FC } from 'react'

import PageHomeLayout from './Layouts'

import ForgotPassword from '@/components/Shared/ForgotPassword'

const ForgotPasswordS7luck: FC = () => {
  return (
    <PageHomeLayout title="ลืมรหัสผ่าน" label="ลืมรหัสผ่าน">
      <ForgotPassword />
    </PageHomeLayout>
  )
}

export default ForgotPasswordS7luck
