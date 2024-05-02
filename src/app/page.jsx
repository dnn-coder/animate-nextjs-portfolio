'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          Shaping the Web, Engineering the Future.
          </h1>
          {/* DESC */}
          <p className=" md:text-xl">
          As a junior full stack web developer, I bring freshness and dynamism to the design and development of web applications. 
          My training includes a wide range of essential technologies for developing interactive user interfaces, backend management, 
          and REST APIs. I also possess skills in database administration and other key tools that ensure efficient and meticulously 
          organized development. I am deeply committed to my continuous professional development.
          </p>

          {/* BUTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
