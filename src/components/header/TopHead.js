
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Caveat } from "next/font/google";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const TopHead = () => {

const pathname = usePathname()

    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "miljo",
      name: "miljö",
    },
    {
      id: 2,
      link: "kooperativ",
      name: "kooperativ",
    },
    {
      id: 3,
      link: "pedagogik",
      name: "pedagogik",
    },
    {
      id: 4,
      link: "personalen",
      name: "personalen"
    },
    {
      id: 5,
      link: "mat",
      name: "mat"
    },
    {
      id: 6,
      link: "kontakt",
      name: "kontakt"
    },

  ];


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-greenDark fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <Logo />
        </h1>
      </div>

      <ul className="hidden md:flex items-center">
      
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link} className={pathname === '/' + link ? 'font-bold' : ''}>{name}</Link>
          </li>
        ))}
        <Link href="/kontakt" className={`bg-green rounded-md p-4 text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-greenDark from-black to-gray-800 text-gray-500">
           <Link href="/kontakt" className={`bg-green rounded-md p-4 text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
