import Contact from "../models/contactModel.js";
import nodemailer from 'nodemailer';

// Handle form submission
export const submitContactForm = async (req, res) => {
  try {
    const { firstname,lastname, email, message,address,phone } = req.body;

    // Validation
    if (!firstname || !email || !lastname || !message || !address || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to the database
    const newContact = new Contact({
      firstname,
      lastname,
      email,
      message,
      address,
      phone,
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};



export const sendEmail = async (req, res) => {
  try {
    const { firstname, email,lastname, message,address,phone } = req.body;

    // Create transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'eshetieyabibal@gmail.com', 
        pass: 'akgw swpv ajrc kxhi',  
      },
    });

    // Admin email (to you)
    const adminMailOptions = {
      from: 'eshetieyabibal@gmail.com', 
      to: 'eshetieyabibal@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2196F3;">New Contact Form Submission</h2>
          <p><strong>Full Name:</strong> ${firstname}  ${lastname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Phone-Number:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr style="border-top: 1px solid #ddd;">
          <p style="color: #4CAF50;">You have a new potential client!</p>
        </div>
      `,
    };

    // Client email (confirmation to the person who submitted the form)
    const clientMailOptions = {
      from: 'your-email@gmail.com',
      to: email,  
      subject: 'Thank You for Contacting Us!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; background-color: #f0f8ff; border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <h2 style="color: #1e90ff; text-align: center; font-size: 28px; margin-bottom: 20px;">Thank You for Contacting Me!</h2>
          <p style="font-size: 18px;">Hello <strong>${firstname} ${lastname}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.6;">We're thrilled that you've reached out to me. I've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <strong style="font-size: 18px; color: #0066cc;">Your Message:</strong>
            <p style="font-style: italic; margin-top: 10px;">${message}</p>
          </div>
          <hr style="border: none; height: 2px; background-color: #1e90ff; margin: 25px 0;">
          <p style="font-size: 18px; color: #333;">Here's a summary of the information you provided:</p>
          <ul style="list-style-type: none; padding-left: 0; font-size: 16px;">
            <li style="margin-bottom: 10px;"><strong style="color: #0066cc;">Email:</strong> ${email}</li>
            <li style="margin-bottom: 10px;"><strong style="color: #0066cc;">Address:</strong> ${address}</li>
            <li style="margin-bottom: 10px;"><strong style="color: #0066cc;">Phone-Number:</strong> ${phone}</li>
          </ul>
          <p style="font-size: 16px;">If any of this information is incorrect, please let me know.</p>
          <p style="color: #2e8b57; font-size: 18px; font-weight: bold; margin-top: 20px;">Looking forward to helping you further!</p>
          <p style="color: #1e90ff; font-size: 20px; font-weight: bold; margin-top: 20px;">Yab Full Stack Developer</p>
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 10px; margin-top: 20px;">
            <p style="font-size: 18px; color: #333; margin-bottom: 10px;"><strong>Get in touch:</strong></p>
            <p style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> <a href="mailto:eshetieyabibal@gmail.com" style="color: #0066cc; text-decoration: none;">eshetieyabibal@gmail.com</a></p>
          </div>
          <p style="font-size: 16px; color: #666; margin-top: 20px;">Connect with me on social media:</p>
          <div style="margin-top: 15px;">
            <a href="#" style="display: inline-block; margin-right: 15px; padding: 10px 15px; background-color: #3b5998; color: white; text-decoration: none; border-radius: 5px;">Facebook</a>
            <a href="#" style="display: inline-block; margin-right: 15px; padding: 10px 15px; background-color: #1da1f2; color: white; text-decoration: none; border-radius: 5px;">Twitter</a>
            <a href="#" style="display: inline-block; padding: 10px 15px; background-color: #0e76a8; color: white; text-decoration: none; border-radius: 5px;">LinkedIn</a>
          </div>
        </div>
      `,
    };

    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    // Send email to client
    await transporter.sendMail(clientMailOptions);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ message: 'Failed to send emails' });
  }
};


