import ContactForm from '@/components/contact-form';
import React from 'react';

export default function ContactPage() {
   return (
      <section className="pt-28 bg-white">
         <div className="max-w-xl flex items-center px-8 justify-center mx-auto py-10">
            <ContactForm />
         </div>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25148.172765078372!2d75.78032571086176!3d11.27289484158769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65937a8331625%3A0x1b95083acd6b3d1a!2sAdhouse%20Advertising!5e1!3m2!1sen!2sin!4v1718797871632!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            className="w-full"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
   );
}
