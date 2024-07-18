"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/context";
import { translations, Language } from "@/contexts/translation";
import Image from "next/image";
import { call, location, logo, mail } from "../Images";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  description: string;
}

export default function Contact() {
  const { state } = useLanguage();
  const t = translations[state.language as Language];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setIsModalOpen(true);
    reset();
  };

  return (
    <motion.section
      id="command"
      className="flex flex-col mt-9 px-6 py-9 custom:mt-0 "
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
          {t.contactus}
        </motion.h1>

        <div className="bg-white shadow-md rounded-lg px-20 py-11 custom:max-w-[624px] custom:px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="w-[424px] big:w-full ">
              <h2 className="text-xl font-semibold mb-4 text-[#0f001a]">
                {t.leaveMessage}
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 w-full"
              >
                <div>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Name"
                    {...register("name", { required: "Fill in the field" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Your email"
                    {...register("email", {
                      required: "Fill in the field",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Briefly describe your project"
                    {...register("description", {
                      required: "Fill in the field",
                    })}
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>
                <div className="iPad:flex iPad:justify-center iPad:items-center">
                  <button
                    type="submit"
                    className="btn bg-[#1b5bf7] text-white text-[20px] w-[248px] h-[44px] iPad:w-full iPad:h-full "
                  >
                    {t.send}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col justify-between w-[385px] custom:w-full">
              <div className="flex flex-col gap-4">
                <a
                  href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&amp;source=constructor"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-[#0f001abb] font-extralight leading-5 flex items-center gap-2"
                >
                  <Image width={24} height={24} src={location} alt="Location" />
                  Ташкент, Юнусабадский район, проспект Амира Темура, 129Б
                </a>

                <a
                  href="tel:+998336600999"
                  className="text-sm text-[#0f001abb] font-thin leading-5 flex items-center gap-2"
                >
                  {" "}
                  <Image width={24} height={24} src={call} alt="Phone" />
                  +998 33 66 00 999
                </a>

                <a
                  href="mailto:azizbek.b@udevs.io"
                  className="text-sm text-[#0f001abb] font-extralight leading-5 flex items-center gap-2"
                >
                  <Image width={24} height={24} src={mail} alt="Email icon" />
                  azizbek.b@udevs.io
                </a>

                <a
                  href="https://t.me/azizbekbakhodirov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 flex items-center font-bold gap-2"
                >
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      color: "#1b5bf7",
                      marginRight: "6px",
                      width: "27px",
                      height: "27px",
                      fill: "#1b5bf7",
                    }}
                  >
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
                  </svg>
                  t.me/azizbekbakhodirov
                </a>
                <div className="flex space-x-2 mt-4">
                  <a href="/" target="_blank">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width={34}
                      height={24}
                      fill="#1b5bf7"
                    >
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                    </svg>
                  </a>

                  <a href="/" target="_blank">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width={34}
                      height={24}
                      fill="#1b5bf7"
                    >
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </a>

                  <a href="/" target="_blank">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width={34}
                      height={24}
                      fill="#1b5bf7"
                    >
                      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                    </svg>
                  </a>

                  <a href="/" target="_blank">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width={34}
                      height={24}
                      fill="#1b5bf7"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <a
                    href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                    style={{
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "0px",
                    }}
                  >
                    Toshkent
                  </a>
                  <a
                    href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.287687%2C41.355523&mode=routes&rtext=41.355599%2C69.287909&rtt=auto&ruri=&source=mapframe&um=constructor%3A7ca26e40b93ebc46d15bad846f85d1b7e00f167fb123e4d14ca535dfc64a7c41&utm_medium=mapframe&utm_source=maps&z=17"
                    style={{
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "14px",
                    }}
                  >
                    Yandex Xarita
                  </a>
                  <iframe
                    src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.287687%2C41.355523&mode=routes&rtext=41.355599%2C69.287909&rtt=auto&ruri=&source=mapframe&um=constructor%3A7ca26e40b93ebc46d15bad846f85d1b7e00f167fb123e4d14ca535dfc64a7c41&utm_source=mapframe&z=17"
                    width="350px"
                    height="200px"
                    frameBorder="1"
                    allowFullScreen
                    style={{ position: "relative" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Successfully sent</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn bg-[#1b5bf7] text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}
