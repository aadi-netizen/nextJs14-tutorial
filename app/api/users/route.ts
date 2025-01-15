import { getUsers } from '@/utils/actions'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  // console.log(req)

  // const { searchParams } = new URL(req.url)
  // console.log('searchParams:', searchParams)

  const id = req.nextUrl.searchParams.get('id')
  console.log('id:', id)

  const users = await getUsers()
  // return NextResponse.redirect('/', new URL(req.url))
  return NextResponse.json(users)
}

// post request: create user

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  console.log('body:', body)
  // const user = await createUsers(body)
  const newUser = {
    id: new Date().getTime().toString(),
    firstName: body.firstName,
    lastName: body.lastName,
  }
  return NextResponse.json(newUser)
}
