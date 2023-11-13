import numeral from 'numeral'
import { BigNumber } from 'bignumber.js'
import dayjs from 'dayjs'
import { message } from 'antd'

/**
 * Format number with numeral.js
 *
 * formatNumber(10)
 * fixed = true
 * - 10.00
 *
 * formatNumber(10, false)
 * fixed = false
 * - 10
 *
 * @returns string
 */
export const formatNumber = (value: string | number, fixed = true) => {
  const number = BigNumber(value)
  if (number.isGreaterThan(0) && number.isLessThan(0.01)) return number.toFixed()
  if (number.isGreaterThan(1000000000)) return numeral(value).format(`0,0a`)
  if (fixed) return numeral(value).format(`0,0.00`)
  return numeral(value).format(`0,0.[00]`)
}

/**
 * Format Date with dayjs
 *
 * @returns string
 */
export const formatDate = (value: Date | string | number, format = 'DD/MM/YYYY - HH:mm') => {
  return dayjs(value).format(format)
}

/**
 * Parse short string
 *
 * @param string
 * @param length
 * @returns
 */
export function shortenString(string: string, length: number): string {
  if (!string) return ''
  if (length < 5) return string
  if (string.length <= length) return string
  return string.slice(0, 4) + '...' + string.slice(string.length - length + 5, string.length)
}

export function calculateRemainingTime(day: number, month: number, year: number) {
  const currentDateTime = new Date()
  const targetDateTime = new Date(year, month - 1, day)

  const remainingMillis = targetDateTime.getTime() - currentDateTime.getTime()

  const remainingDays = Math.floor(remainingMillis / (1000 * 60 * 60 * 24))
  const remainingHours = Math.floor((remainingMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const remainingMinutes = Math.floor((remainingMillis % (1000 * 60 * 60)) / (1000 * 60))
  const remainingSeconds = Math.floor((remainingMillis % (1000 * 60)) / 1000)
  if (remainingDays && remainingHours && remainingMinutes && remainingSeconds < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: remainingDays,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  }
}

/**
 * Parse convert index page
 *
 * @param number
 * @param number
 * @param number
 * @returns number
 */
export function covertIndexPage(index: number, page: number, pageSize: number): number {
  return (page - 1) * pageSize + index + 1
}

export function formatPhoneNumber(phone: string): string {
  if (!phone) return ''
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return match[1] + '-' + match[2] + '-' + match[3]
  }
  return phone
}

export const copyText = (id: string, success: string) => {
  const copyText = document.getElementById(id)
  if (copyText.innerText) {
    navigator.clipboard
      .writeText(copyText.innerText)
      .then(() => {
        message.success(success)
      })
      .catch((error) => {
        console.error('เกิดข้อผิดพลาดในการคัดลอก:', error)
      })
  }
}
