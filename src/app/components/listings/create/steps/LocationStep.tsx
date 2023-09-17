"use client";
import { CountrySelect } from "@/app/components/ui/CountrySelect";
import { CountrySelectValue } from "@/app/utils/countries";
import { FC } from "react";
import { MdOutlineLocationOn } from "react-icons/md";

interface LocationStepProps {
  location?: CountrySelectValue;
  onChange: (val: CountrySelectValue) => void;
}

const LocationStep: FC<LocationStepProps> = ({ location, onChange }) => {
  return (
    <div className="h-full w-full">
      <div className="font-bold text-xl text-slate-800">
        Where is your awesome place?
      </div>
      <div className="text-neutral-700 mb-5">Select a country</div>
      <CountrySelect location={location} onChange={onChange} />
      <div className="py-10 m-auto">
        <MdOutlineLocationOn size={90} color="#94a3b8" className="w-full" />
      </div>
    </div>
  );
};

export { LocationStep };
