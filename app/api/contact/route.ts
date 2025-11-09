import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Kaikki kentät ovat pakollisia' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Virheellinen sähköpostiosoite' },
        { status: 400 }
      );
    }

    // TODO: Configure email sending
    // For now, we'll use nodemailer with Gmail SMTP
    // You'll need to set up environment variables:
    // - EMAIL_USER: Your Gmail address (Huttunen.jenni@gmail.com)
    // - EMAIL_PASS: App-specific password from Google
    //
    // To generate an app password:
    // 1. Go to Google Account settings
    // 2. Enable 2-Step Verification
    // 3. Generate an App Password at https://myaccount.google.com/apppasswords
    // 4. Add EMAIL_USER and EMAIL_PASS to .env.local

    const nodemailer = require('nodemailer');

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'Huttunen.jenni@gmail.com',
        pass: process.env.EMAIL_PASS || '',
      },
    });

    // Check if email configuration exists
    if (!process.env.EMAIL_PASS) {
      console.log('Contact form submission:', { name, email, message });
      return NextResponse.json(
        {
          error: 'Sähköpostin lähetys ei ole vielä konfiguroitu. Ota yhteyttä suoraan osoitteeseen Huttunen.jenni@gmail.com'
        },
        { status: 503 }
      );
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'Huttunen.jenni@gmail.com',
      replyTo: email,
      subject: `Yhteydenotto verkkosivulta: ${name}`,
      text: `
Uusi yhteydenotto verkkosivulta

Nimi: ${name}
Sähköposti: ${email}

Viesti:
${message}
      `,
      html: `
        <h2>Uusi yhteydenotto verkkosivulta</h2>
        <p><strong>Nimi:</strong> ${name}</p>
        <p><strong>Sähköposti:</strong> <a href="mailto:${email}">${email}</a></p>
        <h3>Viesti:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Viesti lähetetty onnistuneesti' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Viestin lähetys epäonnistui. Yritä uudelleen myöhemmin.' },
      { status: 500 }
    );
  }
}
