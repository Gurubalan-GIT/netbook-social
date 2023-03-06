import classNames from "classnames";
import Link from "next/link";
import { FunctionComponent } from "react";
import classes from "./AchievementCard.module.scss";
import { Props } from "./types";

const AchievementCard: FunctionComponent<Props> = (props) => {
  const {
    title,
    titleIcon,
    subTitle,
    subTitleIcon,
    description,
    outLink,
    outLinkLabel,
  } = props;
  return (
    <Link href={outLink!} referrerPolicy="no-referrer">
      <div className={classNames(classes.achievementCardContainer, "group")}>
        {title && (
          <div className="flex items-center">
            {titleIcon}
            <p className="font-medium pl-3">{title}</p>
          </div>
        )}
        {subTitle && (
          <div className="flex items-center pt-[40px]">
            <div className={classes.subTitleIcon}>{subTitleIcon}</div>
            <div className="pl-[16px]">{subTitle}</div>
          </div>
        )}
        {description && (
          <div className="pt-[40px] text-gray-300 text-[16px] leading-[26px]">
            {description}
          </div>
        )}
        {outLink && (
          <div className="flex items-center pt-[40px] text-grey-400 group-hover:text-blue-800">
            <div className="pr-2 font-medium">{outLinkLabel}</div>
            <svg
              className="w-[10px] h-[10px]"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5625 5H8.4375"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-grey-400 group-hover:stroke-blue-800"
              />
              <path
                d="M5.625 2.1875L8.4375 5L5.625 7.8125"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-grey-400 group-hover:stroke-blue-800"
              />
            </svg>
          </div>
        )}
      </div>
    </Link>
  );
};

export default AchievementCard;
