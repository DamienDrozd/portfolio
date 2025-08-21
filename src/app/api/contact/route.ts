import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Option 1: Utilisation d'un service email comme Resend (recommandé)
    // Vous pouvez décommenter et configurer cette option
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <noreply@votre-domaine.com>',
      to: ['damien.drozd@icloud.com'],
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFC300; border-bottom: 2px solid #FFC300; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000814; margin-top: 0;">Informations du contact :</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #FFC300;">
            <h3 style="color: #000814; margin-top: 0;">Message :</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
            <p>Date d'envoi : ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }
    */

    // Option 2: Simulation d'envoi (pour le développement)
    // En production, remplacez ceci par un vrai service email
    console.log('Email reçu:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simuler un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

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
