import React, { useState } from "react";
import type { PropertyDataType } from "../../utils/dataFormater";
import InputElements from "../atoms/InputElements";
import { useMutation } from "react-query";
import { postData } from "../../utils/fecthData";
type PropsType = {
  details: PropertyDataType;
};
const PropertyUpdater: React.FC<PropsType> = ({ details }) => {
  const [propertyType, setPropertyType] = useState(details.property_type);
  const [price, setPrice] = useState(details.price);
  const [duration, setDuration] = useState(details.duration);
  const [location, setLocation] = useState(details.location);
  const [durationType, setDurationType] = useState(details.duration_type);
  const [rating, setRating] = useState(details.rating);
  const [address, setAddress] = useState(details.address);

  const mutation = useMutation({
    mutationFn: () => {
      console.log("initialising the update .....");

      return postData(
        {
          price: parseInt(price),
          duration: parseInt(duration),
          location,
          rating: parseInt(rating),
          address,
          duration_type: durationType,
          propertyType,
        },
        details.id
      );
    },
    onSuccess: () => console.log("data send successfully"),
    onError: () => console.log("error happened here"),
  });

  return (
    <div className="w-full">
      <InputElements
        label="Property Type"
        value={propertyType}
        onChangeHandler={setPropertyType}
      />
      <InputElements
        label="Location"
        value={location}
        onChangeHandler={setLocation}
      />
      <InputElements label="Price" value={price} onChangeHandler={setPrice} />
      <InputElements
        label="Duration"
        value={duration}
        onChangeHandler={setDuration}
      />

      <div className="w-full py-2">
        <label className="text-[16px]">Duration type :</label>
        <select
          name=""
          id=""
          className=" pl-2 text-[16px]"
          onChange={(e) => setDurationType(e.target.value)}
        >
          <option value="nights" className="text-[16px]">
            nights
          </option>
          <option value="day" className="text-[16px]">
            day
          </option>
        </select>
      </div>
      <InputElements
        label="Rating"
        value={rating}
        onChangeHandler={setRating}
      />
      <InputElements
        label="Address"
        value={address}
        onChangeHandler={setAddress}
      />
      <button
        className="rounded-xl p-2 bg-amber-400"
        onClick={() => mutation.mutate()}
      >
        Submit
      </button>
    </div>
  );
};

export default PropertyUpdater;
