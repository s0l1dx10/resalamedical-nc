import lineLogo from "@/assets/resala_nasr_city_line_logo.png.asset.json";
import colorLogo from "@/assets/resala_medical_emblem.png.asset.json";

/** Resala logo: full-color version in light mode, white line-art in dark mode. */
export function SiteLogo({ className = "h-11 w-auto" }: { className?: string }) {
  const alt = "شعار قوافل طبية جمعية رسالة - مدينة نصر";
  return (
    <>
      <img src={colorLogo.url} alt={alt} className={`${className} dark:hidden`} />
      <img src={lineLogo.url} alt={alt} className={`${className} hidden dark:block`} />
    </>
  );
}
