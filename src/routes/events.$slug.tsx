import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getEvent } from "@/lib/events";
import { SiteLogo } from "@/components/SiteLogo";
import { CodeBlueForm } from "@/components/CodeBlueForm";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.event;
    if (!e) return { meta: [{ title: "فعالية غير موجودة | قوافل طبية جمعية رسالة" }, { name: "robots", content: "noindex" }] };
    const title = `${e.name} | ${e.subtitle} من رسالة`;
    return {
      meta: [
        { title },
        { name: "description", content: e.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: e.summary },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div dir="rtl" className="flex min-h-screen flex-col items-center justify-center gap-4 font-arabic">
      <h1 className="text-2xl font-extrabold">الفعالية غير موجودة</h1>
      <Link to="/" className="rounded-full bg-primary px-6 py-2 font-bold text-primary-foreground">الرجوع للرئيسية</Link>
    </div>
  ),
  component: EventPage,
});

function EventPage() {
  const { event } = Route.useLoaderData();

  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground font-arabic">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" aria-label="الرئيسية"><SiteLogo /></Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/" className="rounded-full border border-border px-4 py-2 text-sm font-bold">← الرئيسية</Link>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">
            فعالية قادمة{event.organizer ? ` · ${event.organizer}` : ""}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">{event.name} {event.emoji}</h1>
          <p className="mt-3 text-2xl font-bold opacity-90">{event.subtitle}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-90">{event.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="space-y-14 md:col-span-2">
          {event.topics && (
            <div>
              <h2 className="text-3xl font-extrabold">{event.topicsTitle ?? "المحاور التدريبية"}</h2>
              <p className="mt-2 text-muted-foreground">{event.subtitle}</p>
              <ol className="mt-8 space-y-3">
                {event.topics.map((tp, i) => (
                  <li key={tp.en} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-extrabold text-primary-foreground">
                      {(i + 1).toLocaleString("ar-EG")}
                    </div>
                    <div>
                      <h3 className="font-bold leading-relaxed">{tp.ar}</h3>
                      <p dir="ltr" className="mt-1 text-right text-sm text-muted-foreground">{tp.en}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {event.instructors && (
            <div>
              <h2 className="text-3xl font-extrabold">المحاضرين</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {event.instructors.map((p) => (
                  <div key={p.en} className="rounded-2xl border border-border bg-card p-6">
                    {p.photo ? (
                      <img src={p.photo} alt={p.ar} loading="lazy" className="aspect-[4/5] w-full rounded-xl bg-secondary object-cover object-top" />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-2xl">🩺</div>
                    )}
                    <h3 className="mt-4 text-lg font-bold">{p.ar}</h3>
                    <p dir="ltr" className="text-right text-sm font-bold text-primary">{p.en}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.agenda && (
            <div>
              <h2 className="text-3xl font-extrabold">{event.agendaTitle ?? "برنامج اليوم"}</h2>
              <ol className="mt-8 space-y-4">
                {event.agenda.map((a) => (
                  <li key={a.t} className="flex gap-5 rounded-2xl border border-border bg-card p-5">
                    <div className="flex h-14 min-w-16 shrink-0 items-center justify-center rounded-xl bg-secondary px-2 text-center text-sm font-extrabold text-primary">{a.time}</div>
                    <div>
                      <h3 className="text-lg font-bold">{a.t}</h3>
                      <p className="mt-1 text-muted-foreground">{a.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {event.bring && (
            <div>
              <h2 className="text-3xl font-extrabold">أحضر معك</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {event.bring.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl bg-muted p-4">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-3xl bg-secondary p-8 shadow-soft md:sticky md:top-6">
          <h2 className="text-lg font-bold text-secondary-foreground">تفاصيل الفعالية</h2>
          <dl className="mt-6 space-y-5">
            {event.details.map(([k, v]) => (
              <div key={k} className="border-b border-border pb-3">
                <dt className="text-sm text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-bold">{v}</dd>
              </div>
            ))}
          </dl>
          {event.mapUrl && (
            <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-6 block rounded-full border border-border px-6 py-3 text-center font-bold">
              📍 افتح المكان على الخريطة ↗
            </a>
          )}
          {event.hasRegistration ? (
            <a href="#register" className="mt-3 block rounded-full bg-cta px-6 py-3 text-center font-bold text-cta-foreground shadow-cta transition-all hover:brightness-110 active:scale-95">
              احجز مكانك الآن
            </a>
          ) : (
            <p className="mt-6 rounded-2xl bg-card px-4 py-3 text-center text-sm font-bold text-muted-foreground">التسجيل هيفتح قريباً</p>
          )}
          {event.partner && (
            <div className="mt-6 rounded-2xl bg-card p-5 text-center">
              <p className="text-sm text-muted-foreground">بالتعاون مع</p>
              {event.partner.logo ? (
                <div className="mt-3 overflow-hidden rounded-xl bg-logo-surface">
                  <img
                    src={event.partner.logo}
                    alt={`شعار ${event.partner.name}`}
                    className="aspect-[16/9] w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <p dir="ltr" className="mt-1 text-lg font-extrabold">{event.partner.name}</p>
              )}
              {event.partner.url && (<a
                href={event.partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-full border border-border px-5 py-2 text-sm font-bold"
              >
                صفحتهم على فيسبوك ↗
              </a>)}
            </div>
          )}
        </aside>
      </section>

      {event.hasRegistration && (
        <section id="register" className="mx-auto max-w-3xl px-6 pb-20">
          <h2 className="text-3xl font-extrabold">التسجيل في {event.name}</h2>
          <p className="mt-2 mb-6 text-muted-foreground">املا بياناتك واختار الشهادة وارفع صورة إيصال الدفع.</p>
          <CodeBlueForm />
        </section>
      )}

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        جمعية رسالة للأعمال الخيرية · نشاط القوافل الطبية © ٢٠٢٦
      </footer>
    </div>
  );
}
