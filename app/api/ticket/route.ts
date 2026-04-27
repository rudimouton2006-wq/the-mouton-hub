import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize the Resend Matrix securely
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Intercept and parse the encrypted payload
    const body = await request.json();

    // 2. Extract core transmission parameters
    const { 
      designation,      
      returnVector,     
      module,           
      urgency,          
      dynamicData,      
      payload,          
    } = body;

    // 3. Strict Validation Matrix
    if (!returnVector || !designation || !payload) {
      return NextResponse.json(
        { status: "rejected", message: "Critical parameters missing. Transmission aborted." },
        { status: 400 }
      );
    }

    // 4. LIVE TRANSMISSION PROTOCOL
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Leave this as onboarding@resend.dev until your domain is verified in Phase 2.
      // Once verified, change this to: 'Takumi Tech System <system@takumitech.co.za>'
      from: 'Takumi Tech Terminal <onboarding@resend.dev>', 
      to: 'rudi@takumitech.co.za', 
      subject: `[URGENCY: ${urgency?.toUpperCase() || 'STANDARD'}] New ${module} Ticket from ${designation}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background-color: #050505; color: #00E5FF; padding: 40px; border-radius: 10px; border: 1px solid #111;">
          <h2 style="color: #FFFFFF; text-transform: uppercase; border-bottom: 1px solid #00E5FF; padding-bottom: 10px; margin-top: 0;">Diagnostic Ticket Logged</h2>
          
          <table style="width: 100%; color: #FFFFFF; text-align: left; margin-bottom: 20px;">
            <tr><td style="padding: 5px 0; color: #888; width: 150px;">Entity:</td><td><strong>${designation}</strong></td></tr>
            <tr><td style="padding: 5px 0; color: #888;">Return Vector:</td><td><strong>${returnVector}</strong></td></tr>
            <tr><td style="padding: 5px 0; color: #888;">Service Module:</td><td><strong>${module}</strong></td></tr>
            <tr><td style="padding: 5px 0; color: #888;">Specific Context:</td><td><strong>${dynamicData || 'N/A'}</strong></td></tr>
          </table>
          
          <h3 style="color: #FFFFFF; text-transform: uppercase; margin-top: 30px;">Decrypted Payload:</h3>
          <div style="background-color: #111; padding: 20px; border-left: 3px solid #00E5FF; color: #E5E5E5; line-height: 1.6;">
            ${payload.replace(/\n/g, '<br>')}
          </div>
          
          <p style="font-size: 11px; color: #444; margin-top: 40px; text-transform: uppercase; letter-spacing: 1px;">
            Transmitted securely via Takumi Tech Edge Network.
          </p>
        </div>
      `
    });

    if (error) {
      console.error("[TAKUMI_TRANSMISSION_ERROR]", error);
      return NextResponse.json({ status: "error", message: "Email relay failed." }, { status: 500 });
    }

    // 5. Success Acknowledgment Vector
    return NextResponse.json(
      { 
        status: "verified", 
        message: "Payload securely transmitted to Lead Architect.",
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