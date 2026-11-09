import { createFileRoute, Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { events } from "@/lib/events";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "قوافل رسالة الطبية | كشف وعلاج مجاني" },
      { name: "description", content: "نشاط القوافل الطبية بجمعية رسالة: كشف وعلاج وأدوية مجانية لأهالي القرى والمناطق الأكثر احتياجاً." },
      { property: "og:title", content: "قوافل رسالة الطبية | كشف وعلاج مجاني" },
      { property: "og:description", content: "انضم كمتطوع أو سجّل للكشف المجاني في قوافل رسالة الطبية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { t: "كشف في تخصصات متعددة", d: "باطنة وأطفال ورمد وجلدية ونسا وأسنان على يد أطباء متطوعين." },
  { t: "صرف الأدوية", d: "صرف العلاج اللازم لكل حالة مجاناً من صيدلية القافلة." },
  { t: "تحاليل وقياسات", d: "قياس الضغط والسكر وتحاليل بسيطة للاطمئنان على الصحة." },
  { t: "توعية صحية", d: "ندوات للأمهات والأطفال والكبار عن الوقاية والتغذية السليمة." },
];

const steps = [
  { n: "١", t: "اختيار المنطقة", d: "دراسة القرى والمناطق الأكثر احتياجاً وتحديد مكان القافلة." },
  { n: "٢", t: "التجهيز", d: "تجهيز الأطباء والمتطوعين والأدوية والأدوات الطبية." },
  { n: "٣", t: "يوم القافلة", d: "استقبال الأهالي والكشف وصرف العلاج مجاناً." },
  { n: "٤", t: "المتابعة", d: "تحويل الحالات المحتاجة للمستشفيات والعيادات المتعاونة." },
];

function Index() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground font-arabic">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-accent px-6 py-2.5 text-center text-sm font-bold text-accent-foreground">
        <span>📢 فعاليات قادمة:</span>
        {events.map((ev, i) => (
          <span key={ev.slug} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden>·</span>}
            <Link to="/events/$slug" params={{ slug: ev.slug }} className="underline">
              {ev.name} ({ev.day} {ev.month})
            </Link>
          </span>
        ))}
      </div>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-xl font-extrabold text-primary">رسالة · القوافل الطبية</span>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#register" className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">سجّل الآن</a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">نشاط القوافل الطبية</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            صحة لكل بيت.. <span className="text-primary">قوافل رسالة</span> الطبية
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            جمعية رسالة بتنظم قوافل طبية مجانية بأطباء ومتطوعين من تخصصات مختلفة، لخدمة أهالي القرى والمناطق الأكثر احتياجاً.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#register" className="rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground">انضم كمتطوع</a>
            <a href="#services" className="rounded-full border border-border px-7 py-3 font-bold">الخدمات</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 lg:grid-cols-2">
        {events.map((ev) => (
          <Link
            key={ev.slug}
            to="/events/$slug"
            params={{ slug: ev.slug }}
            className="group flex flex-col justify-between gap-6 rounded-3xl border-2 border-primary bg-card p-8 shadow-soft transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <span className="text-3xl font-extrabold leading-none">{ev.day}</span>
                <span className="text-xs font-bold">{ev.month}</span>
              </div>
              <div>
                <span className="text-sm font-bold text-primary">إعلان · {ev.subtitle}</span>
                <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">{ev.name} {ev.emoji}</h2>
                <p className="mt-2 text-muted-foreground">{ev.summary}</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              {ev.partner?.logo ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">بالتعاون مع</span>
                  <div className="h-12 w-24 overflow-hidden rounded-lg bg-logo-surface">
                    <img src={ev.partner.logo} alt={`شعار ${ev.partner.name}`} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </div>
              ) : (
                <span />
              )}
              <span className="rounded-full bg-primary px-7 py-3 text-center font-bold text-primary-foreground">
                التفاصيل والبرنامج ←
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
          {[["+٥٠٠", "مستفيد في كل قافلة"], ["+٨٠", "متطوع"], ["+١٥", "طبيب متطوع"], ["+٦", "تخصصات طبية"]].map(([n, l]) => (
            <div key={l}><div className="text-4xl font-extrabold">{n}</div><div className="mt-1 opacity-80">{l}</div></div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pt-20 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">عن نشاط القوافل الطبية</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
            قوافل <span className="text-primary">رسالة</span> الطبية.. الخير يوصل لحد باب البيت
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            نشاط القوافل الطبية في جمعية رسالة بيطلع بشكل دوري للقرى والمناطق الأكثر احتياجاً، ومعاه أطباء ومتطوعين من تخصصات مختلفة: باطنة وأطفال ورمد وجلدية وأسنان وغيرها.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            بنقدّم الكشف والأدوية والتحاليل البسيطة مجاناً، وبنحوّل الحالات اللي محتاجة متابعة للمستشفيات والعيادات المتعاونة معانا.
          </p>
        </div>
        <div className="rounded-3xl bg-secondary p-8 shadow-soft">
          <h2 className="text-lg font-bold text-secondary-foreground">القافلة القادمة</h2>
          <dl className="mt-6 space-y-5">
            {[["📅 التاريخ", "الجمعة ٢٠ نوفمبر ٢٠٢٦"], ["⏰ الوقت", "٩ صباحاً – ٣ عصراً"], ["📍 المكان", "يُعلن قريباً"], ["💰 التكلفة", "مجاناً بالكامل"]].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold">خدمات القافلة</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 h-2 w-10 rounded-full bg-primary" />
              <h3 className="text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold">كيف تتم القافلة؟</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-primary-foreground">{s.n}</div>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-1 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold">كن جزءاً من الرسالة</h2>
        <p className="mt-4 text-lg text-muted-foreground">سواء كنت عايز تتطوع معانا أو محتاج كشف مجاني، سجّل اسمك وهنتواصل معاك.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert("تم استلام طلبك، شكراً لك!"); }} className="mt-8 grid gap-3 text-right sm:grid-cols-2">
          <input required placeholder="الاسم بالكامل" className="rounded-xl border border-input bg-background px-4 py-3" />
          <input required placeholder="رقم الموبايل" className="rounded-xl border border-input bg-background px-4 py-3" />
          <select className="rounded-xl border border-input bg-background px-4 py-3 sm:col-span-2">
            <option>متطوع (طبيب / طالب / إداري)</option>
            <option>مستفيد (أحتاج كشفاً)</option>
          </select>
          <button className="rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground sm:col-span-2">إرسال</button>
        </form>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        جمعية رسالة للأعمال الخيرية · نشاط القوافل الطبية © ٢٠٢٦
      </footer>
    </div>
  );
}
