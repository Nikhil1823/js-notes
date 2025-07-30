type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";
type ToastProp = {
  position:
    | "center"
    | Exclude<
        `${HorizontalPosition}-${VerticalPosition}`,
        "center-center" | "center-bottom"
      >;
};

const TemplateLiteralComp = ({ position }: ToastProp) => {
  return <div>{position}</div>;
};

export default TemplateLiteralComp;
