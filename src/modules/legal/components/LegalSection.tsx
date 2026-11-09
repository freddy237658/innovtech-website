interface Props {
  title: string;
  children: React.ReactNode;
}

export default function LegalSection({ title, children }: Props) {
  return (
    <section className="border-b border-slate-100 py-8 first:pt-0 last:border-0">
      <h2 className="text-xl font-bold text-[#071A3D] sm:text-2xl">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}