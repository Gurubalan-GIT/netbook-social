import Image from "next/image";
import { FunctionComponent } from "react";
import classes from "./MemberStack.module.scss";
import { Props } from "./types";

const MemberStack: FunctionComponent<Props> = ({ members, size = 24 }) => {
  return (
    <div className={classes.memberStackContainer}>
      {members.map((member) => (
        <div
          key={member.id}
          className="absolute overflow-hidden rounded-[50%] border-[2px] border-solid border-white"
          style={{
            width: size,
            height: size,
            left: member.id > 1 ? (member.id - 1) * (size - 6) : 0,
          }}
        >
          <Image
            alt="member"
            src={member.imageSrc}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default MemberStack;
