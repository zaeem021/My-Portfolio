import emailjs from '@emailjs/browser';

// EmailJS Configuration
const SERVICE_ID = 'service_ikuw2of';
const TEMPLATE_ID = 'template_8gd45yv';
const PUBLIC_KEY = 'ri7Tof0v7ck7fGeIv';

/**
 * Send contact form email
 */
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    console.log('Sending email with params:', templateParams);
    console.log('Using Service ID:', SERVICE_ID);
    console.log('Using Template ID:', TEMPLATE_ID);
    console.log('Using Public Key:', PUBLIC_KEY);

    // Use the send method with public key directly (not init)
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY  // Pass public key here instead of using init()
    );

    console.log('✅ Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    console.error('Error details:', {
      status: error.status,
      text: error.text,
      message: error.message
    });

    console.error('');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('Possible issues:');
    console.error('1. Email Service not properly connected in dashboard');
    console.error('2. Template "To Email" field is empty or invalid');
    console.error('3. Service ID, Template ID, or Public Key is wrong');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('');
    console.error('Check your template at:');
    console.error('https://dashboard.emailjs.com/admin/templates/' + TEMPLATE_ID);
    console.error('');
    console.error('Make sure "To Email" field is set to: zaeemrehman433@gmail.com');
    console.error('(NOT {{to_email}} - use the actual email address)');

    throw error;
  }
};
