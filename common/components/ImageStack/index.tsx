import Image from "next/image";
import { FunctionComponent } from "react";
import classes from "./ImageStack.module.scss";
import { Props } from "./types";

const ImageStack: FunctionComponent<Props> = ({
  images,
  imageSize = 24,
  stackWidth,
}) => {
  return (
    <div
      style={{ minWidth: stackWidth ?? imageSize * images.length }}
      className={classes.memberStackContainer}
    >
      {images.map((image, imageIndex) => (
        <div
          key={image.id}
          className="absolute overflow-hidden rounded-[50%] border-[2px] border-solid border-white w-fit"
          style={{
            width: imageSize,
            height: imageSize,
            left: imageIndex > 0 ? imageIndex * (imageSize - 6) : 0,
          }}
        >
          <Image
            alt="image"
            src={image.url}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageStack;
