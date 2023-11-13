import type { FC } from 'react'

import PageHomeLayout from './Layouts'

import Login from '@/components/Shared/Login'

const LoginS7luck: FC = () => {
  return (
    <PageHomeLayout title="เข้าสู่ระบบ" label="เข้าสู่ระบบ">
      <Login />
    </PageHomeLayout>
  )
}

export default LoginS7luck
