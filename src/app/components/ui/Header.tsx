import { FC } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="text-3xl font-normal pt-5 pb-2">{title}</h2>
      {subtitle && <p className="text-neutral-500 text-lg">{subtitle}</p>}
    </div>
  );
};
