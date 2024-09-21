import { NextRequest, NextResponse } from 'next/server'
import schema from '@/app/api/products/schema'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GET(req: NextRequest) {
  //fetch data fom db
  //if not found, return 404 error
  //else return data
  return NextResponse.json(
    [
      { id: 1, name: 'Milk', price: 2 },
      { id: 2, name: 'Bread', price: 3 },
    ],
    { status: 200 }
  )
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  //validate
  //if invalid, return 400
  //else, return data as NextResponse.json()
  const validate = schema.safeParse(body)
  if (!validate.success) {
    return NextResponse.json(
      validate.error.errors.map((e) => e.message),
      { status: 400 }
    )
  }
  return NextResponse.json(
    {
      id: 3,
      name: body.name,
      price: body.price,
    },
    { status: 200 }
  )
}
