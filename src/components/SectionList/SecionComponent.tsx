import { trackType } from "@/types/track.type";
import SectionItem from "./SectionItem";

type Props = {
  titel: string;
  url: string;

};
export default function SectionComponent({ titel}: Props) {
  return (
    <div className="pt-3">
      <div className="flex justify-between items-center px-[22px]">
        <h2 className="font-bold text-2xl">{titel}</h2>
        <a className="text-base-text text-sm" href="">
          Hiện tất cả
        </a>
      </div>
      <div className="px-3">
        <SectionItem />
      </div>
    </div>
  );
}
