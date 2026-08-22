"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactFormComponent() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const subject = (formData.get("subject") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();
    const hp = formData.get("company_url") as string; // Honeypot field

    if (!name || name.length < 2) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      setLoading(false);
      return;
    }

    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!message || message.length < 5) {
      setStatus("error");
      setErrorMessage("Please enter a message of at least 5 characters.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          hp,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to send your message right now. Please try again or email directly.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* SUCCESS / ERROR TOAST NOTIFICATION */}
      {status === "success" && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fadeIn max-w-md w-full px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-green-500/40 bg-card/95 backdrop-blur-2xl px-6 py-4 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
            <CheckCircle2 className="text-green-400 w-5 h-5 flex-shrink-0" />
            <div className="text-sm">
              <span className="font-bold text-foreground block">Message Transmitted!</span>
              <span className="text-muted-foreground text-xs">
                Message sent successfully. I&apos;ll get back to you soon.
              </span>
            </div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fadeIn max-w-md w-full px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-red-500/40 bg-card/95 backdrop-blur-2xl px-6 py-4 shadow-[0_0_40px_rgba(239,68,68,0.3)]">
            <AlertCircle className="text-red-400 w-5 h-5 flex-shrink-0" />
            <div className="text-sm">
              <span className="font-bold text-foreground block">Transmission Issue</span>
              <span className="text-muted-foreground text-xs">{errorMessage}</span>
            </div>
          </div>
        </div>
      )}

      {/* FORM CARD */}
      <div className="rounded-3xl border border-primary/30 bg-card/50 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_0_60px_var(--cyber-glow-primary)]">
        <div className="mb-8">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            // DIRECT TERMINAL TRANSMISSION
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">
            Send Me a Message
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Fill in the fields below to initiate communication directly to my inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot Spam Trap (Hidden from users) */}
          <div className="hidden" aria-hidden="true">
            <input
              name="company_url"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* NAME FIELD */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-primary/90 tracking-wide uppercase">
                Full Name *
              </label>
              <input
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="e.g. Alex Morgan"
                className="w-full rounded-xl border border-primary/20 bg-background/50 backdrop-blur-md px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background/80 focus:shadow-[0_0_15px_var(--cyber-glow-primary)] focus:outline-none transition-all duration-300"
              />
            </div>

            {/* EMAIL FIELD */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-primary/90 tracking-wide uppercase">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                required
                maxLength={120}
                placeholder="e.g. alex@example.com"
                className="w-full rounded-xl border border-primary/20 bg-background/50 backdrop-blur-md px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background/80 focus:shadow-[0_0_15px_var(--cyber-glow-primary)] focus:outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* SUBJECT FIELD */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-primary/90 tracking-wide uppercase">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              maxLength={150}
              placeholder="e.g. Software Engineering Opportunity / Collaboration"
              className="w-full rounded-xl border border-primary/20 bg-background/50 backdrop-blur-md px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background/80 focus:shadow-[0_0_15px_var(--cyber-glow-primary)] focus:outline-none transition-all duration-300"
            />
          </div>

          {/* MESSAGE FIELD */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-primary/90 tracking-wide uppercase">
              Message Content *
            </label>
            <textarea
              name="message"
              rows={5}
              required
              maxLength={3000}
              placeholder="Describe your project, opportunity, or collaboration idea..."
              className="w-full rounded-xl border border-primary/20 bg-background/50 backdrop-blur-md px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background/80 focus:shadow-[0_0_15px_var(--cyber-glow-primary)] focus:outline-none transition-all duration-300 resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_25px_var(--cyber-glow-primary)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_var(--cyber-glow-strong)] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-primary-foreground" />
                <span>Transmitting Message...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
