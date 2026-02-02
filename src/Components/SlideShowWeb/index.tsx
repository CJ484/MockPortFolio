import { useRef, useState } from "react";
import "@/styles/pages/portfolioWeb.scss";

interface SlideShowWebProps {
  photos: string[];
}

const SlideShowWeb: React.FC<SlideShowWebProps> = ({ photos }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPositionStart, setScrollPositionStart] = useState(true);
  const [scrollPositionEnd, setScrollPositionEnd] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleScrollPosition = () => {
    if (!scrollContainerRef.current) return false;
    
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

  const handleMouseDown = (direction: string) => {
    intervalRef.current = setInterval(() => {
      if (!scrollContainerRef.current) return;
      
      if (direction === "left") {
        // Scroll left or right
        if (handleScrollPosition() === "leftSideMaxed") {
          if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
          scrollContainerRef.current.scrollLeft -= 10;
          return;
        }
      } else {
        if (handleScrollPosition() === "rightSideMaxed") {
          if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
          scrollContainerRef.current.scrollLeft += 10;
          return;
        }
      }
    }, 10);
  };

  const mouseRelease = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="portfolioPageWeb">
      {scrollPositionStart ? null : (
        <img
          className="slideShowButton left"
          id="leftButton"
          src="/symbols/nav_left.svg"
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
          id="rightButton"
          src="/symbols/nav_right.svg"
          alt="Right button for slideshow"
          onMouseDown={() => handleMouseDown("right")}
          onMouseUp={mouseRelease}
        />
      )}
    </div>
  );
};

export default SlideShowWeb;
