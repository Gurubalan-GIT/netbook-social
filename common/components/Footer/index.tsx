import { footerLinks } from "@common/utils/constants";
import { toSlug } from "@common/utils/helpers/global";
import Link from "next/link";
import { Fragment } from "react";
import Button from "../Button";
import SocialFooter from "./SocialFooter";

const Footer = () => {
  return (
    <Fragment>
      <div className="min-h-[389px] flex flex-col lg:flex-row justify-between px-[40px] xl:px-[100px] xxl:px-[135px] lg:pt-[70px] bg-[#2B2B39] text-white">
        <div className="w-full lg:w-[60%] flex flex-wrap lg:flex-nowrap justify-between pr-[10px]">
          {footerLinks.map((link) => (
            <div
              key={link.id}
              className="flex flex-col pt-[70px] pr-[16px] md:pr-0 lg:pt-0"
            >
              <p className="font-medium text-xl pd-[22px] leading-[20px]">
                {link.category}
              </p>
              <div className="flex flex-col justify-between pt-[22px]">
                {link.outLinks.map((outLink) => (
                  <Link
                    className="font-normal text-[16px] text-[#E7E7E7] leading-[46px] tracking-[0.0125em]"
                    key={outLink.id}
                    href={encodeURIComponent(toSlug(outLink.name)!)}
                  >
                    {outLink.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[30%] py-[24px] lg:py-0 flex flex-col justify-between items-start lg:justify-start">
          <div className="w-full flex flex-col">
            <p className="font-medium text-xl leading-[32px] lg:max-w-[180px]">
              Subscribe To Our Newsletter
            </p>
            <p className="font-normal text-[16px] text-[#E7E7E7] pt-[18px] lg:max-w-[300px] leading-[28px]">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
          </div>
          <div className="flex relative rounded-[12px] border-[1px] border-solid border-[rgba(255, 255, 255, 0.85)] mt-[32px]">
            <input
              placeholder="Email Address"
              className="outline-none border-none bg-transparent w-full lg:w-[150px] xl:w-[210px] px-[24px] py-[18px] text-white"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </div>
      <SocialFooter />
    </Fragment>
  );
};

export default Footer;
