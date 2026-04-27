import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize the Resend Matrix
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Intercept and parse the encrypted payload
    const body = await request.json();

    // 2. Extract core transmission parameters
    const { 
      type,             
      designation,      
      returnVector,     
      module,           
      urgency,          
      dynamicData,      
      payload,          
      targetInbox       
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
      from: 'Takumi Tech Terminal <onboarding@resend.dev>', // Update to system@takumitech.co.za once domain is verified in Resend
      to: 'rudi@takumitech.co.za', // Your target inbox
      subject: `[URGENCY: ${urgency?.toUpperCase() || 'STANDARD'}] New ${module} Ticket from ${designation}`,
      html: `
        <div style="font-family: monospace; background-color: #050505; color: #00E5FF; padding: 40px; border-radius: 10px;">
          <h2 style="color: #FFFFFF; text-transform: uppercase; border-bottom: 1px solid #00E5FF; padding-bottom: 10px;">Diagnostic Ticket Logged</h2>
          <p><strong>Entity:</strong> <span style="color: #FFFFFF;">${designation}</span></p>
          <p><strong>Return Vector:</strong> <span style="color: #FFFFFF;">${returnVector}</span></p>
          <p><strong>Service Module:</strong> <span style="color: #FFFFFF;">${module}</span></p>
          <p><strong>Specific Context (Serial/Domain):</strong> <span style="color: #FFFFFF;">${dynamicData || 'N/A'}</span></p>
          <br/>
          <h3 style="color: #FFFFFF; text-transform: uppercase;">Decrypted Payload:</h3>
          <div style="background-color: #111; padding: 20px; border-left: 3px solid #00E5FF; color: #CCC;">
            ${payload}
          </div>
          <br/>
          <p style="font-size: 10px; color: #555;">Transmitted securely via Takumi Tech Edge Network.</p>
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