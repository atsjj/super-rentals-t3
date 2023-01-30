import type { Rental as RentalModel } from "@prisma/client";
import { useState, type FC } from "react";
import Rental from "./Rental";

export type RentalsProps = {
  rentals?: RentalModel[];
};

const Rentals: FC<RentalsProps> = ({ rentals }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="rentals">
      <label>
        <span>Where would you like to stay?</span>
        <input
          value={query}
          className="light"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </label>
      <ul className="results">
        {rentals
          ?.filter((rental) => rental.title.toLowerCase().includes(query))
          .map((rental) => (
            <li key={rental.id}>
              <Rental rental={rental} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Rentals;
