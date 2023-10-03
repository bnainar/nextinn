"use client";
import { CountrySelectValue } from "@/app/utils/countries";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useMemo, useState } from "react";
import { Range } from "react-date-range";
import qs from "query-string";
import { formatISO } from "date-fns";
import { Button } from "../ui/Button";
import { CountrySelect } from "../ui/CountrySelect";
import dynamic from "next/dynamic";
import { Header } from "../ui/Header";
import { Calendar } from "../ui/Calendar";
import { Counter } from "../ui/Counter";
import { MdSearch } from "react-icons/md";
import { useSearchModalStore } from "@/app/stores/searchModalStore";

interface SearchProps {}

enum STEPS {
  LOCATION,
  DATE,
  INFO,
}

export const Search: FC<SearchProps> = ({}) => {
  const handleSeachModalChange = useSearchModalStore(
    (s) => s.handleSeachModalChange
  );
  const router = useRouter();
  const params = useSearchParams();
  const [location, setLocation] = useState<CountrySelectValue>();
  const [step, setStep] = useState(STEPS.LOCATION);
  const [guestsLimit, setGuestsLimit] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathCount, setBathCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handlePrevious = () => {
    setStep((step) => step - 1);
  };
  const onSubmit = () => {
    let currentQuery: any = {};
    if (params) currentQuery = qs.parse(params.toString());

    const newQuery: any = {
      ...currentQuery,
      location: location?.value,
      guestsLimit,
      roomCount,
      bathCount,
    };

    if (dateRange.startDate)
      newQuery.startDate = formatISO(dateRange.startDate);

    if (dateRange.endDate) newQuery.endDate = formatISO(dateRange.endDate);

    const newURL = qs.stringifyUrl(
      {
        url: "/",
        query: newQuery,
      },
      { skipNull: true }
    );
    handleSeachModalChange(false);
    router.push(newURL);
  };

  if (step === STEPS.LOCATION)
    return (
      <LocationSearchStep
        onNext={handleNext}
        location={location}
        setLocation={setLocation}
      />
    );
  if (step === STEPS.DATE)
    return (
      <DateSearchStep
        onPrev={handlePrevious}
        onNext={handleNext}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
    );
  if (step === STEPS.INFO)
    return (
      <div>
        <Header title="Find your perfect place" />

        <div>
          <Counter
            title="Rooms"
            subtitle="Total Rooms"
            value={roomCount}
            onChange={(val: number) => setRoomCount(val)}
          />
          <Counter
            title="Guests"
            subtitle="Number of Guests allowed"
            value={guestsLimit}
            onChange={(val: number) => setGuestsLimit(val)}
          />
          <Counter
            title="Bathrooms"
            subtitle="No. of bathrooms available"
            value={bathCount}
            onChange={(val: number) => setBathCount(val)}
          />
        </div>
        <div className="flex flex-row items-end float-right gap-5">
          <Button
            variant="outline"
            width="content"
            type="button"
            className="mt-3 text-center"
            onClick={handlePrevious}
          >
            Prev
          </Button>
          <Button
            variant="filled"
            width="content"
            className="mt-3 text-center"
            icon={MdSearch}
            onClick={onSubmit}
          >
            Search
          </Button>
        </div>
      </div>
    );
};

interface LocationParams {
  onNext: () => void;
  location?: CountrySelectValue;
  setLocation: (val: CountrySelectValue) => void;
}
const LocationSearchStep: FC<LocationParams> = ({
  onNext,
  location,
  setLocation,
}) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
  );
  return (
    <div className="h-[70vh] flex flex-col gap-5 -mt-5">
      <Header
        title="Where do you wanna go?"
        subtitle="Select your dream location"
      />
      <CountrySelect
        location={location}
        onChange={(val) => setLocation(val as CountrySelectValue)}
        placeholder="Anywhere"
      />
      <div className="h-[35vh] bg-slate-300 rounded-lg">
        <Map center={location?.latlng} />
      </div>
      <div className="flex flex-row items-end float-right gap-5">
        <Button
          variant="filled"
          width="content"
          className="mt-3 text-center"
          onClick={onNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
const DateSearchStep = ({
  onPrev,
  onNext,
  dateRange,
  setDateRange,
}: {
  onPrev: () => void;
  onNext: () => void;
  dateRange: Range;
  setDateRange: (value: Range) => void;
}) => {
  return (
    <div>
      <Calendar
        value={dateRange}
        onChange={(val) => setDateRange(val.selection)}
      />
      <div className="flex flex-row items-end float-right gap-5">
        <Button
          variant="outline"
          width="content"
          type="button"
          className="mt-3 text-center"
          onClick={onPrev}
        >
          Prev
        </Button>
        <Button
          variant="filled"
          width="content"
          className="mt-3 text-center"
          onClick={onNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
