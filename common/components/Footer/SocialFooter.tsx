import { socialIcons } from "@common/utils/constants";
import Image from "next/image";
import NetbookLogo from "../Vectors/NetbookLogo";

const SocialFooter = () => {
  return (
    <div className="min-h-[96px] py-[30px] md:py-0 flex flex-col md:flex-row items-center px-[20px] xl:px-[100px] xxl:px-[135px] text-white justify-between bg-[#20202D]">
      <p className="font-normal text-[14px] text-[#F6F6F6] pb-[20px] md:pd-0">
        Besnik Creative Agency.
      </p>
      <NetbookLogo textColor="#fff" />
      <div className="flex  pt-[20px] md:pt-0">
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
