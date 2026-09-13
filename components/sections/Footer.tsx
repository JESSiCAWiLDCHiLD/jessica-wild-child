import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-chalk/15 px-[var(--gutter)] py-10 lg:pl-[calc(var(--gutter)+var(--rail))]">
      <div className="flex flex-col gap-4 text-sm opacity-50 md:flex-row md:items-center md:justify-between">
        <span>
          {site.name} — {site.role}
        </span>
        <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
      </div>
    </footer>
  );
}
