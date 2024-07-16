"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import Image from "next/image";
import { Tool, tools } from "@/app/components/toolsData";

export default function Tools() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const isToolSelected = (tool: Tool) => {
    return selectedCategory === null || tool.category === selectedCategory;
  };

  return (
    <motion.section
      id="command"
      className="flex flex-col mt-16 px-6 py-9"
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
          {t.tools}
        </motion.h1>

        <div className="flex flex-col pb-20">
          <div className="mb-4 flex  custom:grid custom:grid-cols-2 ">
            {[
              "Frontend",
              "Backend",
              "Devops",
              "Testing",
              "UX/UI",
              "Infrastructure",
              "Mobile",
              "",
            ].map((category, index) => (
              <label
                key={index}
                className="flex items-center mr-4 text-sm font-bold text-black leading-[30px]"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={
                    selectedCategory === category ||
                    (selectedCategory === null && category === "")
                  }
                  onChange={() =>
                    handleCategoryChange(category ? category : "")
                  }
                  className="appearance-none w-[18px] h-[18px] border-2 border-blue-500 rounded-full mr-2 cursor-pointer relative"
                />
                {category || "All"}
              </label>
            ))}
          </div>

          <style jsx>{`
            input[type="radio"]:checked::before {
              content: "";
              display: block;
              width: 11px;
              height: 11px;
              background-color: blue;
              border-radius: 50%;
              position: absolute;
              top: 2px;
              left: 2px;
            }
          `}</style>

          <div className="grid grid-cols-12 phone:grid-cols-5 custom:grid-cols-5  gap-y-3 gap-x-3">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center justify-center gap-1 w-[87px] h-[90px] big:w-auto big:h-auto p-2 rounded-lg phone:px-4 ${
                  isToolSelected(tool)
                    ? "bg-[#c6d6ff] text-black"
                    : "bg-[#dbe5ff65] text-gray-500 opacity-50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 mb-2"
                />
                <span className="text-[11px] font-normal iPad:text-[9px] phone:px-2">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
