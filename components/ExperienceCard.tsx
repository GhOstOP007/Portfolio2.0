"use client";
import React from "react";
import { motion } from "framer-motion";
import datas from "./ExperieceData.json";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <>
      {datas?.map((data) => (
        <article
          className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
          key={data.id}
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={data.img}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{data.role}</h4>
            <p className="font-bold text-2xl mt-1">{data.company}</p>
            <div className="flex space-x-4 my-2">
              {data.technologies.map((tech) => (
                <span key={tech.id} className="flex flex-col items-center">
                  <div className="h-5 w-5 rounded-full" />
                  {tech.content}
                </span>
              ))}
            </div>
          </div>
          <p>
            {data.startDate} - {data.endDate}
          </p>

          <ul className="list-disc space-y-4 ml-5 text-lg">
            {data.summary.map((point) => (
              <li key={point.id}>{point.content}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default ExperienceCard;
