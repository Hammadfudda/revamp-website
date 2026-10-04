import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { PageHero, ProcessSteps, CtaBand, PrimaryLink, Eyebrow } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { getService, HERO_IMAGE } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData && getService(loaderData.slug);
    if (!s) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const s = getService(Route.useLoaderData().slug)!;
  return (
    <>
      <PageHero eyebrow={s.name} title={s.heroTitle} lead={s.heroLead} image={HERO_IMAGE}>
        <PrimaryLink to="/contact">{s.cta}</PrimaryLink>
      </PageHero>

      {s.why && (
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl">{s.why.title}</h2>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground">
            {s.why.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </section>
      )}

      {s.withOut && s.withIt && (
        <section className="bg-muted/50">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-2 lg:px-8">
            <Reveal>
              <div className="h-full rounded-2xl border bg-card p-8">
                <h3 className="text-xl font-semibold text-navy">Without it</h3>
                <ul className="mt-5 space-y-3">
                  {s.withOut.map((t) => (
                    <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-accent bg-card p-8">
                <h3 className="text-xl font-semibold text-navy">With it done properly</h3>
                <ul className="mt-5 space-y-3">
                  {s.withIt.map((t) => (
                    <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-soft" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="text-3xl font-semibold text-navy">{s.problemTitle}</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground">
          {s.problems.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-lg">{s.solution}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {s.offerings.map((o) => (
            <div key={o.title} className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
              {o.example && <p className="mt-3 border-l-2 border-accent pl-3 text-sm italic text-muted-foreground">{o.example}</p>}
            </div>
          ))}
        </div>
      </section>

      {s.forWho && (
        <section className="bg-muted/50">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <Eyebrow>Who this is for</Eyebrow>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {s.forWho.map((w) => (
                <div key={w.title} className="border-t-2 border-accent pt-5">
                  <h3 className="text-lg font-semibold text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>What you get</Eyebrow>
          <ul className="mt-2 space-y-3">
            {s.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-muted-foreground">
                <Check className="mt-1 h-4 w-4 shrink-0 text-navy-soft" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Eyebrow>What changes</Eyebrow>
          <div className="mt-2 space-y-5">
            {s.outcomes.map((o) => (
              <div key={o.title}>
                <h3 className="font-semibold text-navy">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={s.process} />

      {s.faqs && s.faqs.length > 0 && (
        <section className="mx-auto max-w-3xl px-5 pb-20 lg:px-8">
          <Eyebrow>Common questions</Eyebrow>
          <div className="mt-4 divide-y rounded-2xl border bg-card">
            {s.faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none font-semibold text-navy">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <CtaBand title={s.related.prompt} body="Explore a related Nedd Digital solution." cta="Talk to us" />
    </>
  );
}