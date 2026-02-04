import { useRef, useState } from "react";
import { NavLeft, NavRight, NavUp } from '@/assets/symbols';
import "./slideshow.scss";

export default function SlideShow({ photos }: { photos: string[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPositionStart, setScrollPositionStart] = useState(true);
  const [scrollPositionEnd, setScrollPositionEnd] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <div className="slideShow">
      {scrollPositionStart ? null : (
        <NavLeft
          className="slideShow__button left"
          id="leftButton"
          onMouseDown={() => handleMouseDown("left")}
          onMouseUp={mouseRelease}
        />
      )}
      <div
        className="slideShow__images"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {photos.map((image, index) => {
          return <img key={index} src={image} alt="Web" className="slideShow__images_image" />;
        })}
      </div>

      {scrollPositionEnd ? null : (
        <NavRight
          className="slideShow__button right"
          id="rightButton"
          onMouseDown={() => handleMouseDown("right")}
          onMouseUp={mouseRelease}
        />
      )}
      <NavUp className="slideShow__button up" onClick={backToTop} />
    </div>
  );
};

