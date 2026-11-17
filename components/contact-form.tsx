'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema } from '@/schema/contact-schema';

export default function ContactForm() {
   const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
         name: '',
         email: '',
         mobile: '',
         service: '',
         message: '',
      },
   });

   async function onSubmit(values: z.infer<typeof contactSchema>) {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('mobile', values.mobile);
      formData.append('service', values.service);
      formData.append('notes', values.message);

      try {
         const response = await fetch('/mail_handler.php', {
            method: 'POST',
            body: formData,
         });

         if (response.ok) {
            alert('Your message has been sent successfully!');
         } else {
            alert('Failed to send your message. Please try again.');
         }
      } catch (error) {
         console.error('Error:', error);
         alert('An error occurred while sending your message.');
      }
   }

   return (
      <div className="w-full">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input placeholder="Enter your name" {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input placeholder="Enter your email" {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input type="tel" placeholder="Enter your phone" {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input placeholder="Enter your service" {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Textarea placeholder="Enter your message" {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <div className="pt-2">
                  <Button type="submit">Submit</Button>
               </div>
            </form>
         </Form>
      </div>
   );
}
