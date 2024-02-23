"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}

        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://media.licdn.com/dms/image/D4D03AQH35uI84rjGfg/profile-displayphoto-shrink_800_800/0/1668748846756?e=1714003200&v=beta&t=5-v2T2RjndYpH22P-87PpwHfrlWrTjMkV9ZmOpR4-_c"
        alt=""
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a <span className="text-[#f7ab0a]/50">little</span> background
        </h4>
        <p className="text-base">
          Hardworking and enthusiastic fresher with strong problem-solving
          skills and C++, Java, and DSA knowledge. I am Proficient in
          object-oriented programming, data structures, and algorithms.
          Experience with software development methodologies and tools. Also, I
          have Strong analytical and problem-solving skills with the ability to
          learn new technologies quickly. Team player with excellent
          communication and interpersonal skills. I am seeking an entry-level
          position in a challenging and fast-paced environment where I can use
          my skills and knowledge to make a significant contribution.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
