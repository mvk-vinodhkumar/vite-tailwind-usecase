import React, { useState } from "react"
import logo from "../assets/logo.svg"
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"
import { navLinks } from "../constants/index"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={logo}
        alt="hoobank logo"
        className="w-[124px] h-[32px] object-contain"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => {
          return (
            <li
              key={link.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[30px] h-[30px] object-contain"
          onClick={() => setToggle((prevState) => !prevState)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={link.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  } text-white`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
