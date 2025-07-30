// import type { JSX } from "react";

type StatusProp = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProp) => {
  let message: string;
  if (props.status == "loading") {
    message = "Loading ....";
  } else if (props.status == "success") {
    message = "process completed successfully";
  } else {
    message = "Error happened try again";
  }
  return <h2>Status : {message}</h2>;
};

export default Status;
