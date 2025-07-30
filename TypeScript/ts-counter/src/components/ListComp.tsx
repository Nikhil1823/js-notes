type listType = {
  item: (string | number)[];
};

const ListComp = ({ item }: listType) => {
  const onClickHandler = (val: string | number | object) => {
    console.log(val);
  };
  return (
    <div>
      <ul>
        {item.map((ele) => {
          return (
            <li key={ele} onClick={() => onClickHandler(ele)}>
              {ele}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListComp;
