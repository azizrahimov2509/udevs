"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import { fonon, deliver, smsuz, mytaxi, workly, maxtrack } from "../Images";

export default function Clients() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];

  const imagesRow1 = [
    "https://udevs.io/static/iman-2c2e81bf6f5a0705ae3e9dbf8560f9c7.svg",
    "https://udevs.io/static/akfaMedline-fe88dd91581c9c6632d27a3ab01d8c74.svg",
    fonon,
    deliver,
    "https://udevs.io/static/hamkorbank-22944e4e7603df533ba8474dc661be4f.svg",
    "https://udevs.io/static/hoshimov-d0e8ff897c3fb9805589f85d8928d628.svg",
    "https://udevs.io/static/hamkorbank-22944e4e7603df533ba8474dc661be4f.svg",
  ];

  const imagesRow2 = [
    "https://udevs.io/static/shefBurger-dd3f808ef23fe536d3e5b1e525222ab5.svg",
    smsuz,
    "https://udevs.io/static/rabota-57924f5c0b41fd9e8537f9a294abce89.svg",
    mytaxi,
    workly,
    maxtrack,
  ];

  return (
    <motion.section
      id="command"
      className="flex px-6 py-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h1
          className="text-[64px] text-[#1b5bf7] font-bold mb-11 custom:text-[32px] custom:text-center custom:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.ourclients}
        </motion.h1>

        <div className="h-[310px]">
          <div className="scroll-container  mb-4">
            <div className="scroll-left flex gap-5 pb-7 p-2 custom:p-0">
              {imagesRow1.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`logo-${index}`}
                  className="image-hover-effect rounded-2xl  w-[213px] h-[128px] custom:rounded-3xl custom:w-[160px] custom:h-[130px] phone:w-[130px] phone:h-[70px]"
                />
              ))}

              {imagesRow1.map((src, index) => (
                <img
                  key={`dup-${index}`}
                  src={src}
                  alt={`logo-${index}`}
                  className="image-hover-effect rounded-2xl  w-[213px] h-[128px] custom:rounded-3xl custom:w-[160px] custom:h-[130px] phone:w-[130px] phone:h-[70px]"
                />
              ))}
            </div>
          </div>

          <div className="scroll-container mt-6 ">
            <div
              className="scroll-right flex gap-5 p-2 custom:p-0
             "
            >
              {imagesRow2.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`logo-${index}`}
                  className="image-hover-effect rounded-2xl  w-[213px] h-[128px] custom:rounded-3xl custom:w-[160px] custom:h-[130px] phone:w-[130px] phone:h-[70px]"
                />
              ))}
              {imagesRow2.map((src, index) => (
                <img
                  key={`dup-${index}`}
                  src={src}
                  alt={`logo-${index}`}
                  className="image-hover-effect rounded-2xl  w-[213px] h-[128px] custom:rounded-3xl custom:w-[160px] custom:h-[130px] phone:w-[130px] phone:h-[70px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
