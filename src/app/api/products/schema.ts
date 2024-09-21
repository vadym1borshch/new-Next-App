import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3),
  price: z.number().positive().min(1).max(100),
})
export default schema
