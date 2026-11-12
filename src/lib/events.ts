import kmLogo from "@/assets/km_academy_logo.png.asset.json";
import medsideLogo from "@/assets/medside_logo.png.asset.json";
import drBeheiry from "@/assets/dr_ahmed_elbeheiry.png.asset.json";
import drIsmail from "@/assets/dr_ismail_ali.png.asset.json";
import drSaady from "@/assets/dr_ahmed_elsaady.png.asset.json";

export type CaravanEvent = {
  slug: string;
  name: string;
  emoji: string;
  subtitle: string;
  summary: string;
  intro: string;
  day: string;
  month: string;
  details: [string, string][];
  organizer?: string;
  partner?: { name: string; url?: string; logo?: string };
  instructors?: { ar: string; en: string; bio: string; photo?: string }[];
  mapUrl?: string;
  hasRegistration?: boolean;
  topics?: { ar: string; en: string }[];
  agenda?: { time: string; t: string; d: string }[];
  bring?: string[];
};

export const events: CaravanEvent[] = [
  {
    slug: "code-blue",
    name: "Code Blue",
    emoji: "🚑",
    subtitle: "تدريب الإسعافات الأولية والإنعاش القلبي الرئوي (CPR)",
    summary:
      "تدريب عملي على الإسعافات الأولية والإنعاش القلبي الرئوي مع مدربين معتمدين من جمعية القلب الأمريكية، بتنظيم قوافل طبية مدينة نصر وشركة MedSide.",
    intro:
      "تدريب عملي ينظمه نشاط قوافل طبية مدينة نصر بجمعية رسالة بالتعاون مع شركة MedSide، تتعلم فيه إزاي تتصرف صح في أول دقايق من أي حالة طوارئ: من تقييم المكان والمصاب لحد الإنعاش القلبي الرئوي ووضع الإفاقة.",
    day: "١٧",
    month: "نوفمبر",
    details: [
      ["📅 التاريخ", "الثلاثاء ١٧ نوفمبر ٢٠٢٦"],
      ["⏰ الوقت", "٤:٣٠ مساءً"],
      ["💳 رقم الدفع", "01091661816 (فودافون كاش / إنستاباي)"],
      ["📍 المكان", "مسرح رسالة – المقطم"],
      ["🤝 التنظيم", "قوافل طبية مدينة نصر × MedSide"],
    ],
    organizer: "قوافل طبية مدينة نصر",
    mapUrl: "https://maps.app.goo.gl/nEUoNHyRMLdrnTCY9",
    hasRegistration: true,
    partner: {
      name: "MedSide Company",
      url: "https://www.facebook.com/share/1PtzdbPcVA/?mibextid=wwXIfr",
      logo: medsideLogo.url,
    },
    instructors: [
      {
        ar: "د. أحمد البحيري",
        en: "Dr. Ahmed El-Beheiry",
        bio: "معيد بكلية الطب، ومدرب معتمد من جمعية القلب الأمريكية (AHA) والهلال الأحمر المصري واتحاد الأطباء العرب.",
        photo: drBeheiry.url,
      },
      {
        ar: "د. إسماعيل علي",
        en: "Dr. Ismail Ali",
        bio: "مدرب معتمد من المجلس الأوروبي للإنعاش (ERC) ومتخصص في الإنعاش القلبي الرئوي (CPR)، ومدرب معتمد من جمعية القلب الأمريكية (AHA).",
        photo: drIsmail.url,
      },
      {
        ar: "د. أحمد السعدي",
        en: "Dr. Ahmed El-Saady",
        bio: "مدرب معتمد للإسعافات الأولية ورعاية الطوارئ من جمعية القلب الأمريكية (AHA).",
        photo: drSaady.url,
      },
    ],
    topics: [
      { ar: "تقييم موقع الحادث والتأكد من سلامة المكان.", en: "Scene Assessment and Ensuring Scene Safety." },
      { ar: "فحص المصاب وتقييم مستوى الوعي.", en: "Patient Assessment and Level of Consciousness Evaluation." },
      { ar: "كيفية التعامل مع حالات الإغماء.", en: "Management of Fainting (Syncope)." },
      { ar: "كيفية التعامل مع حالات فقدان الوعي والغيبوبة.", en: "Management of Unconsciousness and Coma." },
      { ar: "فحص وتقييم النبض لدى البالغين والأطفال والرضع.", en: "Pulse Assessment in Adults, Children, and Infants." },
      { ar: "فحص وتقييم التنفس لدى البالغين والأطفال والرضع.", en: "Breathing Assessment in Adults, Children, and Infants." },
      {
        ar: "التعرف على حالات التوقف القلبي المفاجئ وكيفية التعامل معها (السكتة القلبية).",
        en: "Recognition and Management of Sudden Cardiac Arrest.",
      },
      { ar: "خطوات إجراء الإنعاش القلبي الرئوي (CPR).", en: "Cardiopulmonary Resuscitation (CPR) Techniques." },
      {
        ar: "كيفية التعامل مع حالات الاختناق لدى البالغين والأطفال والرضع.",
        en: "Management of Choking in Adults, Children, and Infants.",
      },
      {
        ar: "تصحيح المفاهيم الخاطئة حول ما يُعرف ببلع اللسان والتعامل الصحيح مع الحالة.",
        en: "Understanding and Managing Tongue-Related Airway Obstruction (Myths About “Swallowing the Tongue”).",
      },
      {
        ar: "كيفية وضع المصاب في وضع الإفاقة (Recovery Position).",
        en: "Placing an Unconscious, Breathing Patient in the Recovery Position.",
      },
    ],
  },
  {
    slug: "beyond-the-sample",
    name: "Beyond the Sample",
    emoji: "🧪",
    subtitle: "تدريب المعمليين نظرياً وعملياً",
    summary: "٣ أيام من المحاضرات النظرية والتطبيقات العملية والورش التدريبية للمعمليين، مع K&M Academy بفرع رسالة المقطم.",
    intro:
      "K&M Academy بالتعاون مع قوافل طبية مدينة نصر جمعية رسالة ❤️ — تجربة علمية متكاملة لمدة ٣ أيام تجمع بين الجانب النظري والعملي. هدفنا إننا نتجاوز مجرد دراسة العينات، ونحوّل المعرفة العلمية إلى مهارات وخبرات عملية حقيقية.",
    day: "١٤",
    month: "نوفمبر",
    details: [
      ["📅 التاريخ", "٣ أيام: ١٤ و١٥ و١٦ نوفمبر ٢٠٢٦"],
      ["⏰ الوقت", "٤:٣٠ مساءً يومياً"],
      ["📍 المكان", "فرع جمعية رسالة – المقطم"],
      ["🧪 المحتوى", "محاضرات نظرية، تطبيقات عملية وورش تدريبية"],
      ["💰 الرسوم", "٢٠٠ جنيه رسوم رمزية لتغطية الكيماويات والأدوات والأجهزة"],
      ["💳 الدفع", "في أول سيشن أوفلاين كاش، أو إنستاباي مع رفع سكرين التحويل"],
    ],
    organizer: "قوافل طبية مدينة نصر",
    mapUrl: "https://maps.app.goo.gl/pSqGbcgLFTFMPGeA9",
    partner: { name: "K&M Academy", url: "https://www.facebook.com/profile.php?id=61591742172213", logo: kmLogo.url },
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
