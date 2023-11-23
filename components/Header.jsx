"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "../services";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-lightDark py-8">
        <div className="md:float-left block">
      <Link href="/">
        <span className="font-text cursor-pointer font-bold text-4xl text-lightDark mb-2">
        Tech Talks
        </span>
      </Link>
    </div>
       
        <div className="hidden md:float-left md:contents">
          <div className="md:float-right font-text mt-0 align-middle text-white ml-4 font-normal text-sm cursor-pointer">
            <div className="relative inline-block px-6">
              <div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-5 rounded-3xl"
                >
                  Categories{" "}
                  {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </button>
              </div>
              {isOpen && (
                <div className="z-10 absolute rounded-md mt-2 ml-4 bg-lightDark text-white shadow-lg focus:outline-none flex flex-col">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/category/${category.slug}`}
                      className="block px-4 py-2 text-sm transition-transform transform translate-y-0 translate-x-0 ease-out hover:translate-y-1 hover:translate-x-1"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about">
              <span>About Me</span>
            </Link>
            <span className="px-4">
              <Link href="/contact">
                <button className="px-4 py-2 bg-lightDark text-white rounded-xl">
                  Contact Me
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
