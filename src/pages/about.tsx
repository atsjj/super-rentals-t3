import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Jumbo from "../components/Jumbo";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Super Rentals</title>
        <meta name="description" content="About the Super Rentals website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbo>
        <h2>About Super Rentals</h2>
        <p>
          The Super Rentals website is a delightful project created to explore
          Ember. By building a property rental site, we can simultaneously
          imagine traveling AND building Ember applications.
        </p>
        <Link href="/contact" className="button">
          Contact Us
        </Link>
      </Jumbo>
    </>
  );
};

export default About;
