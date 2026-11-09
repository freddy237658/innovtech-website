interface TechnologyBadgeProps {
  name: string;
}

export default function TechnologyBadge({
  name,
}: TechnologyBadgeProps) {
  return (
    <span className="inline-flex max-w-full items-center rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-[#071A3D] shadow-sm transition hover:border-blue-300 hover:bg-blue-50">
      <span className="mr-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
      <span className="break-words">{name}</span>
    </span>
  );
}