import { Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, BarChart3, Globe, Code2, Smartphone, Palette, ShieldCheck, Clock, HeartHandshake, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import type { Service } from "@/lib/site";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-accent" : "text-navy-soft"}`}>
      <span className="h-px w-6 bg-accent" aria-hidden />
      {children}
    </p>
  );
}

export function PageHero({ eyebrow, title, lead, children, image }: { eyebrow: string; title: string; lead: string; children?: ReactNode; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-on-navy">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" aria-hidden />
        </>
      )}
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <div className="reveal max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-on-navy-muted">{lead}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function PrimaryLink({ to, children, params }: { to: string; children: ReactNode; params?: Record<string, string> }) {
  return (
    <Link
      to={to as "/"}
      params={params as never}
      className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function GhostLink({ to, children, light = true }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      to={to as "/"}
      className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors ${light ? "border-on-navy/30 text-on-navy hover:bg-on-navy/10" : "border-navy/20 text-navy hover:bg-muted"}`}
    >
      {children}
    </Link>
  );
}

export function ProcessSteps({ steps, title = "How we work" }: { steps: { title: string; body: string }[]; title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <Eyebrow>Our process</Eyebrow>
      <h2 className="text-3xl font-semibold text-navy md:text-4xl">{title}</h2>
      <ol className={`mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 ${steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"}`}>
        {steps.map((s, i) => (
          <li key={s.title} className="bg-card p-6">
            <Reveal delay={i * 80}>
              <span className="font-display text-sm font-semibold text-accent-foreground/60">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CtaBand({ title, body, cta, to = "/contact" }: { title: string; body: string; cta: string; to?: string }) {
  return (
    <section className="px-5 pb-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy px-8 py-14 text-on-navy md:px-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 text-on-navy-muted">{body}</p>
          </div>
          <PrimaryLink to={to}>{cta}</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "bookkeeping-quickbooks": Calculator,
  "power-bi-data-analytics": BarChart3,
  "website-design-development": Globe,
  "custom-software-development": Code2,
  "mobile-app-development": Smartphone,
  "logo-brand-design": Palette,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = SERVICE_ICONS[service.slug] ?? Globe;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-soft">
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/30 blur-2xl" aria-hidden />
        <span className="absolute left-4 top-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-on-navy-muted">
          {service.track === "finance" ? "Finance and data" : "Digital"}
        </span>
        <div className="relative rounded-2xl bg-accent p-4 text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-8 w-8" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-navy">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-soft">
          Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

const TRUST = [
  { icon: BarChart3, title: "Free dashboard", body: "A historical Power BI dashboard with every bookkeeping package." },
  { icon: ShieldCheck, title: "Price first", body: "A written scope and quote before any work starts." },
  { icon: Clock, title: "24 hour reply", body: "Tell us what you need and hear back within a day." },
  { icon: HeartHandshake, title: "One team", body: "Your finance and technology handled by the same people." },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 lg:px-8">
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-border shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {TRUST.map((t) => (
          <div key={t.title} className="flex gap-4 bg-card p-6">
            <t.icon className="mt-0.5 h-6 w-6 shrink-0 text-navy-soft" />
            <div>
              <p className="font-semibold text-navy">{t.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}