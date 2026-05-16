export const runtime = 'edge';
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize the Resend Matrix securely
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Intercept and parse the encrypted payload
    const body = await request.json();
    const { 
      designation,      
      returnVector,     
      module,           
      urgency,          
      dynamicData,      
      payload,          
    } = body;

    // 2. Strict Validation Matrix
    if (!returnVector || !designation || !payload) {
      return NextResponse.json(
        { status: "rejected", message: "Critical parameters missing. Transmission aborted." },
        { status: 400 }
      );
    }

    // 3. Module Translation Engine (Converts raw values to readable service names)
    const formatModule = (mod: string) => {
      if (mod === 'web-foundation') return 'Web Foundation Build (R850)';
      if (mod === 'web-managed') return 'Managed Web Environment (R150/m)';
      if (mod === 'hardware') return 'Hardware Sourcing & Mastery';
      if (mod === 'emergency') return 'Critical Incident Response';
      return 'General Architecture';
    };
    const readableModule = formatModule(module);

    // ---------------------------------------------------------
    // VECTOR A: INTERNAL TRANSMISSION (To Lead Architect)
    // ---------------------------------------------------------
    const internalEmail = await resend.emails.send({
      from: 'Takumi Tech System <system@takumitech.co.za>', 
      to: 'rudi@takumitech.co.za', 
      subject: `[${urgency?.toUpperCase() || 'STANDARD'}] New ${readableModule} Ticket from ${designation}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background-color: #050505; color: #00E5FF; padding: 40px; border-radius: 10px; border: 1px solid #111;">
          <h2 style="color: #FFFFFF; text-transform: uppercase; border-bottom: 1px solid #00E5FF; padding-bottom: 10px; margin-top: 0;">System Ticket Logged</h2>
          <table style="width: 100%; color: #FFFFFF; text-align: left; margin-bottom: 20px;">
            <tr><td style="padding: 5px 0; color: #888; width: 150px;">Entity:</td><td><strong>${designation}</strong></td></tr>
            <tr><td style="padding: 5px 0; color: #888;">Return Vector:</td><td><strong>${returnVector}</strong></td></tr>
            <tr><td style="padding: 5px 0; color: #888;">Service Node:</td><td><strong>${readableModule}</strong></td></tr>
            <tr><td style="padding: 5px 0; color: #888;">System Context:</td><td><strong>${dynamicData || 'N/A'}</strong></td></tr>
          </table>
          <h3 style="color: #FFFFFF; text-transform: uppercase; margin-top: 30px;">Decrypted Payload:</h3>
          <div style="background-color: #111; padding: 20px; border-left: 3px solid #00E5FF; color: #E5E5E5; line-height: 1.6;">
            ${payload.replace(/\n/g, '<br>')}
          </div>
        </div>
      `
    });

    // ---------------------------------------------------------
    // VECTOR B: CLIENT AUTO-RESPONDER (Frictionless Onboarding)
    // ---------------------------------------------------------
    let clientSubject = `Takumi Tech | System Ticket Received`;
    let clientHtml = '';

    // If it's a web deployment, send the tailored onboarding packet
    if (module === 'web-foundation' || module === 'web-managed') {
      clientSubject = `Welcome to Takumi Tech | Deployment Initiated`;
      clientHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <h2 style="color: #050505; text-transform: uppercase; letter-spacing: 1px;">Deployment Initiated</h2>
          <p>Hi ${designation},</p>
          <p>This is an automated confirmation from the Takumi Tech system. We have successfully received your payload regarding the <strong>${readableModule}</strong>.</p>
          <p>To accelerate your build phase before our engineers reach out, please begin gathering the following assets:</p>
          <ul style="background-color: #f4f4f5; padding: 20px 40px; border-radius: 8px; margin-bottom: 25px;">
            <li>High-resolution versions of your company logo.</li>
            <li>Specific brand colors or visual guidelines.</li>
            <li>A rough outline of the services/products you wish to display.</li>
          </ul>
          <p>Our lead architect is currently reviewing your parameters and will establish direct comms shortly to execute the next phase.</p>
          <p style="font-size: 12px; color: #888; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
            Transmitted securely by Takumi Tech edge servers.<br/>
            Your Encrypted Payload Log: <i>"${payload}"</i>
          </p>
        </div>
      `;
    } else {
      // Standard Support Auto-Responder
      clientHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <h2 style="color: #050505; text-transform: uppercase;">Ticket Logged</h2>
          <p>Hi ${designation},</p>
          <p>Your diagnostic ticket regarding <strong>${readableModule}</strong> has been securely logged into our system.</p>
          <p>An engineer will review your payload and respond directly to this email shortly.</p>
        </div>
      `;
    }

    const clientEmail = await resend.emails.send({
      from: 'Takumi Tech System <system@takumitech.co.za>', 
      to: returnVector, 
      subject: clientSubject,
      html: clientHtml
    });

    if (internalEmail.error || clientEmail.error) {
      console.error("[TAKUMI_TRANSMISSION_ERROR]", internalEmail.error || clientEmail.error);
      return NextResponse.json({ status: "error", message: "Email relay failed." }, { status: 500 });
    }

    // 4. Success Acknowledgment
    return NextResponse.json(
      { 
        status: "verified", 
        message: "Payload securely transmitted and client acknowledged.",
        receipt_id: `TK-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("[TAKUMI_SYSTEM_ERROR] Payload parsing failed:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server anomaly." },
      { status: 500 }
    );
  }
}