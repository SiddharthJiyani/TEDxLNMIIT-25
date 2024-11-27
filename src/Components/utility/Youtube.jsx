"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Title from "./Title";
export default function Youtube() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 mb-14 leading-none flex gap-2 flex-col">
                <Title
                  text="After"
                  red="Movie"
                  className="text-2xl md:text-[6rem] md:-mb-12 -mb-72 font-bold mt-1 leading-none"
                />
                {/* <Title text="TEDxLNMIIT" red="'24" className="text-4xl md:text-[6rem] -mb-16 font-bold mt-12 leading-none" /> */}
              </span>
              <br />
            </h1>
          </>
        }
      >
        {/* <iframe width="843" height="474" src="https://youtu.be/xGv4oAeEe6M" title="TEDxLNMIIT&#39;24 | After Movie" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/xGv4oAeEe6M"
          title="TEDxLNMIIT 2024 | Official After movie  | Bending the Basics | TEDx"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </ContainerScroll>
    </div>
  );
}
