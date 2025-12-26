export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aman Dubey. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with Next.js • TypeScript • Tailwind CSS
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="text-center md:text-left">
            Designing systems, not just interfaces — focused on clarity,
            performance, and long-term impact.
          </p>

          <p className="text-center md:text-right">
            Always learning • Always improving • Always building
          </p>
        </div>
      </div>
    </footer>
  );
}
