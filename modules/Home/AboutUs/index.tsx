import { featuresProvided } from "@common/utils/constants";
import SectionLayout from "layouts/SectionLayout";
import Image from "next/image";
import classes from "./About.module.scss";
const AboutUs = () => {
  return (
    <SectionLayout className={classes.aboutUsContainer}>
      <div className="w-full lg:w-1/2  flex flex-col pr-[12px]">
        <p className="font-normal text-lg text-blue-800">What is Netbook?</p>
        <h2 className="text-3xl sm:text-4xl text-blue-950 pt-[10px]">
          Why Join Netbook Social Network?
        </h2>
        <p className="pt-[16px] font-normal text-[16px] text-grey-300 leading-7">
          Recent surveys have indicated that small businesses recognize the need
          they have to connect with consumer.
        </p>
        <div className={classes.featureContainer}>
          <ul className={classes.featureList}>
            {featuresProvided.map((feature) => (
              <li key={feature.id}>{feature.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full pt-[30px] lg:pt-0 lg:w-1/2 flex flex-col sm:flex-row items-center justify-center">
        <div className="w-[200px] h-[183px] sm:w-[170px] sm:h-[280px] mb-[24px] sm:mt-0 relative rounded-[14px] overflow-hidden xl:min-w-[270px] xl:w-[270px] xl:h-[370px]">
          <Image
            src="/assets/images/about-us/office.png"
            alt="office video"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col sm:pl-[28px]">
          <div className="w-[200px] h-[183px] xl:w-[265px] xl:h-[238px] relative rounded-[14px] overflow-hidden mb-[24px]">
            <Image
              src="/assets/images/about-us/laptop.png"
              alt="office video"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[200px] h-[183px] xl:w-[265px] xl:h-[238px] relative rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/about-us/internet.png"
              alt="office video"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
