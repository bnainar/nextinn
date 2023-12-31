import { CountrySelectValue, getAllCountries } from "@/app/utils/countries";
import { FC } from "react";
import Select from "react-select";

interface CountrySelectProps {
  location?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
  placeholder?: string;
}

export const CountrySelect: FC<CountrySelectProps> = ({
  location,
  onChange,
  placeholder = "Select a country",
}) => {
  return (
    <div>
      <Select
        placeholder={placeholder}
        value={location}
        onChange={(newValue: any) => onChange(newValue)}
        isClearable
        isSearchable
        menuPosition="absolute"
        options={getAllCountries() as CountrySelectValue[]}
        formatOptionLabel={(c: CountrySelectValue) => (
          <div className="flex gap-2">
            <div>{c.label}</div>
            <div>({c.region})</div>
          </div>
        )}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "#7e22ce",
            primary25: "#d8b4fe",
          },
        })}
      />
    </div>
  );
};
