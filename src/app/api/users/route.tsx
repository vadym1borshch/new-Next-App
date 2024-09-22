import { NextRequest, NextResponse } from 'next/server'
import schema from '@/app/api/users/schema'
import prisma from '../../../../prisma/client'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users, {
    status: 200,
  })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const validate = schema.safeParse(body)
  if (!validate.success) {
    return NextResponse.json(validate.error.errors, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if (user) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  })
  return NextResponse.json(newUser)
}
