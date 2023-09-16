import { IconType } from "react-icons/lib";
import {
  MdOutlineBeachAccess,
  MdOutlineVilla,
  MdOutlinePool,
} from "react-icons/md";
import { TbWindmill } from "react-icons/tb";
import { SiForestry } from "react-icons/si";
import { GiIsland } from "react-icons/gi";
import { TbBuildingCottage } from "react-icons/tb";
import { LiaSkiingSolid } from "react-icons/lia";

export type Category = {
  label: string;
  icon: IconType;
};
export const categories: Category[] = [
  {
    label: "Beach",
    icon: MdOutlineBeachAccess,
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
  },
  {
    label: "Windmill",
    icon: TbWindmill,
  },
  {
    label: "Countryside",
    icon: TbBuildingCottage,
  },
  {
    label: "Pools",
    icon: MdOutlinePool,
  },
  {
    label: "Islands",
    icon: GiIsland,
  },
  {
    label: "Lake",
    icon: SiForestry,
  },
  {
    label: "Skiing",
    icon: LiaSkiingSolid,
  },
];
