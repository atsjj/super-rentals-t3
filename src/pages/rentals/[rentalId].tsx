import { type NextPage } from "next";
import Head from "next/head";
import RentalDetailed from "../../components/rental/RentalDetailed";
import { useRouter } from "next/router";
import { api } from "../../utils/api";

const Rental: NextPage = () => {
  const router = useRouter();
  const ids = router.query.rentalId;
  const id = (Array.isArray(ids) ? ids[0] : ids) || "";
  const rental = api.rental.getRentalById.useQuery({ id });

  return (
    <>
      <Head>
        <title>Super Rentals, Rental {rental.data?.title}</title>
        <meta name="description" content={`Rental details for ${rental.data?.title || ""}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RentalDetailed rental={rental.data || undefined} />
    </>
  );
};

export default Rental;
