import { getCountryByValue } from "@/app/utils/countries";
import clsx from "clsx";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { MdOutlineSearch } from "react-icons/md";

export const SearchTrigger = () => {
  const params = useSearchParams();
  const location = params?.get("location");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestsLimit = Number(params?.get("guestsLimit"));

  const locationLabel = useMemo(
    () => (location ? getCountryByValue(location)?.label : "Anywhere"),
    [location]
  );

  const dateRange = useMemo(() => {
    if (startDate && endDate && startDate != endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return `${format(start, "d MMM")} - ${format(end, "d MMM")}`;
    }
    return "Any week";
  }, [startDate, endDate]);

  const guests = () => {
    if (guestsLimit) {
      return guestsLimit === 1
        ? `${guestsLimit} guest`
        : `${guestsLimit} guests`;
    }
    return "Add guests";
  };
  return (
    <>
      <div className="px-3 font-semibold text-ellipsis overflow-hidden">
        {locationLabel}
      </div>
      <div className="px-3 font-semibold truncate text-ellipsis overflow-hidden border-x-2 border-slate-300">
        {dateRange}
      </div>
      <div className="flex flex-row justify-between items-center">
        <span
          className={clsx(
            "my-auto px-3 text-ellipsis overflow-hidden",
            guestsLimit ? "font-semibold" : "text-slate-500"
          )}
        >
          {guests()}
        </span>
        <div className="rounded-full bg-purple-600 text-white p-2 -mr-3 mt-1">
          <MdOutlineSearch fontSize="1.25em" />
        </div>
      </div>
    </>
  );
};
