"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";
import { Button } from "./ui/button";

type WorkSlider = {
  containerStyles: string;
  btnStyles: string;
};

const WorkSliderBtns = ({ containerStyles, btnStyles }: WorkSlider) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <Button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </Button>

      <Button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </Button>
    </div>
  );
};

export default WorkSliderBtns;
