import countries from "world-countries";

const newCountries = countries.map((c) => ({
  value: c.cca2,
  label: c.name.common,
  flag: c.flag,
  latlng: c.latlng,
  region: c.region,
}));

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};
export const getAllCountries = () => newCountries;
export const getCountryByValue = (value: string) =>
  newCountries.find((c) => c.value === value);
