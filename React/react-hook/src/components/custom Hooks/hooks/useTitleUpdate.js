import { useEffect } from "react";

const useTitleUpdate = (count) => {
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);
};

export default useTitleUpdate;
