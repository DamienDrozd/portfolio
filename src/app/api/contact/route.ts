import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from "../../../lib/sendEmail";
import { notifyDiscord } from "../../../lib/sendDiscord";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const info = await sendEmail({ name, email, message });

    // Envoi de la notif Discord (async sans attendre, pour ne pas bloquer la réponse)
    notifyDiscord({ name, email, message }).catch(console.error);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
