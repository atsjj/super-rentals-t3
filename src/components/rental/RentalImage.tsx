/* eslint-disable @next/next/no-img-element */
import { useState, type ComponentProps, type FC } from "react";

const RentalImage: FC<ComponentProps<"img">> = (props) => {
  const [isLarge, setIsLarge] = useState(false);

  return (
    <button
      type="button"
      className={`image ${isLarge ? "large" : ""}`}
      onClick={() => setIsLarge(!isLarge)}
    >
      <img alt="rental image" {...props} />
      <small>View {isLarge ? "Smaller" : "Larger"}</small>
    </button>
  );
};

export default RentalImage;
