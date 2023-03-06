import { socialIcons } from "@common/utils/constants";
import Image from "next/image";

const SocialFooter = () => {
  return (
    <div className="h-[96px] flex items-center px-[135px] text-white justify-between bg-[#20202D]">
      <p className="font-normal text-[14px] text-[#F6F6F6]">
        Besnik Creative Agency.
      </p>
      <Image
        src="/assets/logos/netbook-logo.svg"
        width={144}
        height={34}
        alt="netbook"
      />
      <div className="flex">
        {socialIcons.map((socialIcon) => (
          <div
            key={socialIcon.id}
            className="rounded-[50%] bg-white w-[36px] h-[36px] flex justify-center items-center ml-[8px]"
          >
            <Image
              src={socialIcon.icon}
              width={20}
              height={20}
              alt="social icons"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFooter;
