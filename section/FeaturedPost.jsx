"use client";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customleftarrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-lightDark rounded-full">
      <ArrowBackIcon sx={{ color: "white" }} />
    </div>
  );

  const customrightarrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-lightDark rounded-full">
      <ArrowForwardIcon sx={{ color: "white" }} />
    </div>
  );
  const ArrowFix = (arrowProps) => { const {carouselState, children,rtl, ...restArrowProps} = arrowProps; return ( <span {...restArrowProps}> {children} </span> ); };

  return (
    <div className="mb-8">
      <Carousel
        infinite
        customLeftArrow={<ArrowFix> {customleftarrow} </ArrowFix>}
        customRightArrow={<ArrowFix> {customrightarrow} </ArrowFix>}
        responsive={responsive}
        itemClass="px-4"
        
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
      
      
    </div>
  );
};

export default FeaturedPosts;
