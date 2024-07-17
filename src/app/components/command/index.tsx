"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import { useMediaQuery } from "react-responsive";

export default function Command() {
  const [count, setCount] = useState(0);
  const { state } = useLanguage();
  const t = translations[state.language as Language];
  const isCustomScreen = useMediaQuery({ maxWidth: 920 });

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 3;
    const increment = () => {
      if (start < end) {
        setCount(Math.min(start + Math.ceil(end / (duration * 60)), end));
        start += Math.ceil(end / (duration * 60));
        requestAnimationFrame(increment);
      }
    };

    increment();
  }, []);

  return (
    <motion.section
      id="command"
      className="flex mt-9 px-6 py-9 custom:mt-0 big:h-[750px] custom:h-[830px]  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container bg-[#f4f7ff]">
        <motion.h1
          className="text-[64px] text-[#1b5bf7] font-bold mb-11 custom:text-[32px] custom:text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.team}
        </motion.h1>

        {isCustomScreen && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-10 flex items-center justify-center"
          >
            <img
              src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg"
              alt="teamIcon"
              height={419}
              width={500}
              className="custom:w-[300px] custom:h-[251px]"
            />
          </motion.div>
        )}

        <div className="flex items-start justify-between pb-20 custom:flex-col custom:items-center">
          <motion.div
            className="flex flex-col justify-between gap-4 w-[547px] h-[351px] custom:w-auto custom:h-auto custom:items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1
              className="mb-5 text-[20px] font-medium w-[500px] h-[160px] text-[#464359] custom:text-[16px] custom:text-center custom:h-[90px] custom:w-[450px] phone:w-[370px] phonesm:w-[350px] px-2"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.project}
            </motion.h1>

            <div>
              <h1 className="text-[120px] font-bold leading-[96px] text-[#1b5bf7] custom:text-[80px]">
                {count}+
              </h1>
              <h2 className="text-[40px] font-bold text-[#464359]">
                {t.dedicatedTeam}
              </h2>
            </div>
          </motion.div>

          {!isCustomScreen && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <img
                src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg"
                alt="teamIcon"
                height={419}
                width={500}
                className="custom:w-[300px] custom:h-[251px]"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
