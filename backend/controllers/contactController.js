import Contact from "../models/contactModel";
// Handle form submission
export const submitContactForm = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, address, message } = req.body;

    // Validation
    if (!fullName || !email || !phoneNumber || !address || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to the database
    const newContact = new Contact({
      fullName,
      email,
      phoneNumber,
      address,
      message
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, address, message } = req.body;

    // Create transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-email-password',  // Your email password (use app password if needed)
      },
    });

    // Mail options to send to yourself (admin)
    const adminMailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@example.com', // Your email to receive form submissions
      subject: 'New Contact Form Submission',
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Address: ${address}
        Message: ${message}
      `,
    };

    // Mail options to send to the client (user)
    const clientMailOptions = {
      from: 'your-email@gmail.com',
      to: email,  // Client's email (from the form)
      subject: 'Thank you for contacting us!',
      text: `
        Hi ${fullName},

        Thank you for getting in touch with us. We are happy that you visited our website and took the time to contact us. 
        We will get back to you as soon as possible.

        Here is a copy of your message:
        --------------------------------
        Message: ${message}

        We look forward to assisting you further!

        Best regards,
        [Your Company Name]
      `,
    };

    // Send email to yourself (admin)
    await transporter.sendMail(adminMailOptions);

    // Send email to the client (user)
    await transporter.sendMail(clientMailOptions);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ message: 'Failed to send emails' });
  }
};

