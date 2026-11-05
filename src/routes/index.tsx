import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "قوافل رسالة الطبية | كلية طب الأسنان" },
      { name: "description", content: "قافلة طبية لعلاج الأسنان مجاناً من جمعية رسالة بالتعاون مع طلاب كلية طب الأسنان." },
      { property: "og:title", content: "قوافل رسالة الطبية | كلية طب الأسنان" },
      { property: "og:description", content: "انضم كمتطوع أو احجز كشفاً مجانياً في قافلة رسالة لطب الأسنان." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { t: "كشف وتشخيص", d: "فحص شامل للفم والأسنان على يد أطباء وطلاب الامتياز." },
  { t: "حشو وتنظيف", d: "تنظيف الجير وحشوات مؤقتة ودائمة حسب الحالة." },
  { t: "خلع الأسنان", d: "خلع آمن للحالات البسيطة تحت إشراف أعضاء هيئة التدريس." },
  { t: "توعية صحية", d: "ورش للأطفال والكبار عن العناية اليومية بالأسنان." },
];

const steps = [
  { n: "١", t: "التسجيل", d: "سجّل اسمك كمتطوع أو كمستفيد." },
  { n: "٢", t: "التجهيز", d: "تدريب المتطوعين وتجهيز الأدوات والعيادة المتنقلة." },
  { n: "٣", t: "يوم القافلة", d: "استقبال الحالات والكشف والعلاج مجاناً." },
  { n: "٤", t: "المتابعة", d: "تحويل الحالات المحتاجة إلى عيادات الكلية." },
];

function Index() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground font-arabic">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-xl font-extrabold text-primary">رسالة · طب الأسنان</span>
        <a href="#register" className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">سجّل الآن</a>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">نشاط القوافل الطبية</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            ابتسامة لكل بيت.. <span className="text-primary">قافلة رسالة</span> لطب الأسنان
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            جمعية رسالة بالتعاون مع طلاب وأطباء كلية طب الأسنان تنظم قافلة طبية مجانية لخدمة أهالي القرى والمناطق الأكثر احتياجاً.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#register" className="rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground">انضم كمتطوع</a>
            <a href="#services" className="rounded-full border border-border px-7 py-3 font-bold">الخدمات</a>
          </div>
        </div>
        <div className="rounded-3xl bg-secondary p-8 shadow-soft">
          <h2 className="text-lg font-bold text-secondary-foreground">تفاصيل الحدث</h2>
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

      <section className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
          {[["+٥٠٠", "مستفيد متوقع"], ["+٨٠", "متطوع"], ["١٥", "طبيب مشرف"], ["٤", "خدمات علاجية"]].map(([n, l]) => (
            <div key={l}><div className="text-4xl font-extrabold">{n}</div><div className="mt-1 opacity-80">{l}</div></div>
          ))}
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
        <p className="mt-4 text-lg text-muted-foreground">سواء كنت طالباً متطوعاً أو تحتاج إلى كشف مجاني، تواصل معنا وسجّل اسمك.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert("تم استلام طلبك، شكراً لك!"); }} className="mt-8 grid gap-3 text-right sm:grid-cols-2">
          <input required placeholder="الاسم بالكامل" className="rounded-xl border border-input bg-background px-4 py-3" />
          <input required placeholder="رقم الموبايل" className="rounded-xl border border-input bg-background px-4 py-3" />
          <select className="rounded-xl border border-input bg-background px-4 py-3 sm:col-span-2">
            <option>متطوع (طالب بالكلية)</option>
            <option>مستفيد (أحتاج كشفاً)</option>
          </select>
          <button className="rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground sm:col-span-2">إرسال</button>
        </form>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        جمعية رسالة للأعمال الخيرية · فريق كلية طب الأسنان © ٢٠٢٦
      </footer>
    </div>
  );
}
