import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
const RECEIVER_EMAIL = 'ryanmatte55@gmail.com';

async function verifyRecaptcha(token: string) {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
  });
  return res.json();
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const details = formData.get('details') as string;
  const recaptchaToken = formData.get('recaptchaToken') as string;
  const image = formData.get('image') as File | null;

  // Verify recaptcha
  const recaptchaRes = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaRes.success) {
    return NextResponse.json({ error: 'Recaptcha failed' }, { status: 400 });
  }

  // Setup Nodemailer transporter (using Gmail as example)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Prepare mail options with HTML formatting
  const mailOptions: any = {
    from: process.env.EMAIL_USER,
    to: RECEIVER_EMAIL,
    subject: `Incoming Quote from ${name}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #f7f9fc; padding: 32px;">
        <div style="max-width: 500px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); border: 1px solid #e3e8f0;">
          <div style="background: #4964a6; color: #fff; padding: 18px 24px; border-top-left-radius: 12px; border-top-right-radius: 12px;">
            <h2 style="margin: 0; font-size: 1.4rem; font-weight: 700; letter-spacing: 1px;">Incoming Quote from ${name}</h2>
          </div>
          <div style="padding: 24px;">
            <p style="font-size: 1.1rem; margin-bottom: 18px; color: #222;">
              <strong>${name}</strong> has requested a quote with the following details:
            </p>
            <table style="width: 100%; border-collapse: collapse; font-size: 1rem;">
              <tr>
                <td style="padding: 8px 0; color: #4964a6; font-weight: 600; width: 120px;">Email:</td>
                <td style="padding: 8px 0; color: #222;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4964a6; font-weight: 600;">Phone:</td>
                <td style="padding: 8px 0; color: #222;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4964a6; font-weight: 600;">Details:</td>
                <td style="padding: 8px 0; color: #222;">${details}</td>
              </tr>
            </table>
            ${image ? `<p style='margin-top:18px; color:#4964a6;'><strong>Attachment:</strong> ${image.name} (see attached)</p>` : ""}
          </div>
        </div>
      </div>
    `,
    attachments: [],
  };

  if (image) {
    const buffer = Buffer.from(await image.arrayBuffer());
    mailOptions.attachments.push({
      filename: image.name,
      content: buffer,
      contentType: image.type,
    });
  }

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
