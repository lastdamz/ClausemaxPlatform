import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      // Submit the form data
      console.log('Form submitted:', formData);
      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <form className='flex flex-col text-white font-poppins' onSubmit={handleSubmit}>
      <div className="form-group flex">
        <div className='flex flex-col p-2 gap-1 w-full'>
          <label className='ml-2'>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='e.g John Doe'
            className='h-14 bg-[#141515] rounded-xl p-4 text-white w-full'
          />
          {errors.name && <span className='text-red-500'>{errors.name}</span>}
        </div>

        <div className='flex flex-col p-2 gap-1 w-full'>
          <label className='ml-2'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='e.g JohnDoe@gmail.com'
            className='h-14 bg-[#141515] rounded-xl p-4 text-white w-full'
          />
          {errors.email && <span className='text-red-500'>{errors.email}</span>}
        </div>
      </div>

      <div className="form-group flex">
        <div className='flex flex-col p-2 gap-1 w-full'>
          <label className='ml-2'>Phone Number</label>
          <input
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='e.g +263 774 086 344'
            className='h-14 bg-[#141515] rounded-xl p-4 text-white w-full'
          />
          {errors.phone && <span className='text-red-500'>{errors.phone}</span>}
        </div>

        <div className='flex flex-col p-2 gap-1 w-full'>
          <label className='ml-2'>Company</label>
          <input
            type='text'
            name='company'
            value={formData.company}
            onChange={handleChange}
            placeholder='e.g Clausemax Platform'
            className='h-14 bg-[#141515] rounded-xl p-4 text-white w-full'
          />
          {errors.company && <span className='text-red-500'>{errors.company}</span>}
        </div>
      </div>

      <div className='form-group flex flex-col p-2 gap-1 w-full'>
        <label className='ml-2'>Leave Us a Message</label>
        <textarea
          rows={8}
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Write your message here..'
          className='bg-[#141515] rounded-xl p-4 text-white w-full'
        />
        {errors.message && <span className='text-red-500'>{errors.message}</span>}
      </div>

      <button
        type='submit'
        className=' px-2 rounded-xl bg-[#D69232] text-black h-12 md:w-1/3 w-full mt-4 md:ml-4 hover:text-white hover:bg-explore hover:scale-110 transition-all '>
        Get in touch
      </button>
    </form>
  );
}

export default ContactForm;