import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  specialty: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    console.log("KEY LOADED:", !!process.env.RESEND_API_KEY);
    const data: EmailData = await request.json();

    console.log("REQUEST BODY:", data);

    // Validare
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Date lipsă: nume, email și telefon sunt obligatorii' },
        { status: 400 }
      );
    }

    // Verifică dacă avem API key pentru Resend
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // În mod demo, logăm datele
      console.log('=== Programare nouă (DEMO) ===');
      console.log('Nume:', data.name);
      console.log('Email:', data.email);
      console.log('Telefon:', data.phone);
      console.log('Specialitate:', data.specialty || 'Nu a fost selectată');
      console.log('Mesaj:', data.message || 'Nu a fost trimis');
      console.log('=============================');

      return NextResponse.json({
        success: true,
        message: 'Programarea a fost înregistrată'
      });
    }

    // Trimite email cu Resend
    const resend = new Resend(resendApiKey);

    const { data: emailData, error } = await resend.emails.send({
      from: 'Ortho X-Ray Clinic <no-reply@orthoxray.ro>',
      to: ['contact@orthoxray.ro'],
      subject: `Programare nouă de la ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Programare nouă - Ortho X-Ray Clinic
          </h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-bottom: 15px;">Informații pacient:</h3>

            <p style="margin: 8px 0;">
              <strong style="color: #64748b;">Nume:</strong>
              <span style="color: #1e293b;"> ${data.name}</span>
            </p>

            <p style="margin: 8px 0;">
              <strong style="color: #64748b;">Email:</strong>
              <span style="color: #1e293b;"> ${data.email}</span>
            </p>

            <p style="margin: 8px 0;">
              <strong style="color: #64748b;">Telefon:</strong>
              <span style="color: #1e293b;"> ${data.phone}</span>
            </p>

            <p style="margin: 8px 0;">
              <strong style="color: #64748b;">Specialitate:</strong>
              <span style="color: #1e293b;"> ${data.specialty || 'Nu a fost selectată'}</span>
            </p>
          </div>

          ${data.message ? `
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-bottom: 10px;">Mesaj:</h3>
            <p style="color: #1e293b; white-space: pre-wrap;">${data.message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
            <p>Acest email a fost trimis automat din formularul de programare de pe website.</p>
          </div>
        </div>
      `,
      text: `
Programare nouă - Ortho X-Ray Clinic

Nume: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}
Specialitate: ${data.specialty || 'Nu a fost selectată'}

${data.message ? `Mesaj: ${data.message}` : ''}
      `,
    });

    if (error) {
      console.error('Eroare Resend:', error);
      return NextResponse.json(
        { error: 'A apărut o eroare la trimiterea emailului.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Programarea a fost trimisă cu succes'
    });

  } catch (error) {
    console.error('Eroare la trimiterea programării:', error);
    return NextResponse.json(
      { error: 'A apărut o eroare. Te rugăm să încerci din nou.' },
      { status: 500 }
    );
  }
}
