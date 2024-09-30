import React from "react";

interface Props {
  title: string;
  subTitle: string;
  buttonText: string;
}

const CardItem = ({ title, subTitle, buttonText }: Props) => {
  return (
    <div className="text-white px-4 py-5 bg-sub-background rounded-lg mt-2">
      <p className="font-bold">{title}</p>
      <p className="text-sm">{subTitle}</p>
      <button className="text-black font-medium text-sm h-8 rounded-full bg-white mt-2">
        <span className="px-4 py-1">{buttonText}</span>
      </button>
    </div>
  );
};

export default CardItem;
