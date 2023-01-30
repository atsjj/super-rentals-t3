import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Jumbo from "../components/Jumbo";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Super Rentals</title>
        <meta name="description" content="Contact information for Super Rentals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbo>
        <h2>Contact Us</h2>
        <p>
          Super Rentals Representatives would love to help you<br/>
          choose a destination or answer any questions you may have.
        </p>
        <address>
          Super Rentals HQ
          <p>
            1212 Test Address Avenue<br/>
            Testington, OR 97233
          </p>
          <a href="tel:503.555.1212">+1 (503) 555-1212</a><br/>
          <a href="mailto:superrentalsrep@emberjs.com">superrentalsrep@emberjs.com</a>
        </address>
        <Link href="/about" className="button">About</Link>
      </Jumbo>
    </>
  );
};

export default About;
