import { createFileRoute, Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { events } from "@/lib/events";
import resalaLogo from "@/assets/resala_caravans_logo.png.asset.json";
import shirtImg from "@/assets/resala_caravans_shirt.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "قوافل طبية جمعية رسالة | كشف وعلاج مجاني" },
      { name: "description", content: "نشاط القوافل الطبية بجمعية رسالة: كشف وعلاج وأدوية مجانية لأهالي القرى والمناطق الأكثر احتياجاً." },
      { property: "og:title", content: "قوافل طبية جمعية رسالة | كشف وعلاج مجاني" },
      { property: "og:description", content: "انضم كمتطوع أو سجّل للكشف المجاني في قوافل طبية جمعية رسالة." },
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
      <section className="relative flex min-h-svh flex-col overflow-hidden bg-hero text-hero-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-breathe absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-hero-accent/15 blur-3xl" />
          <div className="animate-breathe absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cta/25 blur-3xl [animation-delay:-3s]" />
          <div className="animate-breathe absolute right-10 top-24 h-72 w-72 rounded-full bg-hero-accent/10 blur-3xl [animation-delay:-5s]" />
          {[
            { c: "left-[8%] top-[22%] text-5xl", d: "0s", t: "＋" },
            { c: "right-[12%] top-[70%] text-4xl", d: "-4s", t: "＋" },
            { c: "left-[45%] top-[12%] text-3xl", d: "-2s", t: "＋" },
            { c: "left-[20%] bottom-[12%] text-6xl", d: "-6s", t: "＋" },
            { c: "right-[35%] bottom-[20%] text-2xl", d: "-1s", t: "＋" },
          ].map((f, i) => (
            <span key={i} className={`animate-float absolute font-black text-hero-accent/15 ${f.c}`} style={{ animationDelay: f.d }}>{f.t}</span>
          ))}
          {[
            "left-[30%] top-[30%] rotate-45",
            "right-[8%] top-[18%] -rotate-12",
            "left-[6%] bottom-[30%] rotate-12",
          ].map((c, i) => (
            <span key={i} className={`animate-float absolute h-5 w-12 rounded-full border-2 border-hero-accent/20 ${c}`} style={{ animationDelay: `${-i * 3}s` }} />
          ))}
          <span className="animate-ripple absolute left-[15%] top-[55%] h-24 w-24 rounded-full border border-hero-accent/30" />
          <span className="animate-ripple absolute right-[25%] top-[25%] h-32 w-32 rounded-full border border-cta/30 [animation-delay:-2s]" />
          <svg className="absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 text-hero-accent/40" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path className="animate-ecg" fill="none" stroke="currentColor" strokeWidth="2" pathLength={1}
              d="M0 50 H380 L400 50 L415 20 L430 85 L450 5 L470 95 L485 50 H700 L715 35 L730 60 L745 50 H1200" />
          </svg>
        </div>

        <nav className="relative z-10 mx-auto mt-6 flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between gap-4 rounded-full border border-hero-foreground/10 bg-hero-foreground/5 px-5 py-3 backdrop-blur">
          <span className="flex h-11 items-center rounded-xl bg-logo-surface px-2"><img src={resalaLogo.url} alt="شعار قوافل طبية جمعية رسالة" className="h-9 w-auto" /></span>
          <div className="hidden items-center gap-8 text-sm font-bold md:flex">
            <a href="#top" className="hover:text-hero-accent">الرئيسية</a>
            <a href="#about" className="hover:text-hero-accent">عن القوافل</a>
            <a href="#events" className="hover:text-hero-accent">الفعاليات</a>
            <a href="#services" className="hover:text-hero-accent">الخدمات</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#register" className="rounded-full bg-cta px-5 py-2 text-sm font-bold text-cta-foreground shadow-cta transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95">تطوّع معنا</a>
          </div>
        </nav>
        <div className="relative z-10 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-5xl flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold tracking-widest text-hero-foreground/60">فعاليات قادمة</span>
          {events.map((ev) => (
            <Link key={ev.slug} to="/events/$slug" params={{ slug: ev.slug }}
              className="group flex items-center gap-3 rounded-full border border-hero-accent/30 bg-hero-foreground/5 py-1.5 pe-4 ps-1.5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-hero-accent hover:bg-hero-accent/15 active:scale-95">
              <span className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-hero-accent text-hero leading-none">
                <span className="text-sm font-extrabold">{ev.day}</span>
              </span>
              <span className="text-sm font-bold">{ev.name} {ev.emoji}</span>
              <span className="text-xs text-hero-foreground/60">{ev.month}</span>
              <span className="transition-transform group-hover:-translate-x-1">←</span>
            </Link>
          ))}
        </div>

        <div id="top" className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-6 py-12 md:grid-cols-[2fr_3fr]">
          <div className="flex justify-center">
            <img
              src={shirtImg.url}
              alt="تيشرت قوافل طبية جمعية رسالة: إيد في إيد لإنقاذ حياة مريض"
              width={1280}
              height={853}
              className="w-full max-w-md rounded-3xl drop-shadow-glow transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>

          <div>
            <div className="border-s-2 border-hero-accent ps-4">
              <p className="text-sm font-bold text-hero-accent">إيد في إيد</p>
              <p className="mt-1 text-xl font-bold">لإنقاذ حياة مريض.</p>
            </div>
            <p dir="ltr" className="mt-8 text-right text-xs font-bold tracking-[0.35em] text-hero-accent">RESALA MEDICAL CARAVANS</p>
            <h1 className="mt-2 font-calligraphy text-7xl leading-[1.3] text-hero-foreground drop-shadow-glow md:text-8xl">
              قوافل طبية <span className="block text-hero-accent">جمعية رسالة</span>
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/70">خلف كل قافلة.. أطباء ومتطوعين، وخلف كل كشف.. حكاية.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#register" className="rounded-full bg-cta px-8 py-4 text-lg font-bold text-cta-foreground shadow-cta transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95">تطوّع معنا ●</a>
              <a href="#events" className="rounded-full border border-hero-foreground/20 px-6 py-3.5 font-bold">
                📅 {events[0]?.day} {events[0]?.month}
              </a>
            </div>
          </div>
        </div>
        <a href="#events" aria-label="انزل لأسفل" className="relative z-10 mx-auto mb-6 flex h-10 w-6 justify-center rounded-full border-2 border-hero-foreground/30 pt-2">
          <span className="animate-scroll-dot h-2 w-1 rounded-full bg-hero-accent" />
        </a>
      </section>

      <section id="events" className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-2">
        {events.map((ev) => (
          <Link
            key={ev.slug}
            to="/events/$slug"
            params={{ slug: ev.slug }}
            className="group flex flex-col justify-between gap-6 rounded-3xl border-2 border-primary bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cta hover:border-cta active:scale-[0.98]"
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
              <span className="rounded-full bg-primary px-7 py-3 text-center font-bold text-primary-foreground transition-colors group-hover:bg-cta">
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

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 pt-20 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">عن نشاط القوافل الطبية</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
            قوافل طبية <span className="text-primary">جمعية رسالة</span>.. الخير يوصل لحد باب البيت
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
