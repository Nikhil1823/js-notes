import { useState } from "react";
const userForm = () => {
  const [input, setInput] = useState("");
  const inputField = {
    value: input,
    onChange: (e) => setInput(e.target.value),
  };

  return [input, inputField];
};

export default userForm;
