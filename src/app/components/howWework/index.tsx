"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import Image from "next/image";
import {
  analysisllogo,
  folder,
  line,
  phonecontact,
  startlogo,
  teamlogo,
} from "../Images";

export default function HowWeWork() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];

  const steps = [
    {
      title: t.contactphone,
      description: t.sendus,
      icon: phonecontact,
    },
    {
      title: t.analysis,
      description: t.analysText,
      icon: analysisllogo,
    },
    {
      title: t.offer,
      description: t.offerText,
      icon: folder,
    },
    {
      title: t.team,
      description: t.teamtext,
      icon: teamlogo,
    },
    {
      title: t.start,
      description: t.getstart,
      icon: startlogo,
    },
  ];

  return (
    <motion.section
      id="command"
      className="flex flex-col mt-9 px-6 py-9 custom:mt-0"
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
          {t.howWeWork}
        </motion.h1>

        <div className="flex flex-col pb-20 pt-3 iPad:items-center iPad:justify-center">
          <div className="grid grid-cols-5 iPad:grid-cols-1 gap-20 relative overflow-hidden iPad:gap-6 iPad:items-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-auto max-w-xs iPad:flex-row iPad:items-center iPad:justify-start"
              >
                <div className="mb-4 iPad:mb-0 z-20">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={81}
                    height={80}
                    className="iPad:w-[56px] iPad:h-[56px] "
                  />
                </div>
                <div className="flex flex-col items-center iPad:items-start iPad:pl-3 max-w-[300px]">
                  <h3 className="text-lg font-semibold iPad:pl-3 mobile:text-base">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base iPad:text-start iPad:max-w-[260px] iPad:text-[11px] mt-2 iPad:pl-3 mobile:text-[10px] mobile:max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <Image
              src={line}
              alt="line"
              width={1170}
              height={40}
              className="absolute bottom-3/4 z-0 iPad:rotate-90 iPad:bottom-1/2 iPad:-left-[280px] mobile:rotate-0 mobile:bottom-1/2 mobile:-left-[150px]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
