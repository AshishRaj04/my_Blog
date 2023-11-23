"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box } from "@mui/material";

import { getCategories } from "../services";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <h3 className="text-6xl font-text font-semibold text-lightDark">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className="relative font-text cursor-pointer block w-full py-3 mb-3 mt-3 rounded-lg bg-dark  text-white text-xl font-light justify-center items-center"
          >
            {category.name}
          </span>
        </Link>
      ))}
    </Box>
  );
};

export default Categories;
