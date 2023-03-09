import { HomePageContext } from "@common/context/Home";
import { toSlug } from "@common/utils/helpers/global";
import Link from "next/link";
import { Fragment, FunctionComponent, useContext } from "react";
import Button from "../Button";
import SocialFooter from "./SocialFooter";
import { Props } from "./types";

const Footer: FunctionComponent<Props> = () => {
  const { homePageData } = useContext(HomePageContext);
  const { footerSection } = homePageData;
  return (
    <Fragment>
      <div
        data-cy="footer-section"
        className="min-h-[389px] flex flex-col lg:flex-row justify-between px-[40px] xl:px-[100px] xxl:px-[135px] lg:pt-[70px] bg-grey-700 text-white"
      >
        <div className="w-full lg:w-[60%] flex flex-wrap lg:flex-nowrap justify-between pr-[10px]">
          {footerSection?.sitemaps.map((sitemap) => (
            <div
              key={sitemap.id}
              className="flex flex-col pt-[70px] pr-[16px] md:pr-0 lg:pt-0"
            >
              <p className="font-medium text-xl pd-[22px] leading-[20px]">
                {sitemap.category}
              </p>
              <div className="flex flex-col justify-between pt-[22px]">
                {sitemap.outLinks.map((outLink, outLinkIndex) => (
                  <Link
                    className="font-normal text-[16px] text-grey-150 leading-[46px] tracking-[0.0125em]"
                    key={outLink + outLinkIndex}
                    href={encodeURIComponent(toSlug(outLink)!)}
                  >
                    {outLink}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[30%] py-[24px] lg:py-0 flex flex-col justify-between items-start lg:justify-start">
          <div className="w-full flex flex-col">
            <p className="font-medium text-xl leading-[32px] lg:max-w-[180px]">
              {footerSection?.title}
            </p>
            <p className="font-normal text-[16px] text-grey-150 pt-[18px] lg:max-w-[300px] leading-[28px]">
              {footerSection?.description}
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
