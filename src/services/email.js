// src/services/email.js
import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {
  const userID = 'YOUR_USER_ID'; // Reemplaza con tu User ID de EmailJS
  const serviceID = 'YOUR_SERVICE_ID'; // Reemplaza con tu Service ID de EmailJS
  const templateID = 'YOUR_TEMPLATE_ID'; // Reemplaza con tu Template ID de EmailJS

  return emailjs.send(serviceID, templateID, templateParams, userID);
};