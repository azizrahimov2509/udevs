"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/components/Header/styles.module.css";
import {
  logo,
  arrow,
  mobile,
  erpsystem,
  userinterface,
  itConsulting,
  optimization,
  d,
  i,
  s,
  g,
  eng,
  rus,
} from "@/app/components/Images/index";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import DropdownMenu from "../Dropdownmenu";

const Header: React.FC = () => {
  const { state, ChangeLanguage } = useLanguage();

  const t = translations[state.language as Language];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed px-3 py-4 border-b-2 border-gray-200 w-full bg-white ${styles} z-50`}
    >
      <div className={`container mx-auto `}>
        <header className={`${styles.header} `}>
          <div className="flex items-center justify-between">
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#home">
                <img
                  className="w-24 h-8"
                  width={96}
                  height={32}
                  src={logo}
                  alt={t.contact}
                />
              </a>
            </motion.nav>

            <div
              className={`flex items-center justify-between gap-9 ${styles.headline} hidden lg:flex`}
            >
              <ul
                className={`flex items-center justify-between gap-9 text-[#18191f] text-sm list-none font-bold ${styles.headlist}`}
              >
                <motion.li
                  className="pb-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#direction"
                    className="pb-3 hover:border-b-2 border-blue-500"
                  >
                    {t.direction}
                  </a>
                </motion.li>
                <motion.li
                  className="pb-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#command"
                    className="pb-3 hover:border-b-2 border-blue-500"
                  >
                    {t.command}
                  </a>
                </motion.li>

                <motion.li
                  className={`relative group pb-3`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex m-1">
                      <a href="#services">{t.services}</a>
                      <img src={arrow} alt={t.languages} />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 shadow text-[13px] font-400 transition-all duration-300 left-1/2 transform -translate-x-1/2 p-0 pb-4"
                    >
                      <p className="text-gray-500 mb-2 text-left py-3 pl-3">
                        {t.services}
                      </p>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white font-normal ">
                        <a href="#mobile" className="flex items-center w-full">
                          <img
                            className="w-12 h-12 mr-2"
                            src={mobile}
                            alt={t.mobile}
                          />
                          <span className="w-[210px]">{t.mobile}</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white w-full font-normal">
                        <a href="#erp" className="flex items-center w-full ">
                          <img
                            className="w-12 h-12 mr-2"
                            src={erpsystem}
                            alt={t.erp}
                          />
                          <span>{t.erp}</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white w-full font-normal">
                        <a href="#design" className="flex items-center w-full">
                          <img
                            className="w-12 h-12 mr-2"
                            src={userinterface}
                            alt={t.interface}
                          />
                          <span>{t.interface}</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white w-full font-normal">
                        <a
                          href="#consulting"
                          className="flex items-center w-full"
                        >
                          <img
                            className="w-12 h-12 mr-2"
                            src={itConsulting}
                            alt={t.consulting}
                          />
                          <span>{t.consulting}</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white w-full font-normal">
                        <a
                          href="#optimization"
                          className="flex items-center w-full"
                        >
                          <img
                            className="w-12 h-12 mr-2"
                            src={optimization}
                            alt={t.optimization}
                          />
                          <span className="">{t.optimization}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.li>

                <motion.li
                  className="pb-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#tools"
                    className="pb-3 hover:border-b-2 border-blue-500"
                  >
                    {t.tools}
                  </a>
                </motion.li>
                <motion.li
                  className="pb-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#clients"
                    className="pb-3 hover:border-b-2 border-blue-500"
                  >
                    {t.clients}
                  </a>
                </motion.li>
                <motion.li
                  className={`relative group pb-3 `}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex m-1">
                      <a href="#portfolio">{t.portfolio}</a>
                      <img src={arrow} alt={t.languages} className="ml-2" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 shadow text-[13px] from-neutral-400 transition-all duration-300 left-1/2 transform -translate-x-1/2 p-0 pb-4"
                    >
                      <p className="text-gray-500 mb-2 text-left py-3 pl-3">
                        {t.portfolio}
                      </p>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white font-normal">
                        <a
                          href="#deliver"
                          className="flex items-center w-full pl-7"
                        >
                          <img
                            className="w-12 h-12 mr-2"
                            src={d}
                            alt="deliver"
                          />
                          <span>Deliver</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white w-full font-normal">
                        <a
                          href="#sms-uz"
                          className="flex items-center w-full pl-7"
                        >
                          <img className="w-12 h-12 mr-2" src={s} alt="smsuz" />
                          <span>Sms.uz</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white w-full font-normal">
                        <a
                          href="#goodzone"
                          className="flex items-center w-full pl-7"
                        >
                          <img
                            className="w-12 h-12 mr-2"
                            src={g}
                            alt="goodzone"
                          />
                          <span>Goodzone</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-2 hover:bg-blue-500 hover:text-white w-full font-normal">
                        <a
                          href="#iman"
                          className="flex items-center w-full pl-7"
                        >
                          <img className="w-12 h-12 mr-2" src={i} alt="iman" />
                          <span>Iman</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.li>

                <motion.li
                  className={`relative group pb-3 `}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex  m-1">
                      <span>{t.languages}</span>
                      <img src={arrow} alt={t.languages} className="ml-2" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 shadow text-[13px] from-neutral-400 transform -translate-y-1 p-0 pb-2"
                    >
                      <li
                        className="flex items-center mb-2 hover:bg-blue-500 hover:text-white "
                        onClick={() => ChangeLanguage("eng")}
                      >
                        <div className="flex items-center w-full ">
                          <img
                            className="w-7 h-7 mr-2"
                            src={eng}
                            alt="English flag"
                          />
                          <span className="font-semibold text-base">Eng</span>
                        </div>
                      </li>
                      <li
                        className="flex items-center mb-2 hover:bg-blue-500 hover:text-white "
                        onClick={() => ChangeLanguage("ru")}
                      >
                        <div className="flex items-center w-full ">
                          <img
                            className="w-7 h-7 mr-2"
                            src={rus}
                            alt="Russian flag"
                          />
                          <span className="font-semibold text-base">Русс</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.li>
              </ul>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#contacts"
                  className="btn btn-primary px-4 py-[10px] w-[112px] h-[20px] text-white hover:scale-110"
                >
                  {t.contact}
                </Link>
              </motion.div>
            </div>

            <DropdownMenu />
          </div>
        </header>
      </div>
    </motion.div>
  );
};

export default Header;
