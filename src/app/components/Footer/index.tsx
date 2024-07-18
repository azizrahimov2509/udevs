"use client";

import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { logo } from "../Images";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-center pb-8 md:mb-0 text-center md:text-center">
          <a href="/" className="text-2xl font-bold text-gray-900">
            <Image width={106} height={53} src={logo} alt="Logo" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start pb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About us</h3>
            <ul>
              <li className="mb-1">
                <a
                  href="#direction"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Direction
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#command"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Command
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#tools"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Tools
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#clients"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Clients
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul>
              <li className="mb-1">
                <a
                  href="#mobile"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Development of mobile applications
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#erp"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Development and implementation ERP systems
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#design"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  User interface, User experience design
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#consulting"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  IT consulting
                </a>
              </li>
              <li className="mb-1 cursor-pointer">
                <a
                  href="#optimization"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Optimization IT consulting infrastructure
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
            <ul>
              <li className="mb-1">
                <a
                  href="#delever"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Delever
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#sms-uz"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Sms.uz
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#goodzone"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Goodzone
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#iman"
                  className="text-blue-600 hover-line cursor-pointer"
                >
                  Iman
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-[#1b5bf7] mb-4 md:mb-0 text-sm">
            © 2024 Udevs. All rights reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-blue-600" size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-blue-600" size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <FaYoutube className="text-blue-600" size={24} />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hover-line {
          position: relative;
        }

        .hover-line::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          margin-top: 2px;
          right: 0;
          background: #1b5bf7;
          transition: width 0.3s ease;
          -webkit-transition: width 0.3s ease;
        }

        .hover-line:hover::after {
          width: 100%;
          left: 0;
          background: #1b5bf7;
        }
      `}</style>
    </footer>
  );
}
