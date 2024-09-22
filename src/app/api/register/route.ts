import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '../../../../prisma/client'
import bcrypt from 'bcrypt'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  name: z.string().min(3),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const validate = schema.safeParse(body)

  if (!validate.success) {
    return NextResponse.json({ error: validate.error.errors }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if (user) {
    return NextResponse.json({ error: 'user already exist' }, { status: 400 })
  }

  const hashPassword = await bcrypt.hash(body.password, 10)

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword: hashPassword,
      name: body.name,
    },
  })

  return NextResponse.json({ email: newUser.email })
}
