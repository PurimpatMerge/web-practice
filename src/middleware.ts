import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(async function middleware(req) {
  const token = req?.nextauth?.token?.profile
  if (!token) {
    return NextResponse.redirect('/login')
  }
  return NextResponse.next()
})

export const config = {
  matcher: [
    '/account/:path*',
    '/activity/:path*',
    '/affiliate',
    '/deposit/:path*',
    '/withdrawal',
    '/transaction-history',
    '/transfer-history',
  ],
}
