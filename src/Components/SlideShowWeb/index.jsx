import { useRef, useState } from "react";
import { navLeft, navRight } from "../../Assets/images/symbols/index.js";
import "../../Assets/styles/portfolioWeb.scss";


const SlideShowWeb = ({photos}) => {
  const scrollContainerRef = useRef(null);
  const [scrollPositionStart, setScrollPositionStart] = useState(true);
  const [scrollPositionEnd, setScrollPositionEnd] = useState(false);
  const intervalRef = useRef(null);

  const handleScrollPosition = () => {
    const currentScrollPosition = Math.round(
      scrollContainerRef.current.scrollLeft
    );
    const maxScrollPosition =
      scrollContainerRef.current.scrollWidth -
      scrollContainerRef.current.clientWidth;
    if (currentScrollPosition === 0) {
      return "leftSideMaxed";
    } else if (currentScrollPosition === maxScrollPosition) {
      return "rightSideMaxed";
    } else {
      return false;
    }
  };

  const handleScroll = () => {
    if (handleScrollPosition() === "leftSideMaxed") {
      setScrollPositionStart(true);
    } else {
      setScrollPositionStart(false);
    }

    if (handleScrollPosition() === "rightSideMaxed") {
      setScrollPositionEnd(true);
    } else {
      setScrollPositionEnd(false);
    }
  };

  const handleMouseDown = (direction) => {
    intervalRef.current = setInterval(() => {
      if (direction === "left") {
        // Scroll left or right
        if (handleScrollPosition() === "leftSideMaxed") {
          clearInterval(intervalRef.current);
        } else {
          scrollContainerRef.current.scrollLeft -= 10;
          return;
        }
      } else {
        if (handleScrollPosition() === "rightSideMaxed") {
          clearInterval(intervalRef.current);
        } else {
          scrollContainerRef.current.scrollLeft += 10;
          return;
        }
      }
    }, 10);
  };

  const mouseRelease = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div className="portfolioPageWeb">
      {scrollPositionStart ? null : (
        <img
          className="slideShowButton left"
          value="left"
          id="leftButton"
          src={navLeft}
          alt="Left button for slideshow"
          onMouseDown={() => handleMouseDown("left")}
          onMouseUp={mouseRelease}
        />
      )}
      <div
        className="imageSlideShow"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {photos.map((image, index) => {
          return <img key={index} src={image} alt="Web" />;
        })}
      </div>

      {scrollPositionEnd ? null : (
        <img
          className="slideShowButton right"
          value="right"
          id="rightButton"
          src={navRight}
          alt="Right button for slideshow"
          onMouseDown={() => handleMouseDown("right")}
          onMouseUp={mouseRelease}
        />
      )}
    </div>
  );
};

export default SlideShowWeb;
