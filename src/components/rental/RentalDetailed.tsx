import type { Rental as RentalModel } from "@prisma/client";
import type { FC } from "react";
import Jumbo from "../Jumbo";
import Map from "../Map";
import ShareButton from "../ShareButton";
import RentalImage from "./RentalImage";

export type RentalDetailedProps = {
  rental?: RentalModel;
};

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

function calculateType(rental?: RentalModel) {
  if (COMMUNITY_CATEGORIES.includes(rental?.category || "")) {
    return "Community";
  } else {
    return "Standalone";
  }
}

const RentalDetailed: FC<RentalDetailedProps> = ({ rental }) => {
  return (
    <>
      <Jumbo>
        <h2>{rental?.title}</h2>
        <p>Nice find! This looks like a nice place to stay near {rental?.city}.</p>
        <ShareButton
          text={`Check out ${rental?.title || ""} on Super Rentals!`}
          hashtags="vacation,travel,authentic,blessed,superrentals"
          via="emberjs"
        >
          Share on Twitter
        </ShareButton>
      </Jumbo>

      <article className="rental detailed">
        <RentalImage
          src={rental?.image}
          alt={`A picture of ${rental?.title || ""}`}
        />

        <div className="details">
          <h3>About {rental?.title}</h3>

          <div className="detail owner">
            <span>Owner:</span> {rental?.owner}
          </div>
          <div className="detail type">
            <span>Type:</span> {calculateType(rental)} – {rental?.category}
          </div>
          <div className="detail location">
            <span>Location:</span> {rental?.city}
          </div>
          <div className="detail bedrooms">
            <span>Number of bedrooms:</span> {rental?.bedrooms}
          </div>
          <div className="detail description">
            <p>{rental?.description}</p>
          </div>
        </div>

        <Map
          lat={rental?.lat}
          lng={rental?.lng}
          zoom="12"
          width="894"
          height="600"
          alt={`A map of ${rental?.title || ""}`}
          className="large"
        />
      </article>
    </>
  );
};

export default RentalDetailed;
