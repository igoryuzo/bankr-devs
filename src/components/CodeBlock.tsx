"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = "bash", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-border bg-bg-primary group">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-secondary/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-text-muted/30" />
            <span className="w-2 h-2 rounded-full bg-text-muted/30" />
            <span className="w-2 h-2 rounded-full bg-text-muted/30" />
            <span className="text-text-muted text-[10px] ml-2 uppercase tracking-wider">{title}</span>
          </div>
          <span className="text-text-muted text-[10px] uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-xs md:text-sm leading-relaxed">
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 text-text-muted hover:text-accent text-[10px] uppercase tracking-wider
                     opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer
                     border border-border hover:border-accent px-2 py-1 bg-bg-secondary"
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>
    </div>
  );
}
