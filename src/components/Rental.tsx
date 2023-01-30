import type { Rental as RentalModel } from "@prisma/client";
import Link from "next/link";
import type { FC } from "react";
import Map from "./Map";
import RentalImage from "./rental/RentalImage";
import RentalType from "./RentalType";

export type RentalProps = {
  rental: RentalModel;
};

const Rental: FC<RentalProps> = ({ rental }) => {
  return (
    <article className="rental">
      <RentalImage src={rental.image} alt={`A picture of ${rental.title}`} />
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
          <span>Type:</span> <RentalType category={rental.category} />
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
