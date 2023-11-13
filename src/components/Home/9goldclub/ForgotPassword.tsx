import type { FC } from 'react'

import PageHomeLayout from './Layouts'

import ForgotPassword from '@/components/Shared/ForgotPassword'

const ForgotPasswordT9goldclub: FC = () => {
  return (
    <PageHomeLayout title="ลืมรหัสผ่าน" label="ลืมรหัสผ่าน" bgFix={true}>
      <ForgotPassword />
    </PageHomeLayout>
  )
}

export default ForgotPasswordT9goldclub
