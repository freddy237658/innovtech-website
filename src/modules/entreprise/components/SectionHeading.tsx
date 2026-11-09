import { useTranslation } from "react-i18next";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  const { t } = useTranslation();

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
        {t(eyebrow)}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#071A3D] sm:text-4xl">
        {t(title)}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600">
          {t(description)}
        </p>
      )}
    </div>
  );
}