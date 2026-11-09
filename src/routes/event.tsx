import { createFileRoute, Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/event")({
  head: () => ({
    meta: [
      { title: "يوم صحة الأسنان المجاني | قوافل رسالة" },
      { name: "description", content: "فعالية يوم صحة الأسنان من جمعية رسالة وكلية طب الأسنان: كشف مجاني، تنظيف، وتوعية للأطفال والكبار." },
      { property: "og:title", content: "يوم صحة الأسنان المجاني | قوافل رسالة" },
      { property: "og:description", content: "احجز مكانك في يوم صحة الأسنان المجاني مع طلاب وأطباء كلية طب الأسنان." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventPage,
});

const details = [
  ["📅 التاريخ", "الجمعة ٢٠ نوفمبر ٢٠٢٦"],
  ["⏰ الوقت", "٩ صباحاً – ٣ عصراً"],
  ["📍 المكان", "مبنى كلية طب الأسنان – القاعة الرئيسية"],
  ["💰 التكلفة", "مجاناً بالكامل"],
];

const agenda = [
  { time: "٩:٠٠", t: "الاستقبال والتسجيل", d: "استلام رقم الدور وفتح ملف لكل حالة." },
  { time: "٩:٣٠", t: "الكشف والتشخيص", d: "فحص شامل للفم والأسنان وتحديد خطة العلاج." },
  { time: "١١:٠٠", t: "العلاج", d: "تنظيف جير، حشوات، وخلع للحالات البسيطة." },
  { time: "١:٠٠", t: "ركن الأطفال", d: "ورشة تفاعلية عن طريقة تنظيف الأسنان الصحيحة." },
  { time: "٢:٣٠", t: "التحويل والمتابعة", d: "تحويل الحالات المحتاجة إلى عيادات الكلية." },
];

const bring = [
  "صورة البطاقة الشخصية أو شهادة الميلاد للأطفال",
  "أي أشعة أو تقارير سابقة للأسنان",
  "قائمة بالأدوية التي تتناولها حالياً",
  "الحضور قبل موعدك بـ ١٥ دقيقة",
];

function EventPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground font-arabic">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-extrabold text-primary">رسالة · طب الأسنان</Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/" className="rounded-full border border-border px-5 py-2 text-sm font-bold">← الرجوع للرئيسية</Link>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">فعالية قادمة</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">يوم صحة الأسنان المجاني 🦷</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-90">
            يوم كامل من الكشف والعلاج والتوعية المجانية، ينظمه فريق جمعية رسالة مع طلاب وأطباء كلية طب الأسنان. الدعوة عامة للكبار والأطفال.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold">برنامج اليوم</h2>
          <ol className="mt-8 space-y-4">
            {agenda.map((a) => (
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
            {bring.map((b) => (
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
            {details.map(([k, v]) => (
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
        جمعية رسالة للأعمال الخيرية · فريق كلية طب الأسنان © ٢٠٢٦
      </footer>
    </div>
  );
}
