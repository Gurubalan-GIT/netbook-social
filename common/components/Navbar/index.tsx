import Image from "next/image";
import { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
  return (
    <div className="h-[90px] flex justify-between w-full px-[135px] items-center">
      <Image
        src="/assets/logos/netbook-logo.svg"
        alt="netbook-logo"
        width={143}
        height={34}
      />
    </div>
  );
};

export default Navbar;
