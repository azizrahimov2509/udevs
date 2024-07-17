"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import { useMediaQuery } from "react-responsive";
import { architecture, back, develops, front, qa, uXUi } from "../Images";

export default function ItConsulting() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];
  const isCustomScreen = useMediaQuery({ maxWidth: 920 });

  return (
    <motion.section
      id="command"
      className="flex mt-9 px-6 py-6 custom:mt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container ">
        <motion.h1
          className="text-[64px] text-[#1b5bf7] font-bold mb-11 custom:text-[32px] custom:text-center custom:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.consulting}
        </motion.h1>

        {isCustomScreen && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-10 flex items-center justify-center"
          >
            <img
              src="https://udevs.io/static/consulting-41b53d1dd307a65f09f8017660a0304c.svg"
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
              className="mb-5 text-[24px] font-medium w-[500px] h-[160px] text-[#000] custom:text-[16px] custom:text-center custom:h-[40px] custom:w-[450px] phone:w-[370px] phonesm:w-[350px] px-2"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.impqualific}
            </motion.h1>

            <div>
              <div className="flex items-start w-[500px] my-[10px] gap-4 custom:w-[450px] flex-wrap custom:justify-center ">
                <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px] phonesm:w-[100px] ">
                  <img width={56} height={56} src={front} alt="front" />
                  <p className="text-lg font-semibold phone:text-sm">
                    Frontend
                  </p>
                </div>

                <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px]">
                  <img width={56} height={56} src={back} alt="back" />
                  <p className="text-lg font-semibold phone:text-sm">Backend</p>
                </div>

                <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px]">
                  <img
                    width={56}
                    height={56}
                    src={architecture}
                    alt="architecture"
                  />
                  <p className="text-lg font-semibold phone:text-sm">
                    Architecture
                  </p>
                </div>

                <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px]">
                  <img width={56} height={56} src={develops} alt="develops" />
                  <p className="text-lg font-semibold phone:text-sm">DevOps</p>
                </div>

                <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px]">
                  <img width={56} height={56} src={uXUi} alt="uXUi" />
                  <p className="text-lg font-semibold phone:text-sm">UX/UI</p>
                </div>

                <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px]">
                  <img width={56} height={56} src={qa} alt="qa" />
                  <p className="text-lg font-semibold phone:text-sm">QA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {!isCustomScreen && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <img
                src="https://udevs.io/static/consulting-41b53d1dd307a65f09f8017660a0304c.svg"
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
