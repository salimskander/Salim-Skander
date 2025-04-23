import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'dns';
import { promisify } from 'util';

// Promisify DNS functions
const resolveMx = promisify(dns.resolveMx);

// Fonction pour vérifier si un email existe
async function isEmailValid(email: string): Promise<boolean> {
  try {
    // Vérifier le format de base avec regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    // Extraire le domaine de l'email
    const domain = email.split('@')[1];
    
    // Vérifier si le domaine a des enregistrements MX valides
    const mxRecords = await resolveMx(domain);
    
    // Si aucun enregistrement MX n'est trouvé, l'email est probablement invalide
    return mxRecords.length > 0;
  } catch (error) {
    console.error('Erreur lors de la validation de l\'email:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // Récupérer les données du formulaire
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Vérifier que toutes les données nécessaires sont présentes
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Le nom, l\'email et le message sont requis' },
        { status: 400 }
      );
    }

    // Vérifier si l'email est valide
    const isValid = await isEmailValid(email);
    if (!isValid) {
      return NextResponse.json(
        { error: 'L\'adresse email fournie semble invalide ou inexistante' },
        { status: 400 }
      );
    }

    // Configurer le transporteur d'email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configurer le contenu de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sm.infomail17@gmail.com',
      subject: `PORTFOLIO - ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Téléphone: ${phone || 'Non fourni'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>Message de "${name}" via portfolio</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Contenu:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
} 