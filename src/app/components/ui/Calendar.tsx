import { FC } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
interface CalendarProps {
  value: Range;
  disabledDates: Date[];
  onChange: (value: RangeKeyDict) => void;
}

const Calendar: FC<CalendarProps> = ({ value, disabledDates, onChange }) => {
  return (
    <DateRange
      rangeColors={["#262626", "blue"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
      className="bg-slate-100"
    />
  );
};

export { Calendar };
