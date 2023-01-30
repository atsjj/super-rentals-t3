import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "../utils/api";
import Jumbo from "../components/Jumbo";
import Rentals from "../components/Rentals";

const Home: NextPage = () => {
  const rentals = api.rental.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Super Rentals</title>
        <meta name="description" content="Super Rentals home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbo>
        <h2>Welcome to Super Rentals!</h2>
        <p>We hope you find exactly what you&apos;re looking for in a place to stay.</p>
        <Link href="/about" className="button">About Us</Link>
      </Jumbo>

      <Rentals rentals={rentals.data} />
    </>
  );
};

export default Home;
