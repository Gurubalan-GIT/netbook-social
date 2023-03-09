import AchievementCard from "@common/components/AchievementCard";
import Button from "@common/components/Button";
import MemberStack from "@common/components/ImageStack";
import { HomePageContext } from "@common/context/Home";
import SectionLayout from "layouts/SectionLayout";
import Image from "next/image";
import { useContext } from "react";

const Achievements = () => {
  const { homePageData } = useContext(HomePageContext);
  const { achievementSection } = homePageData;
  return (
    <SectionLayout
      data-cy="achievements-section"
      className="py-[20px] lg:py-0 min-h-[510px] flex flex-col-reverse lg:flex-row"
    >
      <div className="w-full justify-center lg:w-3/5 flex flex-wrap lg:flex-nowrap">
        {achievementSection?.achievements.map((achievement) => (
          <AchievementCard
            key={achievement?.id}
            title={achievement?.title}
            titleIcon={
              <Image
                src={achievement?.titleIcon?.url}
                alt="star"
                width={24}
                height={24}
              />
            }
            description={achievement.description}
            subTitle={achievement?.subTitle}
            subTitleIcon={
              <MemberStack images={achievement.iconStack} imageSize={26} />
            }
            outLinkLabel={achievement?.outLinkLabel}
            outLink={achievement?.url}
          />
        ))}
      </div>
      <div className="w-full lg:w-2/5 flex flex-col">
        <p className="font-normal text-lg text-blue-800">
          {achievementSection?.subTitle}
        </p>
        <h2 className="text-4xl text-blue-950 pt-[10px]">
          {achievementSection?.title}
        </h2>
        <p className="pt-[16px] font-normal text-[16px] text-grey-300 leading-7">
          {achievementSection?.description}
        </p>
        <Button className="mt-[38px]" variant="primary">
          Discover me
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Achievements;
