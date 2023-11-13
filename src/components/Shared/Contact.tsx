import type { FC } from 'react'

import { useTranslation } from 'next-i18next'
import { useQuery } from '@tanstack/react-query'

import { WebService } from '@/services'
import { ContactBox } from '@/styles/shared/contact.styled'

const Contact: FC = () => {
  const { t } = useTranslation(['common'])

  // _Query
  const { data: webLine } = useQuery(['web-line'], () => WebService.webLine())

  return (
    <div className="container mx-auto">
      <ContactBox onClick={() => window.open(webLine?.urlLine)} className="mx-auto w-full sm:w-96">
        <p>Line ID : {webLine?.idLine}</p>
      </ContactBox>
    </div>
  )
}

export default Contact
