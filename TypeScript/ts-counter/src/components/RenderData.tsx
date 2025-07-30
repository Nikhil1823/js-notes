import { memo, type JSX } from "react";

type userData = {
  userId: string;
  title: string;
  body: string;
  id: string;
};
type props = {
  data: userData[];
};
const RenderData = ({ data }: props): JSX.Element => {
  console.log("rendering data again");

  return (
    <div>
      <h3>total count of entries : {data.length}</h3>
      {data.map((item: userData) => {
        return (
          <>
            <h2 key={item.title}>Title : {item.title} </h2>
            <h4 key={item.body}>Body : {item.body} </h4>
            <p key={item.id}>UserId : {item.userId} </p>
          </>
        );
      })}
    </div>
  );
};

export default memo(RenderData);
