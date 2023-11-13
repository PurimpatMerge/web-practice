import type { Dayjs } from 'dayjs'

export const validateBirthDate = (_: unknown, value: Dayjs) => {
  // if (value && value.isAfter(moment().subtract(18, 'years'))) {
  //   return Promise.reject('คุณต้องมีอายุมากกว่า 18 ปี')
  // }
  return Promise.resolve()
}

export const validatePhoneNumber = async (_: unknown, value: string) => {
  const phoneNumberRegex = /^\d{10}$/
  if (!value) {
    throw new Error('กรุณากรอกเบอร์โทรศัพท์')
  }
  if (!phoneNumberRegex.test(value)) {
    throw new Error('ตัวเลข 10 หลัก')
  }
}

export const validatePassword = (_: unknown, value: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  if (!value) {
    return Promise.reject('กรุณากรอกรหัสผ่าน')
  }
  if (!passwordRegex.test(value)) {
    return Promise.reject('กรุณากรอกรหัสผ่านตามคำแนะนำ')
  }
  return Promise.resolve()
}
