import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getEvent } from "@/lib/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.event;
    if (!e) return { meta: [{ title: "فعالية غير موجودة | قوافل رسالة" }, { name: "robots", content: "noindex" }] };
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
        <Link to="/" className="text-xl font-extrabold text-primary">رسالة · القوافل الطبية</Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/" className="rounded-full border border-border px-5 py-2 text-sm font-bold">← الرجوع للرئيسية</Link>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">فعالية قادمة</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">{event.name} {event.emoji}</h1>
          <p className="mt-3 text-2xl font-bold opacity-90">{event.subtitle}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-90">{event.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold">برنامج اليوم</h2>
          <ol className="mt-8 space-y-4">
            {event.agenda.map((a) => (
              <li key={a.t} className="flex gap-5 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl bg-secondary text-lg font-extrabold text-primary">{a.time}</div>
                <div>
                  <h3 className="text-lg font-bold">{a.t}</h3>
                  <p className="mt-1 text-muted-foreground">{a.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 text-3xl font-extrabold">أحضر معك</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {event.bring.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl bg-muted p-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
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
          <Link
            to="/"
            hash="register"
            className="mt-8 block rounded-full bg-primary px-6 py-3 text-center font-bold text-primary-foreground"
          >
            احجز مكانك الآن
          </Link>
        </aside>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        جمعية رسالة للأعمال الخيرية · نشاط القوافل الطبية © ٢٠٢٦
      </footer>
    </div>
  );
}
