import { HomePageContext } from "@common/context/Home";
import { toSlug } from "@common/utils/helpers/global";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import Button from "../Button";
import SearchInput from "../SearchInput";
import Sidebar from "../Sidebar";
import classes from "./Navbar.module.scss";

const Navbar: FunctionComponent = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { homePageData } = useContext(HomePageContext);
  const { navbarSection } = homePageData;

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

  const toggleSidebar = () =>
    setIsSidebarOpen((prevSidebarState) => !prevSidebarState);

  return (
    <nav
      data-cy="navbar"
      className={classNames(classes.navbar, isNavbarActive && "bg-white")}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Button
        data-cy="sidebar-toggle-btn"
        className="flex lg:hidden"
        onClick={toggleSidebar}
        variant="icon"
      >
        <span className="flex [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-grey-250">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </Button>
      <div className={classes.navLeft}>
        {navbarSection?.logo?.url && (
          <Image
            src={navbarSection.logo.url}
            width={143}
            height={34}
            alt="Netbook logo"
            priority
          />
        )}
        <div className={classes.navLinks}>
          <ul>
            {navbarSection?.navbarLinks.map((navLink, navLinkIndex) => (
              <li key={navLink + navLinkIndex}>
                <Link href={encodeURIComponent(toSlug(navLink)!)}>
                  {navLink}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.navRight}>
        <SearchInput placeholder="Search items" customClass="hidden lg:block" />
        <Button variant="primary">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
