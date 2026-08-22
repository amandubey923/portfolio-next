import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, subject, hp } = body;

    // 1. Honeypot Spam Protection
    if (hp) {
      // Silently reject bot submissions
      return Response.json({ success: true });
    }

    // 2. Server-side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return Response.json(
        { success: false, error: "Please provide a valid name (2-100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim()) || email.trim().length > 120) {
      return Response.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5 || message.trim().length > 3000) {
      return Response.json(
        { success: false, error: "Please provide a message between 5 and 3000 characters." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = typeof subject === "string" && subject.trim().length > 0
      ? subject.trim().slice(0, 150)
      : `New Portfolio Message from ${cleanName}`;
    const cleanMessage = message.trim();

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "kumaraman19137@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured in server environment.");
      return Response.json(
        { success: false, error: "Contact service is temporarily unconfigured. Please email directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #0d0f17; color: #f8fafc;">
        <div style="border-bottom: 2px solid #18cef2; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #18cef2; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">
            // New Portfolio Transmission
          </h2>
          <span style="color: #94a3b8; font-size: 12px;">Received: ${timestamp} (IST)</span>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 120px; font-weight: bold;">Sender Name:</td>
            <td style="padding: 8px 0; color: #f8fafc; font-size: 14px; font-weight: bold;">${cleanName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: bold;">Sender Email:</td>
            <td style="padding: 8px 0; color: #18cef2; font-size: 14px;">
              <a href="mailto:${cleanEmail}" style="color: #18cef2; text-decoration: none;">${cleanEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">${cleanSubject}</td>
          </tr>
        </table>

        <div style="background-color: #141926; border-left: 4px solid #18cef2; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 10px 0; color: #cbd5e1; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Payload:</h3>
          <p style="margin: 0; color: #f8fafc; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</p>
        </div>

        <div style="border-top: 1px solid #1e293b; padding-top: 16px; font-size: 12px; color: #64748b; text-align: center;">
          Sent via Aman Dubey's Developer Portfolio Contact Terminal
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: cleanEmail,
      subject: `[Portfolio] ${cleanSubject}`,
      html: htmlContent,
      text: `From: ${cleanName} (${cleanEmail})\nSubject: ${cleanSubject}\nDate: ${timestamp}\n\nMessage:\n${cleanMessage}`,
    });

    if (error) {
      console.error("Resend delivery failed:", error.name, error.message);
      return Response.json(
        { success: false, error: "Transmission failed. Please try again or email directly." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Unhandled contact submission error:", err);
    return Response.json(
      { success: false, error: "An unexpected error occurred. Please email directly." },
      { status: 500 }
    );
  }
}