import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import {
  adminPanel,
  crossplatform,
  deliverlogo,
  mob,
  delivery,
  webDesign,
  website,
} from "../Images";
import { useMediaQuery } from "react-responsive";

export default function Deliver() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];
  const isCustomScreen = useMediaQuery({ maxWidth: 920 });

  return (
    <motion.section
      id="command"
      className="flex mt-14 mb-8 px-6 py-12 phone:mt-16 custom:mt-0 big:h-[750px] custom:h-[930px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-center h-[650px] pb-20 custom:flex-col custom:items-center gap-7">
          {!isCustomScreen && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-10 flex items-center justify-center"
            >
              <img
                src="https://udevs.io/static/delever_app-d50b0f5953ce60eec080bad20fe68a78.png"
                alt="teamIcon"
                height={407}
                width={547}
                className="custom:w-[300px] custom:h-[251px]"
              />
            </motion.div>
          )}

          <motion.div
            className="flex flex-col justify-between w-[547px] h-[581px] custom:items-center custom:w-[500px] phone:w-[440px] phone:h-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              width={252}
              height={49}
              src={deliverlogo}
              className="text-[64px] text-[#1b5bf7] leading-[64px] font-bold mb-11 custom:text-[32px] custom:text-center custom:leading-[20px]"
            />

            <span className="flex items-center rounded-2xl bg-[#ff562233] text-sm text-[#ff5722] py-1 px-4 font-medium text-center w-[117px] h-[36px] mb-4">
              <img
                src={delivery}
                width={25}
                height={25}
                className="mr-2"
                alt="delivery"
              />
              delivery
            </span>

            {isCustomScreen && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-10 flex items-center justify-center"
              >
                <img
                  src="https://udevs.io/static/delever_app-d50b0f5953ce60eec080bad20fe68a78.png"
                  alt="teamIcon"
                  height={407}
                  width={547}
                  className="custom:w-[300px] custom:h-[251px]"
                />
              </motion.div>
            )}
            <motion.h1
              className="mb-5 text-[24px] font-medium pt-5 h-[160px] text-[#464359] custom:text-[16px] custom:text-center custom:pb-7 custom:leading-[30px] custom:pt-0 custom:w-[380px] custom:[h-160px] custom:max-w-none"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.deliverService}
            </motion.h1>

            <h3 className="font-bold text-black text-[25px]">{t.whatDidWe}</h3>

            <div className="flex items-start w-[500px] my-[10px] gap-4 flex-wrap custom:w-[400px] custom:justify-center phone:items-center">
              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={website}
                  alt="website"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">Website</p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={adminPanel}
                  alt="adminPanel"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">
                  Admin panel
                </p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={crossplatform}
                  alt="crossplatform"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">
                  Crossplatform
                </p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={webDesign}
                  alt="webDesign"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">
                  Web design
                </p>
              </div>

              <div className="flex flex-col items-start justify-between bg-[#e0e8ff] p-[10px] w-[150px] h-[118px] rounded-lg custom:h-[110px]">
                <img
                  width={56}
                  height={56}
                  src={mob}
                  alt="mobileDesign"
                  className="custom:w-[42px] custom:h-[42px]"
                />
                <p className="text-lg font-semibold custom:text-sm">
                  Mobile design
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
