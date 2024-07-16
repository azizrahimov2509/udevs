import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import { useMediaQuery } from "react-responsive";
import {
  architecture,
  autoTesting,
  ciCd,
  cloud,
  develops,
  loadtesting,
  stressTesting,
} from "../Images";

export default function Optimization() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];

  return (
    <motion.section
      id="command"
      className="flex mt-16 px-6 py-9 h-[100vh] custom:h-[160vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container custom:flex flex-col items-center">
        <motion.h1
          className="text-[64px] text-[#1b5bf7] w-[450px] leading-[64px] font-bold mb-11 custom:text-[32px] custom:text-center custom:leading-[40px]  custom:w-[270px] phone:text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.optInfras}
        </motion.h1>

        <div className="flex items-start justify-between pb-20 custom:flex-col custom:items-center gap-7">
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              <img
                src="https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png"
                alt="mobileapp"
                className="relative"
                height={426}
                width={500}
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center"
              >
                <img
                  src="https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png"
                  alt="hero2"
                  height={297}
                  width={500}
                  className="w-auto h-auto"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            className="flex flex-col gap-4 w-[547px] h-[351px] custom:items-center custom:w-[500px] phone:w-[440px] phone:h-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1
              className="mb-5 text-[24px] font-medium pt-5 h-[160px] text-[#464359] custom:text-[16px] custom:text-center custom:h-[30px] custom:leading-[30px] custom:pt-0 custom:w-[380px] custom:max-w-none"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.exports}
            </motion.h1>

            <div className="flex items-start w-[500px] my-[10px] gap-4 flex-wrap custom:w-[400px] custom:justify-center phone:items-center">
              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={architecture}
                  alt="arc"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">
                  Architecture
                </p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={autoTesting}
                  alt="autotest"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">
                  Auto testing
                </p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={stressTesting}
                  alt="stresstesting"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">
                  Stress testing
                </p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={loadtesting}
                  alt="loadtest"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">
                  Load testing
                </p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={develops}
                  alt="develops"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">Devops</p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={cloud}
                  alt="cloud"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">Cloud</p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={ciCd}
                  alt="ciCd"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">CI/CD</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
