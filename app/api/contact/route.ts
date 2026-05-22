import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Semua field wajib diisi.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ahmadfansya660@gmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 12px;">
          <h2 style="color: #6366f1; margin-top: 0;">📩 Pesan Baru dari Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold; width: 100px;">Nama</td>
              <td style="padding: 8px 0; color: #111;">: ${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Email</td>
              <td style="padding: 8px 0; color: #111;">: <a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Subjek</td>
              <td style="padding: 8px 0; color: #111;">: ${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #555; font-weight: bold; margin-bottom: 8px;">Pesan:</p>
          <p style="color: #111; line-height: 1.7; background: #fff; padding: 16px; border-radius: 8px; border: 1px solid #eee;">${message.replace(/\n/g, '<br/>')}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #aaa; font-size: 0.8rem; text-align: center;">Dikirim dari portfolio Fansyah</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Gagal mengirim email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
