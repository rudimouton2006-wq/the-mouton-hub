import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract Client Identity Fields
    const clientName = formData.get('clientName') as string;
    const clientEmail = formData.get('clientEmail') as string;
    const clientPhone = formData.get('clientPhone') as string;

    // Extract standard fields
    const category = formData.get('category') as string;
    const deviceMake = formData.get('deviceMake') as string;
    const deviceModel = formData.get('deviceModel') as string;
    const symptoms = formData.get('symptoms') as string;
    const networkType = formData.get('networkType') as string;
    const isp = formData.get('isp') as string;
    const mainIssue = formData.get('mainIssue') as string;
    const generalRequest = formData.get('generalRequest') as string;
    
    // Extract file
    const file = formData.get('file') as File | null;

    // Build the email content dynamically
    let emailBody = `CLIENT INTAKE / NEW TICKET\n`;
    emailBody += `==========================\n`;
    emailBody += `Name:  ${clientName}\n`;
    emailBody += `Email: ${clientEmail}\n`;
    emailBody += `Phone: ${clientPhone || 'Not provided'}\n`;
    emailBody += `==========================\n\n`;
    
    emailBody += `DIAGNOSTIC DETAILS: [${category.toUpperCase()}]\n`;
    emailBody += `--------------------------\n`;
    
    if (category === 'Repair') {
      emailBody += `Device Make:  ${deviceMake}\n`;
      emailBody += `Device Model: ${deviceModel}\n\n`;
      emailBody += `Symptoms / Issues:\n${symptoms}\n`;
    } else if (category === 'Network') {
      emailBody += `Environment: ${networkType}\n`;
      emailBody += `Current ISP: ${isp || 'Not provided'}\n\n`;
      emailBody += `Main Issue:\n${mainIssue}\n`;
    } else {
      emailBody += `Request Details:\n${generalRequest}\n`;
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Handle File Attachment
    const attachments: any[] = [];
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Send the email
    await transporter.sendMail({
      from: `"The Mouton Hub Portal" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVING_EMAIL || process.env.SMTP_USER,
      replyTo: clientEmail, // Allows Rudi to hit "Reply" and email the client directly
      subject: `[TICKET] ${category.toUpperCase()} - ${clientName}`,
      text: emailBody,
      attachments: attachments,
    });

    return NextResponse.json({ success: true, message: 'Ticket deployed successfully.' }, { status: 200 });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to process ticket.' }, { status: 500 });
  }
}