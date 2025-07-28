import { useState } from "react";
const useInput = () => {
  const [field, setField] = useState("");
  const config = {
    value: field,
    onChange: (e) => setField(e.target.value),
  };
  const reset = () => {
    setField("");
  };

  return [config, field, reset];
};
export default useInput;
