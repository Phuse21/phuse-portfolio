"use client";

import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, iconStyles, btnStyles }) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const updateButtonStates = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", updateButtonStates);
    updateButtonStates();

    return () => {
      swiper.off("slideChange", updateButtonStates);
    };
  }, [swiper]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" && !isBeginning) {
        swiper.slidePrev();
      } else if (event.key === "ArrowRight" && !isEnd) {
        swiper.slideNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [swiper, isBeginning, isEnd]);

  return (
    <div className={containerStyles}>
      {/* Disable previous button on the first slide */}
      <button
        className={`${btnStyles} ${
          isBeginning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      {/* Disable next button on the last slide */}
      <button
        className={`${btnStyles} ${
          isEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
