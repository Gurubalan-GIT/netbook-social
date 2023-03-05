import { navLinks } from "@common/utils/constants";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import Button from "../Button";
import classes from "./Navbar.module.scss";

const Navbar: FunctionComponent = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbarOnScroll = () => {
    if (window.scrollY >= 66) {
      setIsNavbarActive(true);
    } else {
      setIsNavbarActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbarOnScroll);
  });

  return (
    <nav className={classNames(classes.navbar, isNavbarActive && "bg-white")}>
      <div className={classes.navLeft}>
        <Image
          src="/assets/logos/netbook-logo.svg"
          alt="netbook-logo"
          width={143}
          height={34}
          priority
        />
        <div className={classes.navLinks}>
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link href={navLink.outLink}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.navRight}>
        <input placeholder="Search here" />
        <Button variant="primary">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
