import type { FC } from "react";
import Link from "next/link";
import RentalImage from "./rental/RentalImage";
import type { Rental as RentalModel } from "@prisma/client";
import Map from "./Map";

export type RentalProps = {
  rental: RentalModel;
};

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

function calculateType(rental: RentalModel) {
  if (COMMUNITY_CATEGORIES.includes(rental.category)) {
    return "Community";
  } else {
    return "Standalone";
  }
}

const Rental: FC<RentalProps> = ({ rental }) => {
  return (
    <article className="rental">
      <RentalImage
        src={rental.image}
        alt={`A picture of ${rental.title}`}
      />
      <div className="details">
        <h3>
          <Link href={`/rentals/${encodeURIComponent(rental.id)}`}>
            {rental.title}
          </Link>
        </h3>
        <div className="detail owner">
          <span>Owner:</span> {rental.owner}
        </div>
        <div className="detail type">
          <span>Type:</span> {calculateType(rental)}
        </div>
        <div className="detail location">
          <span>Location:</span> {rental.city}
        </div>
        <div className="detail bedrooms">
          <span>Number of bedrooms:</span> {rental.bedrooms}
        </div>
      </div>
      <Map
        lat={rental.lat}
        lng={rental.lng}
        zoom="9"
        width="150"
        height="150"
        alt={`A map of ${rental.title}`}
      />
    </article>
  );
};

export default Rental;
