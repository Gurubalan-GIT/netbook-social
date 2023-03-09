import { HomePageContext } from "@common/context/Home";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const SocialFooter = () => {
  const { homePageData } = useContext(HomePageContext);
  const { footerSection } = homePageData;
  return (
    <div
      data-cy="social-footer-section"
      className="min-h-[96px] py-[30px] md:py-0 flex flex-col md:flex-row items-center px-[20px] xl:px-[100px] xxl:px-[135px] text-white justify-between bg-grey-800"
    >
      <p className="font-normal text-[14px] text-white pb-[20px] md:pb-0">
        {footerSection?.org}
      </p>
      {footerSection?.logo?.url && (
        <Image
          src={footerSection.logo.url}
          width={143}
          height={34}
          alt="Netbook logo"
        />
      )}
      <div className="flex  pt-[20px] md:pt-0">
        {footerSection?.socials?.map((social) => (
          <Link
            href={social.url}
            key={social.id}
            className="rounded-[50%] bg-white w-[36px] h-[36px] flex justify-center items-center ml-[8px]"
          >
            <Image
              src={social.icon.url}
              width={20}
              height={20}
              alt="social icons"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialFooter;
