"use client";

import React, { useState, useEffect } from "react";
import { translations, Language } from "@/contexts/translation";
import { useLanguage } from "@/contexts/context";

const Typewriter: React.FC = () => {
  const { state } = useLanguage();
  const t = translations[state.language as Language];

  const phrases = [t.mobile, t.erp, t.interface, t.consulting, t.optimization];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const nextText = isDeleting
        ? currentPhrase.substring(0, currentText.length - 1)
        : currentPhrase.substring(0, currentText.length + 1);

      setCurrentText(nextText);

      if (!isDeleting && nextText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, speed, phrases, currentPhraseIndex]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <h1 className="text-[40px] text-[#1b5bf7] font-bold custom:text-[24px] pb-6 custom:text-center">
      {currentText}
      <span className={showCursor ? "inline" : "hidden"}>|</span>
    </h1>
  );
};

export default Typewriter;
