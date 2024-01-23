import { SlideShowWeb, SlideShowMobile } from "../../Components";

const Portfolio = ({webImages, mobileImages}) => {
  return (
    <>
      <SlideShowMobile photos={mobileImages}/>
      <SlideShowWeb photos={webImages}/>
    </>
  );
};

export default Portfolio;
