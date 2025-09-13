/**
 * @name ContactAPI
 * @description API endpoint to handle contact form submissions and send email notifications.
 * Utilizes nodemailer for email sending and handles errors gracefully.
 * 
 * @author Orlifera
 * 
 */

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nome, cognome, email, phone, brevetto, attrezzatura, altezza, peso, numero, message } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"FeelDive WebForm" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: "Nuovo messaggio dal form",
            html: `
        <h2>Nuovo messaggio da:</h2>
        <p><b>Nome:</b> ${nome} ${cognome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefono:</b> ${phone}</p>
        <p><b>Brevetto:</b> ${brevetto}</p>
        <p><b>Attrezzatura:</b> ${attrezzatura}</p>
        ${attrezzatura === "no" ? `
        <p><b>Altezza:</b> ${altezza}</p>
        <p><b>Peso:</b> ${peso}</p>
        <p><b>Numero di scarpe:</b> ${numero}</p>
        ` : ''}
        <br/>
        <p><b>Messaggio:</b><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Email send error:", err);
        // ✅ make sure we only return 500 for real failures
        return NextResponse.json(
            { success: false, error: String(err) },
            { status: 500 }
        );
    }
}
