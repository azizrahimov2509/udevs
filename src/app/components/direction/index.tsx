"use client";
import React from "react";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import {
  erp,
  erpsystem,
  interfaceBig,
  itconBig,
  itConsulting,
  mob,
  mobile,
  optimbig,
  optimization,
  team,
  userinterface,
} from "../Images";
import { motion } from "framer-motion";
import Image from "next/image";

function Direction() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];

  return (
    <motion.section
      id="direction"
      className="flex mt-7 px-6 py-7 custom:mt-0 big:h-[860px] custom:h-[780px] phone:h-[1500px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex flex-col items-start justify-between custom:items-center custom:justify-center">
          <motion.h1
            className="text-[64px] text-[#1b5bf7] font-extrabold mb-11 custom:text-[32px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.ourservices}
          </motion.h1>
          <div className="flex items-center gap-2 flex-wrap custom:justify-around">
            <motion.div
              className="w-[350px] h-[209px] bg-[#f4f7ff] mb-2 rounded-xl p-8 custom:w-[250px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Image
                src={team}
                width={35}
                height={35}
                alt="photo"
                className="mb-5"
              />
              <h3 className="text-xl font-semibold text-[#18191f] custom:text-base">
                {t.team}
              </h3>
            </motion.div>
            <motion.div
              className="w-[350px]  h-[209px] bg-[#f4f7ff] mb-2 rounded-xl p-8 custom:w-[250px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Image
                src={mob}
                width={35}
                height={35}
                alt="photo"
                className="mb-5"
              />
              <h3 className="text-xl font-semibold text-[#18191f] custom:text-base">
                {t.mobile}
              </h3>
            </motion.div>
            <motion.div
              className="w-[350px]  h-[209px] bg-[#f4f7ff] mb-2 rounded-xl p-8 custom:w-[250px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Image
                src={erp}
                width={30}
                height={30}
                alt="photo"
                className="mb-5"
              />
              <h3 className="text-xl font-semibold text-[#18191f] custom:text-base">
                {t.erp}
              </h3>
            </motion.div>
            <motion.div
              className="w-[350px]  h-[209px] bg-[#f4f7ff] mb-2 rounded-xl p-8 custom:w-[250px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Image
                src={interfaceBig}
                width={30}
                height={30}
                alt="photo"
                className="mb-5"
              />
              <h3 className="text-xl font-semibold text-[#18191f] custom:text-base">
                {t.interface}
              </h3>
            </motion.div>
            <motion.div
              className="w-[350px]  h-[209px] bg-[#f4f7ff] mb-2 rounded-xl p-8 custom:w-[250px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Image
                src={optimbig}
                width={30}
                height={30}
                alt="photo"
                className="mb-5"
              />
              <h3 className="text-xl font-semibold text-[#18191f] custom:text-base">
                {t.optimization}
              </h3>
            </motion.div>
            <motion.div
              className="w-[350px]  h-[209px] bg-[#f4f7ff] mb-2 rounded-xl p-8 custom:w-[250px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Image
                src={itconBig}
                width={30}
                height={30}
                alt="photo"
                className="mb-5"
              />
              <h3 className="text-xl font-semibold text-[#18191f] custom:text-base">
                {t.consulting}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Direction;
