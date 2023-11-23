"use client";
import React from "react";
import moment from "moment";
import Link from "next/link";
import DateRangeIcon from "@mui/icons-material/DateRange";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
        <div className="flex w-full items-center justify-between">
          <div className="align-middle inline-flex rounded-md py-1 px-3 font-medium mb-3 relative z-20 text-slate-500 bg-slate-200 text-[13px]">
            <DateRangeIcon />
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </div>

          <div className="flex justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
            <img
              src={post.author.photo.url}
              height="30px"
              width="30px"
              className="align-middle drop-shadow-lg rounded-full w-8 h-8"
              alt={post.author.name}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {post.author.name}
            </p>
          </div>
        </div>

        <div>
          <h1 className="transition font-text duration-400 text-left mb-8 cursor-pointer text-extraDark hover:text-lightDark text-3xl font-semibold">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h1>
          <p className="text-left text-lg text-dark font-normal mb-8">
            {post.excerpt}
          </p>
        </div>

        <div className="text-center">
          <Link href={`/blog/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-slate-200 text-md font-medium rounded-md text-slate-500 px-4 py-3 cursor-pointer">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 ">
        <img
          src={post.featuredImage.url}
          alt="postImage"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default PostCard;
