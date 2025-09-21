// src/services/email.js
import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {
  const userID = 'elyzabethperez.s@gmail.com'; // Tu Public Key de EmailJS
  const serviceID = 'service_xb7a42h'; // Tu Service ID de EmailJS
  const templateID = 'template_hd57w96'; // Tu Template ID de EmailJS

  return emailjs.send(serviceID, templateID, templateParams, userID);
};