"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo handler — wire up to your email/CRM provider in production.
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-forest-200 bg-forest-50/60 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-600 text-white">
          <Icon name="check" size={28} />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink">
          Thanks — message received
        </h3>
        <p className="mt-2 text-sm text-ink-muted">
          We&apos;ll get back to you within two working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-forest-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Email address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@example.com"
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Subject" htmlFor="subject">
          <select id="subject" name="subject" className={inputClass} defaultValue="general">
            <option value="general">General enquiry</option>
            <option value="review">Suggest a casino to review</option>
            <option value="correction">Report a correction</option>
            <option value="partnership">Partnership</option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-y`}
            placeholder="How can we help?"
          />
        </Field>
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-sm text-ink-muted">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-forest-600" />
        <span>
          I confirm I am 18 or over and have read the{" "}
          <a href="/privacy-policy" className="font-semibold text-forest-700 underline">
            privacy policy
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-forest-700"
      >
        Send message <Icon name="arrow" size={18} />
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
