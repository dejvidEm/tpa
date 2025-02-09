import { animate, motion, useMotionValue } from "framer-motion";
import TeamCard from "./TeamCard";
import { useMeasure } from "@uidotdev/usehooks";
import { useEffect } from "react";

const logos = [
      "/images/fifa_logo.png",
      "/images/sfz_logo.png",
      "/images/fifa_logo.png",
      "/images/sfz_logo.png",
      "/images/fifa_logo.png",
      "/images/sfz_logo.png",
      "/images/fifa_logo.png",
      "/images/sfz_logo.png",
      "/images/fifa_logo.png",
      "/images/sfz_logo.png",
      "/images/fifa_logo.png",
      "/images/sfz_logo.png",
  ];
  

const ImageCarousel = () => {

  let [ref, {width}] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -(width ?? 0) / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 55,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width])

  return (
    <div className="mb-64 mt-32">
      <h2 className="text-4xl md:text-6xl mx-auto font-extrabold px-10 md:px-0 mb-10 md:mb-16 md:max-w-[750px] bg-gradient-to-r from-gold_secondary to-gold_primary text-transparent bg-clip-text uppercase text-center z-10">
      Built on Trust, Driven by Partnership
      </h2>
        <motion.div className="absolute lef-0 flex gap-4" ref={ref} style={{x: xTranslation}}>
            {[...logos, ...logos].map((item, index) => (
                <TeamCard image={item} key={index}/>
            ))}
        </motion.div>
    </div>
  )
}

export default ImageCarousel
