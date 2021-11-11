import React from "react";
import Link from "next/link";
import { FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="flex relative
     justify-center px-4 py-6 w-full md:px-12 bg-gray-200 dark:bg-[#1E2023] z-50 gap-5 mt-auto"
    >
      <h1
        dir="ltr"
        className="uppercase tracking-widest text-sm font-medium text-gray-800 dark:text-white"
      >
        @Computer Club
      </h1>
      <Link href="https://twitter.com/kfupm_cc">
        <a
          className="hover:text-[#1DA1F2] transition ease-in text-gray-800 dark:text-white"
          target="_blank"
        >
          <FaTwitter size={20} />
        </a>
      </Link>
      <Link href="https://sa.linkedin.com/company/kfupmcclub">
        <a
          className="hover:text-[#0072b1] transition ease-in text-gray-800 dark:text-white"
          target="_blank"
        >
          <FaLinkedin size={20} />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
