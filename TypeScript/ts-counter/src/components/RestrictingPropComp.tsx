// import React from "react";
type ValueType = {
  value: string;
};

type PositiveType = ValueType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeType = ValueType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type ZeroType = ValueType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberType = PositiveType | NegativeType | ZeroType;

const RestrictingPropComp = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumberType) => {
  return (
    <div>
      <p> value : {value} </p>
      {isPositive ? <p>It is positive{isPositive}</p> : ""}
      {isNegative ? <p>It is negative{isNegative}</p> : ""}
      {isZero ? <p> It is zero{isZero}</p> : ""}
    </div>
  );
};

export default RestrictingPropComp;
