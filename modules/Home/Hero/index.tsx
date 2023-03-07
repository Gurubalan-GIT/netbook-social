import Button from "@common/components/Button";
import Pill from "@common/components/Pill";
import classNames from "classnames";
import SectionLayout from "layouts/SectionLayout";
import Image from "next/image";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <SectionLayout className={classes.heroContainer}>
      <div className="flex flex-col w-full lg:w-1/2 pr-[12px] z-10 lg:z-0">
        <Pill>Netbook Community</Pill>
        <h2 className="text-[38px] sm:text-[56px] text-blue-950 leading-[44px] sm:leading-[66px] py-[20px]">
          Your Solutions For Community!
        </h2>
        <div className="text-[18px] font-normal">
          More than 2 billion people in over countries use Netbook to stay in
          touch with friends & family.
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
          <Image
            src="/assets/vectors/hero.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="hero"
            priority
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hero;
