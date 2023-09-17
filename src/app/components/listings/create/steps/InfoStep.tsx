"use client";
import { Counter } from "@/app/components/ui/Counter";
import { SchemaKeys } from "@/app/types/NewListingTypes";
import { FC } from "react";

interface InfoStepProps {
  roomInfo: { guest: any; room: any; bathroom: any };
  changeFormValue: (id: SchemaKeys, val: any) => void;
}

const InfoStep: FC<InfoStepProps> = ({ roomInfo, changeFormValue }) => {
  return (
    <div>
      <div className="font-bold text-xl text-slate-800">
        Share some info about your place
      </div>
      <div className="text-neutral-700 mb-5">Such as room counts, etc.</div>
      <div>
        <Counter
          title="Rooms"
          subtitle="Total Rooms"
          value={roomInfo.room}
          label="roomCount"
          changeFormValue={changeFormValue}
        />
        <Counter
          title="Guests"
          subtitle="Number of Guests allowed"
          value={roomInfo.guest}
          label="guestsLimit"
          changeFormValue={changeFormValue}
        />
        <Counter
          title="Bathrooms"
          subtitle="No. of bathrooms available"
          value={roomInfo.bathroom}
          label="bathCount"
          changeFormValue={changeFormValue}
        />
      </div>
    </div>
  );
};

export { InfoStep };
