import type { InnovationStatus as StatusType } from "../data/innovationData";
import { useTranslation } from "react-i18next";

interface Props {
  status: StatusType;
  label: string;
}

const styles: Record<StatusType, string> = {
  available: "bg-green-50 text-green-700 ring-green-200",
  development: "bg-blue-50 text-blue-700 ring-blue-200",
  prototype: "bg-purple-50 text-purple-700 ring-purple-200",
  exploration: "bg-amber-50 text-amber-700 ring-amber-200",
};

export default function InnovationStatus({ status, label }: Props) {
  const { t } = useTranslation();

  return (
    <span
      className={`inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      {t(label)}
    </span>
  );
}