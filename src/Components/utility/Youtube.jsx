"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import video from "../../assets/Video-926.mp4";
export function Youtube() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                After Movie
              </span>
            </h1>
          </>
        }
      >
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" className="w-full h-full" />
          Your browser does not support the video tag.
        </video>
      </ContainerScroll>
    </div>
  );
}
