import React, {
  useState,
  MouseEvent,
  useEffect,
  MouseEventHandler,
} from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdChevronLeft } from "react-icons/md";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import Button from "./Button";
import RoundedButton from "./RoundedButton";
import { useThemeContext } from "../context/ThemeContext";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { toggleTheme, theme } = useThemeContext()!;

  const handleOpen = (e: MouseEvent) => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex relative transition-colors ease-in-out justify-between items-center p-4 z-50  dark:text-white lg:p-0 lg:px-12 lg:pt-2">
      <Link href="/">
        <a className="flex items-center">
          <Image width="40" height="40" alt="logo" src="/images/logo.svg" />
          <span className="text-[10px] font-bold lg:text-[13px]">
            نادي الحاسب الالي
          </span>
        </a>
      </Link>
      <Button className="lg:hidden" onClick={handleOpen}>
        <FaBars />
      </Button>
      <Nav isOpen={isOpen}>
        <button
          onClick={handleOpen}
          className="self-end transition-colors ease-in-out active:bg-gray-300 rounded-br-lg p-2 dark:active:bg-opacity-10 lg:hidden"
        >
          <MdChevronLeft size="25" />
        </button>
        <NavItem href="/">الرئيسية</NavItem>
        <NavItem href="/about">مين حنا</NavItem>
        <NavItem href="/achievements">إنجازات</NavItem>
        <NavItem href="/members">الاعضاء</NavItem>
        <NavItem href="/contact">التواصل</NavItem>
        <RoundedButton
          className="text-yellow-500 dark:text-yellow-400"
          onClick={toggleTheme}
        >
          {theme !== "dark" ? <FaMoon /> : <FaSun />}
        </RoundedButton>
      </Nav>
    </header>
  );
};

const Nav: React.FC<{ isOpen?: boolean }> = ({ children, isOpen }) => {
  const [pos, setPos] = useState(1);
  return (
    <nav
      className={`flex left-0 fixed bg-white top-0 transform ${
        isOpen ? "" : "-translate-x-full"
      } transition ease-in-out h-screen  shadow-md dark:bg-[#222328] lg:relative lg:h-auto lg:bg-transparent lg:transform-none lg:dark:bg-transparent lg:shadow-none`}
    >
      <ul className="flex flex-col gap-4 text-center items-center mx-auto lg:flex-row">
        {children}
      </ul>
    </nav>
  );
};

const NavItem: React.FC<LinkProps> = (props) => {
  const { asPath } = useRouter();

  const pathMatch = props.href.toString() == asPath;

  return (
    <li className="flex mx-10 lg:mx-5">
      <Link href={props.href}>
        <a
          className={`px-3 py-2  lg:py-4 font-semibold text-sm border-b-2 ${
            pathMatch ? "border-blue-600" : "border-transparent "
          }`}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};
