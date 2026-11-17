import { z } from 'zod';

export const contactSchema = z.object({
   name: z.string().min(3, { message: 'Name is required' }),
   email: z.string().email({ message: 'Invalid email' }),
   mobile: z.string().min(10, { message: 'Phone number is required' }),
   service: z.string().min(3, { message: 'Service is required' }),
   message: z.string().min(5, { message: 'Message is required' })
});
