import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import { useMediaQuery } from "react-responsive";
import {
  android,
  apple,
  crossplatform,
  flutter,
  kotlin,
  swift,
} from "../Images";

export default function Mobile() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];
  const isCustomScreen = useMediaQuery({ maxWidth: 920 });

  return (
    <motion.section
      id="command"
      className="flex mt-9 px-6 py-9 custom:mt-0 big:h-[750px] custom:h-[930px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h1
          className="text-[64px] text-[#1b5bf7] leading-[64px] font-bold mb-11 custom:text-[32px] custom:text-center custom:leading-[40px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.devmobapp}
        </motion.h1>

        {isCustomScreen && (
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              <img
                src="https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png"
                alt="mobileapp"
                className="relative"
                height={563}
                width={500}
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center"
              >
                <img
                  src="https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png"
                  alt="hero2"
                  height={472}
                  width={500}
                  className="w-auto h-auto"
                />
              </motion.div>
            </div>
          </div>
        )}

        <div className="flex items-start justify-between pb-20 custom:flex-col custom:items-center custom:pb-0 gap-7 phone:pb-0">
          <motion.div
            className="flex flex-col gap-4 w-[547px] h-[351px] custom:w-auto custom:h-auto custom:items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1
              className="mb-5 text-[24px] font-medium w-[500px] pt-5 h-[160px] text-[#464359] custom:text-[16px] custom:text-center custom:h-[60px] phone:w-[450px] phonesm:w-[340px] phonesm:mb-9 "
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.collaborationStartUp}
            </motion.h1>

            <div className="flex items-start w-[500px] my-[10px] gap-4 custom:w-[450px] custom:justify-center">
              <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px] phonesm:w-[100px] ">
                <img width={56} height={56} src={apple} alt="apple" />
                <p className="text-lg font-semibold phone:text-sm">iOS</p>
              </div>
              <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px]">
                <img width={56} height={56} src={android} alt="apple" />
                <p className="text-lg font-semibold phone:text-sm">Android</p>
              </div>
              <div className="flex flex-col items-start justify-between bg-[#f4f7ff] p-[10px] w-[150px] h-[118px] rounded-lg phone:w-[110px]">
                <img width={56} height={56} src={crossplatform} alt="apple" />
                <p className="text-lg font-semibold phone:text-sm">
                  Crossplatform
                </p>
              </div>
            </div>

            <div>
              <motion.h1
                className="mb-5 text-[32px] font-bold text-[#464359] custom:text-[16px] custom:text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.technologies}
              </motion.h1>
              <div className="flex items-center gap-10 flex-wrap ">
                <div>
                  <img src={swift} alt="swift" />
                  <p className="text-[20px] font-semibold text-black">Swift</p>
                </div>
                <div>
                  <img src={kotlin} alt="kotlin" />
                  <p className="text-[20px] font-semibold text-black">Kotlin</p>
                </div>
                <div>
                  <img src={flutter} alt="flutter" />
                  <p className="text-[20px] font-semibold text-black">
                    Flutter
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {!isCustomScreen && (
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <img
                  src="https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png"
                  alt="mobileapp"
                  className="relative"
                  height={563}
                  width={500}
                />
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center"
                >
                  <img
                    src="https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png"
                    alt="hero2"
                    height={472}
                    width={500}
                    className="w-auto h-auto"
                  />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
