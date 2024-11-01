import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max) => Math.floor(Math.random() * max);

export default function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const interations = useRef(0);
  const isFirstRender = useRef(true);
  const containerRef = useRef(null);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust the threshold as needed
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        if (interations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i <= interations.current
                ? text[i]
                : alphabets[getRandomInt(26)]
            )
          );
          interations.current += 0.1;
        } else {
          setTrigger(false);
          clearInterval(interval);
        }
      }, duration / (text.length * 10));
      // Clean up interval on unmount
      return () => clearInterval(interval);
    }
  }, [text, duration, trigger, animateOnLoad, isVisible]);

  return (
    <div
      className="overflow-hidden flex cursor-default"
      onMouseEnter={triggerAnimation}
      ref={containerRef}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.h1
            key={i}
            className={cn(className)}
            {...framerProps}
          >
            {letter}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
