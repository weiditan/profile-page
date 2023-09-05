"use client";

import ButtonTheme from "@/components/ButtonTheme";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";

const NavHeader = () => {
  const [
    isDropdownActive,
    setDropdownActive,
  ] = useState(false);

  const scrollIntoView = (targetId?: string) => {
    let topPosition = 0;
    const topOffset = 100;

    if (targetId) {
      const element = document.getElementById(targetId);
      topPosition = element?.offsetTop - topOffset;
    }

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  const headerSizeClass = "min-h-[64px] w-full mb-4";
  const headerMenuList = [
    {
      label: "Experience",
      onClick: () => {
        scrollIntoView("experience");
        setDropdownActive(false);
      },
    },
    {
      label: "Education",
      onClick: () => {
        scrollIntoView("education");
        setDropdownActive(false);
      },
    },
    {
      label: "Skill",
      onClick: () => {
        scrollIntoView("skill");
        setDropdownActive(false);
      },
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full z-30 ${!isDropdownActive ? "hidden" : ""}`}
        onClick={() => setDropdownActive(false)}
      />
      <nav
        className={headerSizeClass + " fixed top-0 z-40 bg-white dark:bg-black"}
      >
        <div className="border-b border-gray-300 dark:border-white">
          <div className="container p-4 flex flex-wrap items-center justify-between">
            <button
              onClick={
                () => {
                  scrollIntoView();
                  setDropdownActive(false);
                }
              }
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PROFILE</span>
            </button>
            <div className="flex gap-10 items-center">
              <div
                className="hidden md:block"
                id="navbar-default"
              >
                <ul
                  className="font-medium flex gap-8"
                >
                  {
                    headerMenuList.map((menu, index) => {
                      return (
                        <li key={index}>
                          <button
                            onClick={menu.onClick}
                          >
                            {menu.label}
                          </button>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <ButtonTheme />
              <button
                className="md:hidden"
                onClick={() => setDropdownActive(!isDropdownActive)}
              >
                <FaBars
                  className="md:hidden"
                  size={20}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={`${!isDropdownActive ? "hidden" : ""} md:hidden border-b border-gray-300 dark:border-white`}>
          <ul
            className="container px-4 font-medium"
          >
            {
              headerMenuList.map((menu, index) => {
                return (
                  <li key={index}>
                    <button
                      className={`py-3 w-full text-left ${headerMenuList.length !== (index + 1) ? "border-b border-gray-300 dark:border-white" : ""} `}
                      onClick={menu.onClick}
                    >
                      {menu.label}
                    </button>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </nav>
      <div className={headerSizeClass} />
    </>
  );
};

export default NavHeader;