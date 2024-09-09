"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
declare type Project = {
        id:number,
        title:string,
        des:string,
        img:string,
        iconLists:string[],
        link:string
  
};
export function ProjectCard({id,title,des,img,iconLists,link}:Project) {
  return (
    <CardContainer className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-80  sm:w-[24rem] h-auto rounded-xl p-4 border  ">
        <CardItem
          translateZ="40"
          className="text-lg font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <CardItem translateZ="80" className="w-full mt-5">
          <Image
            src={img}
            height="240"
            width="240"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-16 ">
          <CardItem
            translateZ={15}
            target="__blank"
            className="px-3 py-1  flex gap-2 "
          >
            {iconLists.map((icon,index)=>{
              return <Image src={icon} height="40" width="20" alt="icon" key={index}/>
            })}
          </CardItem>
          <CardItem
            translateZ={15}
            as="button"
            className="px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-black text-xs font-bold"
          >
            <Link href={"https://github.com/Yab112"} target="__blank">
                 {<FaGithub/>}
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
