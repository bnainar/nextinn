"use client";
import { Button } from "@/app/components/ui/Button";
import { Calendar } from "@/app/components/ui/Calendar";
import { FC } from "react";
import { Range } from "react-date-range";

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  noOfDays: number;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: Date[];
}

const ListingReservation: FC<ListingReservationProps> = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  noOfDays,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="rounded-xl border-[1px] border-slate-400 overflow-hidden shadow-lg">
      <div className="flex items-end gap-1 px-6 py-4">
        <span className="text-2xl">${price}</span>
        <span className="text-neutral-700">night</span>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <div className="p-4 border-b-2 border-neutral-200">
        <Button
          variant="filled"
          width="full"
          isLoading={disabled}
          onClick={onSubmit}
        >
          Reserve
        </Button>
      </div>
      <div className="flex justify-between px-6 py-4 text text-neutral-600 font-normal">
        <span>
          ${price} x {noOfDays} nights
        </span>
        <span>${totalPrice}</span>
      </div>
      <hr />
      <div className="flex justify-between px-6 py-4 text-lg font-semibold">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export { ListingReservation };
