import { NavUp } from '@/assets/symbols';
import "@/styles/pages/portfolioMobile.scss";


export default function SlideShowMobile({ photos }: { photos: string[] }) {
  const backToTop = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="portfolio" className="portfolioPageMobile">
      {photos.map((image, index) => {
        return (
          <img
            key={index}
            className="slideShowMobile_image"
            src={image}
            alt={"Mobile Illustration" + index}
          />
        );
      })}
      <NavUp
        className="navButton"
        onClick={backToTop}
      />
    </div>
  );
};

