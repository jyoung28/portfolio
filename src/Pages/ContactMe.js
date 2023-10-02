import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contactme.css"
import { useTypingEffect } from '../Components/TypingEffect';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zchnss4', 'template_km2r3cj', form.current, 'wXlesq4c86fn09dEA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return ( // put a wrapper div to style this
    <div className='form-wrapper'>
        <h1 className='title'>{useTypingEffect("Contact Me",100)}</h1>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" className="submit" value="Send" />
        </form>

    </div>
  );
};


export default ContactMe