import Link from "next/link";
import type { FC } from "react";

const NavBar: FC = () => {
  return (
    <nav className="menu">
      <Link href="/" className="menu-index">
        <h1>SuperRentals</h1>
      </Link>
      <div className="links">
        <Link href="/about" className="menu-about">
          About
        </Link>
        <Link href="/contact" className="menu-contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
