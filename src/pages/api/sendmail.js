import nodemailer from 'nodemailer';

const sendMailHandler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `You have received a new message from ${name} (${email}): ${message}`,
    });

    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ status: 'Error', message: error.message });
  }
};

export default sendMailHandler;
