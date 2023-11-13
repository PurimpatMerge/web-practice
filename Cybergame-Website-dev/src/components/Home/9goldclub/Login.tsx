import type { FC } from 'react'

import PageHomeLayout from './Layouts'

import Login from '@/components/Shared/Login'

const LoginT9goldclub: FC = () => {
  return (
    <PageHomeLayout title="เข้าสู่ระบบ" label="เข้าสู่ระบบ" bgFix={true}>
      <Login />
    </PageHomeLayout>
  )
}

export default LoginT9goldclub
