'use client';

import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function Aboutpage() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container:containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, {margin:"-100px"});


  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {margin:"-100px"});

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              temporibus qui dignissimos quas neque asperiores dolorum velit
              tempore quam iste natus explicabo consequuntur eaque ipsa earum
              vero. Aliquid, aliquam dolore enim nisi minima dignissimos
              repellendus soluta sint beatae dolorum. Labore odio qui delectus
              unde harum accusamus, velit adipisci inventore exercitationem!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              No llega a la meta quien intenta ir más rápido, sino quien intenta
              disfrutar más del camino.
            </span>

            {/* BIOGRAPHY SIGN SVG */}
            <div className="self-end">
              <svg
                width="185"
                height="105"
                viewBox="0 0 455 304"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_104_2)" filter="url(#filter0_f_104_2)">
                  <path
                    d="M212.215 173.249C212.215 177.747 212.342 182.026 211.245 186.414C209.669 192.717 216.1 174.348 219.006 168.537C220.701 165.145 223.44 156.3 223.44 164.172C223.44 173.874 222.193 183.504 222.193 193.205"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M85.2379 177.08C94.8617 166.398 111.035 156.287 124.061 147.049C148.368 129.811 175.899 114.201 205.674 100.697C220.724 93.8712 238.844 86.1594 256.443 82.6873C266.538 80.6957 259.792 99.3443 258.863 101.56C252.122 117.646 236.495 131.655 220.761 145.6C193.935 169.376 164.269 191.425 132.164 212.771C100.688 233.7 68.9185 254.739 35.4849 274.507C25.6573 280.318 15.5287 285.95 6.30654 292.125"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M231.215 157.249C231.215 161.747 231.342 166.026 230.245 170.414C228.669 176.717 235.1 158.348 238.006 152.537C239.701 149.145 242.44 140.3 242.44 148.172C242.44 157.874 241.193 167.504 241.193 177.205"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M216.886 177.463C211.833 177.463 207.831 177.907 203.305 180.581C196.337 184.698 184.9 192.848 181.547 200.468C174.703 216.022 192.482 210.149 197.623 201.438C201.218 195.347 201.72 187.899 203.79 181.274C204.704 178.347 206.409 171.991 204.968 179.611C203.591 186.889 201.919 193.736 201.919 201.161C201.919 204.975 205.939 204.066 206.908 201.161"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M251.598 145.386C249.55 146.213 247.938 156.198 249.055 156.098C254.451 155.613 262.582 135.798 265.459 130.785C266.046 129.762 264.914 133.189 264.612 134.38C262.416 143.029 261.78 152.224 260.859 161.16C258.438 184.629 257.625 209.389 250.992 231.815C247.683 243.004 240.5 258.373 230.533 262.337C217.82 267.393 224.467 242.051 227.083 236.804C238.588 213.728 255.797 194.672 271.936 176.494C289.294 156.943 307.111 137.871 326.05 120.587C348.06 100.501 370.892 81.9009 392.27 60.7907C408.21 45.051 423.531 28.406 439 12"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M145 139.425C145 127.426 142.378 163.25 140.383 175.026C138.405 186.7 136.822 198.592 134 210"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M279.363 75.5165C283.034 77.3522 280.61 104.038 280.61 109.816C280.61 113.654 280.084 117.916 281.234 121.596C281.971 123.954 282.25 132.955 283.728 134.138C285.324 135.414 289.998 119.782 290.865 117.646C295.324 106.672 295.743 94.8427 299.319 83.6929C303.216 71.5425 306.803 55.7942 306.803 43.0877"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M308.05 101.709C307.316 95.8345 306.7 102.018 308.05 97.9671"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_104_2"
                    x="-2"
                    y="-4"
                    width="461"
                    height="312"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect1_foregroundBlur_104_2"
                    />
                  </filter>
                  <clipPath id="clip0_104_2">
                    <rect
                      width="453"
                      height="304"
                      fill="white"
                      transform="translate(2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
            initial={{opacity:0.2, y: 0}}
            animate={{opacity:1, y: '10px'}}
            transition={{repeat:Infinity, duration:3, ease: 'easeInOut'}}
              width="50px"
              height="50px"
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 10.99L13.1299 14.05C12.9858 14.2058 12.811 14.3298 12.6166 14.4148C12.4221 14.4998 12.2122 14.5437 12 14.5437C11.7878 14.5437 11.5779 14.4998 11.3834 14.4148C11.189 14.3298 11.0142 14.2058 10.87 14.05L8 10.99"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 17.4199V7.41992C21 5.21078 19.2091 3.41992 17 3.41992L7 3.41992C4.79086 3.41992 3 5.21078 3 7.41992V17.4199C3 19.6291 4.79086 21.4199 7 21.4199H17C19.2091 21.4199 21 19.6291 21 17.4199Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1 
              initial={{ x: "-300px" }} 
              animate={isSkillRefInView ? { x:0 } : {}} 
              transition={{ delay: 0.2 }} 
              className="font-bold text-2xl">
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div  
              initial={{ x: "-300px" }} 
              animate={isSkillRefInView ? { x:0 } : {}}  
              className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Css
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NodeJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Sequelize
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express-Validator
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bcryptjs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Jwt
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postgress
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ReactJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NextJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postman
              </div>
            </motion.div>

            {/* SKILL SCROLL SVG */}
            <motion.svg
             initial={{opacity:0.2, y: 0}}
             animate={{opacity:1, y: '10px'}}
             transition={{repeat:Infinity, duration:3, ease: 'easeInOut'}}
              width="50px"
              height="50px"
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 10.99L13.1299 14.05C12.9858 14.2058 12.811 14.3298 12.6166 14.4148C12.4221 14.4998 12.2122 14.5437 12 14.5437C11.7878 14.5437 11.5779 14.4998 11.3834 14.4148C11.189 14.3298 11.0142 14.2058 10.87 14.05L8 10.99"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 17.4199V7.41992C21 5.21078 19.2091 3.41992 17 3.41992L7 3.41992C4.79086 3.41992 3 5.21078 3 7.41992V17.4199C3 19.6291 4.79086 21.4199 7 21.4199H17C19.2091 21.4199 21 19.6291 21 17.4199Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>
            <div className=""></div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1  
                initial={{ x: "-300px" }} 
                animate={isExperienceRefInView ? { x:0 } : {}}  
                transition={{ delay: 0.2 }} 
                className="font-bold text-2xl">
                  
                EXPERIENCE
                
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div  
              initial={{ x: "-300px" }} 
              animate={isExperienceRefInView ? { x:0 } : {}}   className="">
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior JavaScript Developer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iure in blanditiis dolores inventore repellendus
                    perspiciatis!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-bold w-fit">
                    LOGICIEL
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior JavaScript Developer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iure in blanditiis dolores inventore repellendus
                    perspiciatis!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-bold w-fit">
                    LOGICIEL
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior JavaScript Developer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iure in blanditiis dolores inventore repellendus
                    perspiciatis!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-bold w-fit">
                    LOGICIEL
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
