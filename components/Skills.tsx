"use client";
import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center min-h-screen mx-auto xl:space-y-0 items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 test-sm">
        Hover Over a Skill for Current Profieciency
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-10">
        {/*Upperhalf */}
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          percentage={85}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          percentage={80}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          percentage={70}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          percentage={90}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          percentage={75}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          percentage={80}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          percentage={85}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
          percentage={65}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          percentage={95}
          directionLeft={true}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          percentage={80}
          directionLeft={true}
        />
        {/*lower half */}
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          percentage={85}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
          percentage={75}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          percentage={75}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          percentage={89}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          percentage={85}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
          percentage={90}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original-wordmark.svg"
          percentage={95}
        />
        <Skill
          img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          percentage={80}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
