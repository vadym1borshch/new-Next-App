import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/authOptions'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <div>HOME</div>
      <div>Hello {session && session.user?.name}</div>
    </div>
  )
}
