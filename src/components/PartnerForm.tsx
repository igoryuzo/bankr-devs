"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  projectName: string;
  eoaAddress: string;
  description: string;
  telegramHandle: string;
}

export default function PartnerForm() {
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    eoaAddress: "",
    description: "",
    telegramHandle: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="border border-accent/30 bg-accent-dim p-6">
        <p className="text-accent font-medium text-sm mb-3">
          Application received_
        </p>
        <p className="text-text-secondary text-xs leading-relaxed">
          We&apos;ll generate your API key and send it to{" "}
          <span className="text-text-primary">{formData.telegramHandle}</span> on Telegram.
        </p>
        <p className="text-text-muted text-[10px] mt-4">
          Expect a response within 24-48 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-bg-primary border border-border text-text-primary text-sm px-4 py-3 placeholder:text-text-muted/50 transition-colors duration-200 focus:border-accent focus:shadow-[0_0_0_1px_rgba(232,93,42,0.3)] hover:border-text-muted";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-text-secondary text-xs mb-2">
          Project Name
        </label>
        <input
          type="text"
          required
          value={formData.projectName}
          onChange={(e) => handleChange("projectName", e.target.value)}
          placeholder="your-project"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-text-secondary text-xs mb-2">
          EOA Address
        </label>
        <input
          type="text"
          required
          value={formData.eoaAddress}
          onChange={(e) => handleChange("eoaAddress", e.target.value)}
          placeholder="0x..."
          pattern="^0x[a-fA-F0-9]{40}$"
          title="Enter a valid Ethereum address (0x followed by 40 hex characters)"
          className={inputClass}
        />
        <p className="text-text-muted text-[10px] mt-1.5">
          Make sure you retain access to the private key
        </p>
      </div>

      <div>
        <label className="block text-text-secondary text-xs mb-2">
          What are you building?
        </label>
        <textarea
          required
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Short description of your project"
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className="block text-text-secondary text-xs mb-2">
          Telegram Handle
        </label>
        <input
          type="text"
          required
          value={formData.telegramHandle}
          onChange={(e) => handleChange("telegramHandle", e.target.value)}
          placeholder="@yourhandle"
          className={inputClass}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-accent text-white text-sm font-medium py-3.5 px-6
                     hover:bg-accent-hover transition-all duration-200 uppercase tracking-widest
                     disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
                     border border-accent hover:border-accent-hover"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="cursor-blink">_</span>
              Processing...
            </span>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </form>
  );
}
