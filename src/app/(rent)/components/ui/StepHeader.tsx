import { FC } from "react";

interface StepHeaderProps {
  title: string;
  subtitle?: string;
}

export const StepHeader: FC<StepHeaderProps> = ({ title, subtitle }) => {
  return (
    <div>
      <div className="font-bold text-3xl text-slate-800">{title}</div>
      {subtitle && <div className="text-neutral-700 my-5">{subtitle}</div>}
    </div>
  );
};
