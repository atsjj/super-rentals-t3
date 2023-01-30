import type { FC, ComponentProps } from "react";

const RentalImage: FC<ComponentProps<"img">> = (props) => {
  return (
    <button type="button" className="image">
      <img {...props} />
      <small>View</small>
    </button>
  );
};

export default RentalImage;
