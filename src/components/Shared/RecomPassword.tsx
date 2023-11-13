import { type FC } from 'react'

import { CardDetail } from '@/styles/shared/shared.styled'

const RecomPassword: FC = () => {
  return (
    <CardDetail className="mb-4">
      <ul className="list-disc">
        <li className="mb-1 ml-6 text-sm">มีความยาวอย่างน้อย 8-15 ตัวอักษร</li>
        <li className="mb-1 ml-6 text-sm">ตัวอักษรพิมพ์เล็ก (a-z) อย่างน้อย 1 ตัว</li>
        <li className="mb-1 ml-6 text-sm">ตัวอักษรพิมพ์ใหญ่ (A-Z) อย่างน้อย 1 ตัว</li>
        <li className="mb-1 ml-6 text-sm">ตัวเลข (0-9) อย่างน้อย 1 ตัว</li>
        <li className="mb-1 ml-6 text-sm">เช่น En753753</li>
      </ul>
    </CardDetail>
  )
}

export default RecomPassword
