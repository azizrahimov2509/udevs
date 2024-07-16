import { useState } from "react";
import { logo, eng, rus } from "../Images/index";
import Link from "next/link";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { state, ChangeLanguage } = useLanguage();

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const t = translations[state.language as Language];

  return (
    <div className="flex lg:hidden">
      <button
        className="btn btn-square bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className={`fixed inset-0 bg-gray-100 z-50 flex justify-end ${
            isClosing ? "animate-slide-out" : "animate-slide-in"
          }`}
        >
          <div className="w-full bg-gray-100 flex flex-col items-center justify-center p-6 shadow-lg transition-transform transform translate-x-full animate-slide-in">
            <button
              className="absolute top-0 right-0 m-4 text-blue-500"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="absolute top-0 left-0 p-4 flex items-center gap-3">
              <img
                src={logo}
                alt="logo"
                className="w-24 h-8"
                width={96}
                height={32}
              />
              <div className="w-full flex items-center justify-center gap-7 mt-4">
                <button onClick={() => ChangeLanguage("eng")}>
                  <img className="w-7 h-7" src={eng} alt="English flag" />
                  <span className="font-semibold text-base">Eng</span>
                </button>
                <button onClick={() => ChangeLanguage("ru")}>
                  <img className="w-7 h-7" src={rus} alt="Russian flag" />
                  <span className="font-semibold text-base">Русс</span>
                </button>
              </div>
            </div>

            <nav className="flex flex-col items-center justify-between mt-40">
              <a
                href="#mobile"
                className="text-black text-3xl font-semibold mb-4"
                onClick={closeMenu}
              >
                {t.services}
              </a>
              <a
                href="#clients"
                className="text-black mb-4 text-3xl font-semibold"
                onClick={closeMenu}
              >
                {t.clients}
              </a>
              <a
                href="#command"
                className="text-black text-3xl font-semibold mb-4"
                onClick={closeMenu}
              >
                {t.command}
              </a>
            </nav>

            <div className="mt-28 px-3 w-full">
              <a
                href={"/contact"}
                className="btn bg-[#295cc9] h-16 text-white w-full rounded-md text-[24px] leading-8 font-semibold hover:scale-110 hover:bg-[#295cc9]"
                onClick={closeMenu}
              >
                {t.contact}
              </a>
            </div>

            <div className="w-full flex items-center justify-center gap-7 mt-4">
              <span>
                <a href={"#"} onClick={closeMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    image-rendering="optimizeQuality"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    viewBox="0 0 384 384"
                    fill="#295cc9"
                    id="instagram"
                    clip-path="circle(50% at 50% 50%)"
                    width="44"
                    height="44"
                  >
                    <rect
                      width="384"
                      height="384"
                      fill="#295cc9"
                      rx="37"
                      ry="37"
                    ></rect>
                    <path
                      width="45"
                      height="45"
                      fill="#fff"
                      fill-rule="nonzero"
                      d="M142 59h100c22 0 42 9 56 24 14 14 23 34 23 56v106c0 22-9 41-23 56-14 14-34 23-56 23H142c-22 0-42-9-56-23-15-15-24-34-24-56V139c0-22 9-42 24-56 14-15 34-24 56-24zm100 23H142c-16 0-30 6-41 16-10 11-17 25-17 41v106c0 15 7 30 17 40 11 11 25 17 41 17h100c16 0 30-6 40-17 11-10 17-25 17-40V139c0-16-6-30-17-41-10-10-24-16-40-16z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="nonzero"
                      d="M192 123c19 0 36 7 48 20 12 12 20 29 20 48s-8 35-20 48c-12 12-29 20-48 20s-36-8-48-20c-13-13-20-29-20-48s7-36 20-48c12-13 29-20 48-20zm32 35c-8-8-20-13-32-13-13 0-24 5-33 13-8 9-13 20-13 33 0 12 5 24 13 32 9 8 20 13 33 13 12 0 24-5 32-13s14-20 14-32c0-13-6-24-14-33z"
                    ></path>
                    <circle cx="265" cy="119" r="16" fill="#295cc9"></circle>
                  </svg>
                </a>
              </span>
              <span>
                <Link href={"#"} onClick={closeMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="126.444 2.281 589 589"
                    id="twitter"
                  >
                    <circle
                      cx="420.944"
                      cy="296.781"
                      r="294.5"
                      fill="#295cc9"
                    ></circle>
                    <path
                      fill="#fff"
                      d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"
                    ></path>
                  </svg>
                </Link>
              </span>

              <span>
                <Link href={"#"} onClick={closeMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="youtube"
                    width="44"
                    height="44"
                  >
                    <g>
                      <path
                        d="M13.83 19.259L19.262 16l-5.432-3.259z"
                        fill="#295cc9"
                      ></path>
                      <path
                        d="M16 0C7.164 0 0 7.163 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8.688 16.701c0 1.5-.174 3-.174 3s-.17 1.278-.69 1.839c-.661.738-1.401.742-1.741.786-2.432.186-6.083.192-6.083.192s-4.518-.044-5.908-.186c-.387-.077-1.254-.055-1.916-.792-.521-.562-.69-1.839-.69-1.839s-.174-1.499-.174-3v-1.406c0-1.5.174-2.999.174-2.999s.17-1.278.69-1.841c.661-.739 1.401-.743 1.741-.785 2.431-.188 6.079-.188 6.079-.188h.008s3.648 0 6.079.188c.339.042 1.08.046 1.741.784.521.563.69 1.841.69 1.841s.174 1.5.174 3v1.406z"
                        fill="#295cc9"
                      ></path>
                    </g>
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
