import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  link: string;
  children: ReactNode;
}

const SectionContainer = ({ title, link, children }: Props) => {
  return (
    <div className="pt-3">
      <div className="flex justify-between items-center px-[22px]">
        <h2 className="font-bold text-2xl">{title}</h2>
        <Link className="text-base-text text-sm" href={link}>
          Hiện tất cả
        </Link>
      </div>
      <div className="px-3 grid grid-cols-6">{children}</div>
    </div>
  );
};

export default SectionContainer;
