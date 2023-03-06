import { footerLinks } from "@common/utils/constants";
import { toSlug } from "@common/utils/helpers/global";
import Link from "next/link";
import { Fragment } from "react";
import Button from "../Button";
import SocialFooter from "./SocialFooter";

const Footer = () => {
  return (
    <Fragment>
      <div className="h-[389px] flex justify-between px-[135px] pt-[70px] bg-[#2B2B39] text-white">
        <div className="w-[60%] flex justify-between pr-[10px]">
          {footerLinks.map((link) => (
            <div key={link.id} className="flex flex-col">
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
        <div className="w-[30%] flex flex-col items-start justify-start">
          <p className="font-medium text-xl leading-[32px] max-w-[180px]">
            Subscribe To Our Newsletter
          </p>
          <p className="font-normal text-[16px] text-[#E7E7E7] pt-[18px] max-w-[300px] leading-[28px]">
            Subscribe to be the first one to know about updates. Enter your
            email
          </p>
          <div className="flex relative rounded-[12px] border-[1px] border-solid border-[rgba(255, 255, 255, 0.85)] mt-[32px]">
            <input
              placeholder="Email Address"
              className="outline-none border-none bg-transparent w-[210px] px-[24px] py-[18px] text-white"
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
