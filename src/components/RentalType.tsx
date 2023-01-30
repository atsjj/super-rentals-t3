import type { FC } from "react";

export type RentalTypeProps = {
  category?: string;
};

const COMMUNITY_CATEGORIES = ["Condo", "Townhouse", "Apartment"];

const RentalType: FC<RentalTypeProps> = ({ category }) => {
  const type = COMMUNITY_CATEGORIES.includes(category || "")
    ? "Community"
    : "Standalone";

  return <>{type}</>;
};

export default RentalType;
