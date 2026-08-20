import { memo } from "react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      staggerChildren: 0.04, // speed between characters
    },
  },
};

const char: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 1,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

interface AnimatedTextProps {
  sentence: string;
  as?: "div" | "h1";
  className?: string;
  containerClassName?: string;
  wrapperClassName?: string;
  canStartAnimation?: boolean;
  wordByWordAnimation?: boolean;
}

const AnimatedText = ({
  canStartAnimation = true,
  className,
  containerClassName = "",
  wrapperClassName = "",
  sentence,
  wordByWordAnimation = false,
  as = "div",
}: AnimatedTextProps) => {
  const AnimatedTag = as === "h1" ? motion.h1 : motion.div;

  return (
    <AnimatedTag
      variants={container}
      initial="hidden"
      animate={canStartAnimation ? "show" : "hidden"}
      className={containerClassName}
    >
      {wordByWordAnimation
        ? sentence.split(" ").map((wordItem, i) => (
            <motion.span
              key={i}
              variants={char}
              className={"inline-block " + className}
            >
              {wordItem}&nbsp;
            </motion.span>
          ))
        : sentence.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className={
                "inline-block whitespace-nowrap mr-1 " + wrapperClassName
              }
            >
              {word.split("").map((charItem, i) => (
                <motion.span
                  key={i}
                  variants={char}
                  className={"inline-block " + className}
                >
                  {charItem}
                </motion.span>
              ))}
            </span>
          ))}
    </AnimatedTag>
  );
};

export default memo(AnimatedText);
