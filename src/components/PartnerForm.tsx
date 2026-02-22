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

  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_name: formData.projectName,
          eoa_address: formData.eoaAddress,
          description: formData.description,
          telegram_handle: formData.telegramHandle,
        }),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
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
        <div className="flex items-center gap-1.5 mt-2 px-2 py-1.5 rounded bg-yellow-500/10 border border-yellow-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-yellow-500 shrink-0">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <p className="text-yellow-500 text-[10px] font-medium">
            Make sure you retain access to the private key
          </p>
        </div>
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

      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}

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
