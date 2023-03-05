import { featuresProvided } from "@common/utils/constants";
import SectionLayout from "layouts/SectionLayout";
import Image from "next/image";
import classes from "./About.module.scss";
const AboutUs = () => {
  return (
    <SectionLayout className={classes.aboutUsContainer}>
      <div className="flex flex-col w-1/2 pr-[12px]">
        <p className="font-normal text-lg text-blue-800">What is Netbook?</p>
        <h2 className="text-4xl text-blue-950 pt-[10px]">
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
      <div className="w-1/2 flex items-center">
        <div className="w-[270px] h-[368px] relative rounded-[14px] overflow-hidden">
          <Image
            src="/assets/images/about-us/office.png"
            alt="office video"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col pl-[28px]">
          <div className="w-[265px] h-[238px] relative rounded-[14px] overflow-hidden mb-[24px]">
            <Image
              src="/assets/images/about-us/laptop.png"
              alt="office video"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-[265px] h-[238px] relative rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/about-us/internet.png"
              alt="office video"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
