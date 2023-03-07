import { navLinks } from "@common/utils/constants";
import Link from "next/link";
import { FunctionComponent } from "react";
import SearchInput from "../SearchInput";
import classes from "./Sidebar.module.scss";
import { Props } from "./types";

const Sidebar: FunctionComponent<Props> = ({ isOpen, toggleSidebar }) => {
  return (
    isOpen && (
      <nav className="flex flex-col justify-start lg:hidden bg-white shadow-lg px-[14px] py-[14px] items-center absolute w-[50%] h-screen top-0 left-0">
        <div
          onClick={toggleSidebar}
          className="w-full h-[30px] flex justify-end items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="w-full py-[10px] my-[10px] bg-gray-100">
          <SearchInput
            placeholder="Search here"
            customClass={classes.sidebarSearchInput}
          />
        </div>
        {navLinks.map((navLink) => (
          <Link
            className="font-normal text-[16px] text-grey-300 hover:text-grey-700 w-full flex justify-center py-[10px] hover:bg-gray-50"
            key={navLink.id}
            href={navLink.outLink}
          >
            {navLink.name}
          </Link>
        ))}
      </nav>
    )
  );
};

export default Sidebar;
