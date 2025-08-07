import React from "react";

type ElementProps = {
  label: string;
  value: string;

  onChangeHandler: React.Dispatch<React.SetStateAction<string>>;
};
const InputElements = ({ label, value, onChangeHandler }: ElementProps) => {
  return (
    <div className="w-full">
      <label htmlFor="" className="text-[16px]">
        {label}:
      </label>
      <input
        type="text"
        value={value}
        className=" w-full bg-amber-100 text-xl p-1 pl-2"
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default InputElements;
