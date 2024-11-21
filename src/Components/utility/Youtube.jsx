"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import video from "../../assets/Video-926.mp4";
export function Youtube() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <span className="text-4xl md:text-[6rem] mb-14 font-bold mt-1 leading-none">
                After Movie
              </span>
              <br />
            </h1>
          </>
        }
      >
        
        <iframe width="843" height="474" src="https://www.youtube.com/embed/Jl_M3DCtTHI" title="TEDxLNMIIT&#39;24 | After Movie" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </ContainerScroll>
    </div>
  );
}
