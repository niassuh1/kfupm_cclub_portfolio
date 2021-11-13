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
  blob?: string;
  dir?: "rtl" | "ltr";
}

const HeroCard: FC<HeroProps> = ({
  href,
  src,
  linkTitle,
  subtitle,
  title,
  blob = "/images/blob1.svg",
  dir = "rtl",
}) => {
  return (
    <div
      dir={dir}
      className="relative flex flex-col mx-auto px-6 justify-center items-center mb-12 md:flex-row md:px-9"
    >
      <div className="relative  hidden lg:block">
        <span className="absolute left-[500px] right-[500px] top-[-200px] opacity-40">
          <Image src={blob} layout="fixed" width={400} height={450} alt="" />
        </span>
      </div>

      <span className="relative md:mx-9 z-10">
        <Image src={src} layout="intrinsic" width={390} height={380} alt="" />
      </span>
      <div className="flex flex-col justify-start z-10">
        <h1 className="text-[30px] text-center my-4 font-bold md:text-start md:text-3xl lg:text-[2.5rem]">
          {title}
        </h1>
        <p className="text-center mb-4 md:text-start md:text-lg z-10 lg:text-xl">
          {subtitle}
        </p>
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
