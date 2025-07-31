import React from "react";

type PolymorphicOwnType<HtmlType extends React.ElementType> = {
  as: "div" | HtmlType;
  children: React.ReactNode;
};

type PolyMorphicType<HtmlType extends React.ElementType> =
  PolymorphicOwnType<HtmlType> &
    Omit<React.ComponentProps<HtmlType>, keyof PolymorphicOwnType<HtmlType>>;

const PolyMorphicComp = <HtmlType extends React.ElementType>({
  as,
  children,
  ...rest
}: PolyMorphicType<HtmlType>) => {
  const Component = as || "div";
  return (
    <div>
      <Component {...rest}>{children}</Component>
    </div>
  );
};

export default PolyMorphicComp;
