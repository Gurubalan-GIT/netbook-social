import Button from "@common/components/Button";
import Pill from "@common/components/Pill";
import SectionLayout from "layouts/SectionLayout";
import Image from "next/image";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <SectionLayout className={classes.heroContainer}>
      <div className="flex flex-col w-1/2 pr-[12px]">
        <Pill>Netbook Community</Pill>
        <h2 className="text-[56px] text-blue-950 leading-[66px] py-[20px]">
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
      <div className="w-1/2">
        <Image
          src="/assets/vectors/hero.svg"
          width={585}
          height={500}
          alt="hero"
          priority
        />
      </div>
    </SectionLayout>
  );
};

export default Hero;
