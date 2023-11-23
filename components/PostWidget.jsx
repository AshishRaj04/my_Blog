"use client";
import { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getSimilarPosts, getRecentPosts } from "../services";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

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
      <h1 className="text-6xl  font-text  font-semibold text-lightDark  ">
        {slug ? "Related Posts" : "Recent Posts"}
      </h1>

      {relatedPosts.map((post, index) => (
        <Paper
          key={index}
          elevation={3}
          className="relative flex w-full h-[8rem] mt-4 rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${post.featuredImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        >
          <div className="absolute top-0 left-0 bg-opacity-60 bg-extraDark w-2/5 h-full flex justify-start items-center">
            <Link
              href={`/blog/${post.slug}`}
              className="text-white text-xl font-text font-light px-4 py-2"
            >
              {post.title}
            </Link>
          </div>
          <div className="absolute top-0 right-0 bg-opacity-60 bg-extraDark w-3/5 h-full flex justify-end items-center pr-4 pt-4">
            <p className=" text-white font-xs font-text">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </Paper>
      ))}
    </Box>

  );
};

export default PostWidget;
