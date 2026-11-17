import { z } from 'zod';

export const careerSchema = z.object({
   name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
   email: z.string().email({ message: 'Invalid email' }),
   mobile: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
   fileUpload: z
      .any()
      .refine((file) => file instanceof File, { message: 'File is required' })
      .refine((file) => file?.size <= 5 * 1024 * 1024, { message: 'File must be less than 5MB' })
      .refine(
         (file) =>
            [
               'application/pdf',
               'application/msword',
               'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ].includes(file?.type),
         { message: 'Only PDF, DOC, or DOCX files are allowed' }
      ),
});
