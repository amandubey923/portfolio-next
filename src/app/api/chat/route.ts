import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_SYSTEM_INSTRUCTION } from "@/lib/portfolioContext";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history } = body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return Response.json(
        { error: "Message content is required." },
        { status: 400 }
      );
    }

    const cleanMessage = message.trim();
    if (cleanMessage.length > 1000) {
      return Response.json(
        { error: "Message exceeds maximum allowed limit (1000 characters)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not configured in server environment.");
      return Response.json(
        {
          reply:
            "I'm currently unable to connect to the AI service. You can contact Aman directly at kumaraman19137@gmail.com or via the Contact section below!",
        },
        { status: 200 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Format conversation history for Gemini multi-turn if provided
    const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history) && history.length > 0) {
      const recentHistory = history.slice(-6);
      for (const turn of recentHistory) {
        if (turn && typeof turn.content === "string" && (turn.role === "user" || turn.role === "assistant" || turn.role === "model")) {
          contents.push({
            role: turn.role === "assistant" ? "model" : "user",
            parts: [{ text: turn.content.slice(0, 1000) }],
          });
        }
      }
    }

    // Append the current user message
    contents.push({
      role: "user",
      parts: [{ text: cleanMessage }],
    });

    let replyText = "";

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        config: {
          systemInstruction: PORTFOLIO_SYSTEM_INSTRUCTION,
          temperature: 0.5,
          maxOutputTokens: 600,
        },
        contents: contents,
      });
      replyText = response.text || "";
    } catch (primaryErr) {
      console.warn("Primary model attempt failed, falling back to gemini-3.5-flash-lite:", primaryErr);
      const fallbackResponse = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        config: {
          systemInstruction: PORTFOLIO_SYSTEM_INSTRUCTION,
          temperature: 0.5,
          maxOutputTokens: 600,
        },
        contents: contents,
      });
      replyText = fallbackResponse.text || "";
    }

    if (!replyText) {
      replyText = "I'm here to help with information regarding Aman's portfolio and projects. What would you like to know?";
    }

    return Response.json({ reply: replyText });
  } catch (error) {
    console.error("Gemini API server error:", error);
    return Response.json(
      {
        reply:
          "I'm having trouble responding right now. You can contact Aman directly through the Contact section or email him at kumaraman19137@gmail.com.",
      },
      { status: 200 }
    );
  }
}

