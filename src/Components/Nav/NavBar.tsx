import React, { useState } from "react";
import logo from "../../../src/Assets/Images/Logo.svg";
import tabler_help from "../../../src/Assets/Images/tabler_help.svg";
import tabler_account from "../../../src/Assets/Images/tabler_account.svg";
import { Link } from "react-router-dom";
import "tw-elements";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [showCompany, setShowCompany] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="w-[full] h-[70px] bg-white flex items-center justify-center">
      <nav className="border-gray-200 dark:border-gray-600 dark:bg-gray-900 w-[1140px] h-full">
        <div className="h-full flex justify-between px-1 ">
          <div className="flex h-full">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                SOMOS
              </span>
            </a>
            <button
              id="mega-menu-full-image-button"
              data-collapse-toggle="mega-menu-full-image"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full-image"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="mega-menu-full-image"
              className="h-full ml-[40px] hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            >
              <ul className="h-full flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <div className="h-full flex items-center ">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    onMouseEnter={() => {
                      setShowCompany(true);
                    }}
                    onMouseLeave={() => {
                      setShowCompany(false);
                    }}
                    className="h-full flex items-center "
                  >
                    <button
                      id="mega-menu-full-cta-image-button"
                      data-collapse-toggle="mega-menu-full-image-dropdown"
                      className="flex  justify-between items-center py-5 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Company{" "}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="h-full flex items-center ">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Marketplace
                    </a>
                  </div>
                </li>
                <li>
                  <div className="h-full flex items-center ">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Resources
                    </a>
                  </div>
                </li>
                <li>
                  <div className="h-full flex items-center ">
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[380px] h-full flex">
            <div
              onMouseEnter={() => {
                setShowLanguage(true);
              }}
              onMouseLeave={() => {
                setShowLanguage(false);
              }}
              className="w-[120px] h-full flex  justify-center mx-1 mt-[15px]"
            >
              {!showLanguage && (
                <div className="cursor-pointer flex w-[115px] h-[40px] rounded-full border-[1px] border-gray-300 items-center justify-center shadow-sm">
                  English
                </div>
              )}
              {showLanguage && (
                <div className="cursor-pointer bg-white flex w-[115px] h-[80px] rounded-2xl border-[1px] border-gray-300 justify-center">
                  <div>
                    <div className="w-full h-[40px] flex items-center justify-center">
                      English
                    </div>
                    <div className="w-full h-[40px] flex items-center justify-center">
                      Espain
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="cursor-pointer w-[240px] h-full flex items-center justify-center hover:scale-105 ">
              <div className="uppercase flex w-[230px] h-[45px] rounded-full bg-cyan-600 hover:bg-cyan-800 text-white items-center justify-center">
                iniciar un negocio
              </div>
            </div>
          </div>
        </div>
        {showCompany && (
          <div
            onMouseEnter={() => {
              setShowCompany(true);
            }}
            onMouseLeave={() => {
              setShowCompany(false);
            }}
            id="mega-menu-full-image-dropdown"
            className="mt-[-1px] bg-white border-gray-200 drop-shadow-2xl dark:bg-gray-800 dark:border-gray-600 rounded-xl"
          >
            <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
              <ul
                className="hidden mb-4 space-y-4 md:mb-0 md:block"
                aria-labelledby="mega-menu-full-image-button"
              >
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Online Stores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Segmentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Marketing CRM
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Online Stores
                  </a>
                </li>
              </ul>
              <ul className="mb-4 space-y-4 md:mb-0">
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Our Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    License
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Resources
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                // style={"background-image: url(/docs/images/dashboard-overview.png)"}
              >
                <p className="mb-5 max-w-xl font-extrabold tracking-tight leading-tight text-white">
                  Preview the new Flowbite dashboard navigation.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                >
                  Get started
                  <svg
                    className="ml-1 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* <div className="section  flex items-center">
        <div className="mark w-[50px]"></div>
        <div className="Name w-[150px]">SOMOS</div>
        <div className="bar">
          <div className="mx-[10px]">Companies</div>
          <div className="mx-[10px]">Accounting</div>
          <div className="mx-[10px]">FAQ</div>
          <div className="mx-[10px]">News</div>
          <div className="mx-[10px]">Contact</div>
        </div>
      </div>

      <div className="right section ">
        <div className="langbtn w-[120px]">
          <div className="w-[118px]">

          </div>
        </div>
        <div className="startbusiness w-[240px]"></div>
      </div> */}
    </div>
  );
};

export default NavBar;
