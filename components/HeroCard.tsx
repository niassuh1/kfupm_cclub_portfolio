import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Url } from "url";

interface HeroProps {
  href: string;
  src: string;
  title?: string;
  subtitle?: string;
  linkTitle?: string;
  dir?: "rtl" | "ltr";
}

const HeroCard: FC<HeroProps> = ({
  href,
  src,
  linkTitle,
  subtitle,
  title,
  dir = "rtl",
}) => {
  return (
    <div
      dir={dir}
      className="flex flex-col mx-auto px-6 justify-center items-center mb-12 md:flex-row md:px-2"
    >
      <span className="md:mx-9">
        <Image src={src} layout="intrinsic" width={270} height={300} alt="" />
      </span>
      <div className="flex flex-col justify-start">
        <h1 className="text-[30px] text-center my-4 font-bold md:text-start md:text-3xl">
          {title}
        </h1>
        <p className="text-center mb-4 md:text-start">{subtitle}</p>
        <h2 className="text-2xl text-center mb-4 md:text-start ">
          {linkTitle}
        </h2>
        <Link href={href}>
          <a
            className="bg-blue-500 mx-auto text-center dark:bg-opacity-20 border-blue-500 border-2 transition-colors ease-in-out 
            text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:border-blue-700 md:self-start md:mx-0"
          >
            اضغط هنا
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
