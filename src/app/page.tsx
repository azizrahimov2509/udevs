"use client";

import { logo } from "@/app/components/Images";

import Link from "next/link";
import Typewriter from "./components/Typewriter";
import { translations, Language } from "@/contexts/translation";
import { useLanguage } from "@/contexts/context";
import { motion } from "framer-motion";
import Direction from "./components/direction";
import Command from "./components/command";
import Mobile from "./components/mobile";
import { useEffect } from "react";
import Erpsystem from "./components/erpsystem";
import UiDesign from "./components/uidesign";
import Optimization from "./components/optimization";
import ItConsulting from "./components/itconsulting";
import Tools from "./components/tools";
import Clients from "./components/clients";

export default function Home() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <section id="home" className="flex px-6">
        <div className="container py-11">
          <div className="flex items-start justify-between py-24 custom:flex-col custom:items-center custom:py-10">
            <div className="flex flex-col justify-between gap-4 w-[547px] h-[351px] custom:w-auto custom:h-auto custom:items-center">
              <motion.img
                src={logo}
                alt="Logo"
                width={267}
                height={89}
                className="custom:w-[125px] custom:h-[41px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />

              <motion.h1
                className="mb-3 text-[40px] font-bold text-[#464359] custom:text-[24px] custom:text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.outsourse}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Typewriter />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  href="#section2"
                  className="btn bg-[#1b5bf7] w-60 h-14 text-[20px] font-semibold text-white hover:scale-110 hover:bg-[#1b5bf7] custom:hidden"
                >
                  {t.contact}
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <img
                src="https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg"
                alt="hero1"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="direction" className="flex pt-2 px-6">
        <div className="container">
          <Direction />
        </div>
      </section>

      <section id="command" className="flex mt-2 px-6 bg-[#f4f7ff]">
        <div className="container">
          <Command />
        </div>
      </section>

      <section id="mobile" className="flex  px-6">
        <div className="container">
          <Mobile />
        </div>
      </section>

      <section id="erp" className="flex mt-2 px-6 bg-[#f4f7ff]">
        <div className="container">
          <Erpsystem />
        </div>
      </section>

      <section id="design" className="flex mt-2 px-6 ">
        <div className="container">
          <UiDesign />
        </div>
      </section>

      <section id="optimization" className="flex mt-2 px-6 bg-[#f4f7ff] ">
        <div className="container">
          <Optimization />
        </div>
      </section>

      <section id="consulting" className="flex mt-2 px-6">
        <div className="container">
          <ItConsulting />
        </div>
      </section>

      <section id="tools" className="flex mt-2 px-6 bg-[#f4f7ff] ">
        <div className="container">
          <Tools />
        </div>
      </section>

      <section id="clients" className="flex mt-2 px-6  ">
        <div className="container">
          <Clients />
        </div>
      </section>
    </>
  );
}
