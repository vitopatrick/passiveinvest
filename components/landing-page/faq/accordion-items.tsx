import DownArrow from "./icons/down-arrow";
import InfoSvg from "./icons/info-svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItems = ({ question, answer, index }: any) => {
  const [selectedIndex, setIndex] = useState(0);

  const changeIndex = (id: number) => {
    if (selectedIndex === index) {
      return setIndex(0);
    }
    setIndex(id);
  };

  return (
    <AnimatePresence key={selectedIndex}>
      <div className="my-2">
        <h2>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 text-left text-teal-500 bg-card rounded-t"
            onClick={() => changeIndex(index)}
          >
            <span className="flex items-center font-medium">
              <InfoSvg />
              {question}
            </span>
            <DownArrow />
          </button>
        </h2>
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className={index === selectedIndex ? "block" : "hidden"}
        >
          <div className="p-5 font-light bg-card/70 font-main text-white">
            {answer}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AccordionItems;
