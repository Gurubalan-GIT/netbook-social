import Button from "@common/components/Button";
import Pill from "@common/components/Pill";
import { HomePageContext } from "@common/context/Home";
import classNames from "classnames";
import SectionLayout from "layouts/SectionLayout";
import Image from "next/image";
import { useContext } from "react";
import classes from "./Hero.module.scss";

const Hero = () => {
  const { homePageData } = useContext(HomePageContext);
  const { heroSection } = homePageData;
  return (
    <SectionLayout data-cy="hero-section" className={classes.heroContainer}>
      <div className="flex flex-col w-full lg:w-1/2 pr-[12px] z-10 lg:z-0">
        <Pill>{heroSection?.subTitle}</Pill>
        <h2 className="text-[38px] sm:text-[56px] text-blue-950 leading-[44px] sm:leading-[66px] py-[20px]">
          {heroSection?.title}
        </h2>
        <div className="text-[18px] font-normal">
          {heroSection?.description}
        </div>
        <div className="flex pt-[42px]">
          <Button variant="primary">Add More</Button>
          <Button className="ml-[18px]" variant="outlined">
            Invite a friend
          </Button>
        </div>
      </div>
      <div className="justify-center lg:w-1/2 lg:flex">
        <div
          className={classNames(
            "absolute lg:relative w-[385px] h-[300px] overflow-hidden xl:w-[485px] xl:h-[485px] xxl:w-[585px] xxl:h-[500px]",
            classes.heroImageContainer
          )}
        >
          {heroSection?.image?.url && (
            <Image
              src={heroSection?.image?.url}
              fill
              style={{ objectFit: "contain" }}
              alt="hero"
              priority
            />
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hero;
