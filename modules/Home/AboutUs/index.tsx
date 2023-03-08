import { HomePageContext } from "@common/context/Home";
import classNames from "classnames";
import SectionLayout from "layouts/SectionLayout";
import Image from "next/image";
import { useContext } from "react";
import classes from "./About.module.scss";
const AboutUs = () => {
  const { homePageData } = useContext(HomePageContext);
  const { aboutSection } = homePageData;
  console.log(aboutSection);
  return (
    <SectionLayout data-cy="about-section" className={classes.aboutUsContainer}>
      <div className="w-full lg:w-1/2  flex flex-col pr-[12px]">
        <p className="font-normal text-lg text-blue-800">
          {aboutSection?.subTitle}
        </p>
        <h2 className="text-3xl sm:text-4xl text-blue-950 pt-[10px]">
          {aboutSection?.title}
        </h2>
        <p className="pt-[16px] font-normal text-[16px] text-grey-300 leading-7">
          {aboutSection?.description}
        </p>
        <div className={classes.featureContainer}>
          <ul className={classes.featureList}>
            {aboutSection?.featuresOffered?.map((feature, featureIndex) => (
              <li key={feature + featureIndex}>{feature}</li>
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
          {aboutSection?.featureImages?.map(
            (featureImage, featureImageIndex) => (
              <div
                key={featureImage?.id}
                className={classNames(
                  "w-[200px] h-[183px] xl:w-[265px] xl:h-[238px] relative rounded-[14px] overflow-hidden",
                  featureImageIndex === 0 && "mb-[24px]"
                )}
              >
                <Image
                  src={featureImage?.url}
                  alt={"feature image" + featureImageIndex}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
