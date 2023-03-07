import AchievementCard from "@common/components/AchievementCard";
import Button from "@common/components/Button";
import MemberStack from "@common/components/MemberStack";
import { members } from "@common/utils/constants";
import SectionLayout from "layouts/SectionLayout";
import Image from "next/image";

const Achievements = () => {
  return (
    <SectionLayout className="py-[20px] lg:py-0 min-h-[510px] flex flex-col-reverse lg:flex-row">
      <div className="w-full justify-center lg:w-3/5 flex flex-wrap lg:flex-nowrap">
        <AchievementCard
          title="4.8 Rating"
          titleIcon={
            <Image
              src="/assets/vectors/star.svg"
              alt="star"
              width={24}
              height={24}
            />
          }
          description="More than 2 billion we people over countries use socibooks we to stay in touch with friends."
          subTitle={
            <p className="text-[16px] font-normal text-grey-250 group-hover:font-medium">
              +<span className="text-blue-800 font-semibold">836k</span> Members
            </p>
          }
          subTitleIcon={<MemberStack members={members} size={26} />}
          outLinkLabel="Join Our Community"
          outLink="https://www.awwwards.com/"
        />
        <AchievementCard
          title="Awwwards"
          titleIcon={
            <Image
              src="/assets/vectors/trophy.svg"
              alt="trophy"
              width={24}
              height={24}
            />
          }
          description="More than 2 billion we people over countries use Netbook we to stay in touch with friends."
          subTitle={
            <p className="text-[16px] font-normal text-grey-250 group-hover:font-medium">
              Best of <span className="text-blue-800 font-semibold">2021</span>{" "}
              on Github
            </p>
          }
          subTitleIcon={
            <Image
              src="/assets/vectors/github.svg"
              alt="github"
              width={24}
              height={24}
            />
          }
          outLinkLabel="Go To Awards"
          outLink="https://www.awwwards.com/"
        />
      </div>
      <div className="w-full lg:w-2/5 flex flex-col">
        <p className="font-normal text-lg text-blue-800">Our Achievements</p>
        <h2 className="text-4xl text-blue-950 pt-[10px]">
          We are Connecting You To The Digital Life.
        </h2>
        <p className="pt-[16px] font-normal text-[16px] text-grey-300 leading-7">
          The scope of Social Media becomes crucial as it helps the business to
          directly engage with their needs and wants.
        </p>
        <Button className="mt-[38px]" variant="primary">
          Discover me
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Achievements;
