import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./index";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen
    mx-auto"
    >
      <div
        className={`${styles.paddingX} absolute
    insert-1 top-[120px] max-w-7xl mx-auto flex
    flex-row items-start gap-5`}
      >
        <div
          className=" flex flex-col
          justify-center items-center mt-5"
        >
          <div
            className="w-5 h-5 rounded-full 
            bg-[#915eff]"
          />
          <div
            className="w-1 sm:h-80 h-40
            violet-gradient"
          />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {" "}
            Hi, I'm <span className="text-[#915eff]">Himanshu</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2
            text-white-100 `}
          >
            i am web developer, this is my  project using three.js,
            <br className="sm:block hidden" /> makeing a 3D portfolio.
          </p>
        </div>
      </div>
      <ComputersCanvas  />

      <div
        className="absolute xs:bottom-0
          bottom-34 w-full flex 
          justify-center items-center "
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] 
              rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1,
                repeat: "Infinity",
                repeatType: "loop",
              }}
              className="w-2 h-4 rounded-full
                    bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
