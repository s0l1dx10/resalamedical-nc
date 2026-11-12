export type CodeBluePackage = {
  id: "attendance" | "basic" | "local" | "international";
  title: string;
  price: number;
  oldPrice?: string;
  features: string[];
};

export const codeBluePackages: CodeBluePackage[] = [
  { id: "attendance", title: "حضور التدريب فقط", price: 50, features: ["حضور التدريب بدون شهادات"] },
  {
    id: "basic",
    title: "شهادة + كارنيه الشركة",
    price: 220,
    features: ["شهادة وكارنيه من شركة التدريب بختم الشركة", "مسلسلة بسيريال نمبر ومسجلة على الموقع الرسمي"],
  },
  {
    id: "local",
    title: "الباقة المحلية المعتمدة",
    price: 350,
    oldPrice: "١٨٥٠ ج",
    features: [
      "شهادة معتمدة من جهة نقابية",
      "شهادة معتمدة من شركة التدريب بسيريال نمبر على موقعها الرسمي",
      "كارنيه معتمد من الشركة",
    ],
  },
  {
    id: "international",
    title: "الشهادة الدولية AACME",
    price: 550,
    oldPrice: "٩٥ دولار",
    features: [
      "معتمدة دولياً من الجمعية الأمريكية للتعليم الطبي المستمر",
      "معتمدة بكورسين BLS + First Aid",
      "معتمدة Credit-hours ونقاط CME",
      "صالحة مدى الحياة (Long Life – not expired)",
    ],
  },
];

export function getPackage(id: string) {
  return codeBluePackages.find((p) => p.id === id);
}
