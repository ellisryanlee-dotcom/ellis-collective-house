export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-foreground/60">Ellis Collective House</p>
          <p className="text-sm text-foreground/60">
            Crafted for creators. Inspired by community.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-foreground/60">
          <a className="transition hover:text-accent" href="#">Instagram</a>
          <a className="transition hover:text-accent" href="#">Newsletter</a>
          <a className="transition hover:text-accent" href="mailto:hello@ellishouse.com">
            hello@ellishouse.com
          </a>
        </div>
      </div>
    </footer>
  );
}
