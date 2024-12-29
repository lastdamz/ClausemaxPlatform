import React from 'react';
import { ContactCard } from "../components/Cards";
import { ContactForm } from "../components/Forms";

function Contact() {
  return (
    <div className='flex flex-wrap justify-between items-center w-full gap-8 mx-auto md:flex-row flex-col md:p-8'>
      <div className='flex-1 w-full'>
        <ContactForm />
      </div>
      <div className='flex-1 w-full'>
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;