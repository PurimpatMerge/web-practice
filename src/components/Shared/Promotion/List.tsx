import type { FC } from 'react'

import { useTranslation } from 'next-i18next'

import PageLayout from '@/layouts'

const PromotionList: FC = () => {
  const { t } = useTranslation(['common'])

  return (
    <div className="container mx-auto">
      <p className="text-center">ยังไม่มีข้อมูล</p>
    </div>
  )
}

export default PromotionList
