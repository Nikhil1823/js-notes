import React, { useState } from "react";

type Config = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const userForm = (): [string, Config] => {
  const [input, setInput] = useState("");
  const config = {
    value: input,
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void =>
      setInput(e.target.value),
  };

  return [input, config];
};

export default userForm;
