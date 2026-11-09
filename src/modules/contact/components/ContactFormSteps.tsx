import { Check } from "lucide-react";

interface Props {
  currentStep: number;
}

const steps = [
  "Votre demande",
  "Les détails",
  "Confirmation",
];

export default function ContactFormSteps({ currentStep }: Props) {
  return (
    <div className="mb-9">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const number = index + 1;
          const completed = currentStep > number;
          const active = currentStep === number;

          return (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition ${
                    completed || active
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {completed ? <Check size={19} /> : number}
                </div>

                <span
                  className={`mt-2 hidden text-xs font-semibold sm:block ${
                    active ? "text-blue-600" : "text-slate-400"
                  }`}
                >
                  {step}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`mx-2 mb-5 h-1 flex-1 rounded-full sm:mx-4 ${
                    completed ? "bg-blue-600" : "bg-slate-100"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}