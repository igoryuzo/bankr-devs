import PartnerForm from "@/components/PartnerForm";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Corner decorations */}
      <div className="fixed top-4 left-4 w-2.5 h-2.5 bg-accent glow-pulse z-50" />
      <div className="fixed bottom-4 left-4 w-2.5 h-2.5 bg-accent glow-pulse z-50" />

      {/* NAV */}
      <nav className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-text-primary font-bold text-lg tracking-widest">BANKR</span>
          <a
            href="https://docs.bankr.bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-xs uppercase tracking-wider hover:text-accent transition-colors"
          >
            Docs
          </a>
        </div>
      </nav>

      {/* MAIN */}
      <main className="flex-1 flex items-start justify-center px-6 py-12 md:py-20">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="mb-10 md:mb-12">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 bg-accent" />
              <span className="text-accent text-[10px] uppercase tracking-[0.2em]">
                Partner Deploy API
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4 tracking-tight text-text-primary">
              Launch tokens for your users
            </h1>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
              Building an agent-adjacent product that can benefit from native token launches?
              Reach out and we&apos;ll get you set up with an API key and full support from the Bankr team.
            </p>
          </div>

          {/* Form */}
          <div className="border border-border bg-bg-secondary p-6 md:p-8">
            <PartnerForm />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-6 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-text-muted text-[10px]">
            Bankr {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-5">
            <a href="https://docs.bankr.bot" target="_blank" rel="noopener noreferrer" className="text-text-muted text-[10px] hover:text-accent transition-colors">
              Docs
            </a>
            <a href="https://github.com/BankrBot" target="_blank" rel="noopener noreferrer" className="text-text-muted text-[10px] hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://x.com/bankrbot" target="_blank" rel="noopener noreferrer" className="text-text-muted text-[10px] hover:text-accent transition-colors">
              X
            </a>
            <a href="https://t.me/bankrbot" target="_blank" rel="noopener noreferrer" className="text-text-muted text-[10px] hover:text-accent transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
