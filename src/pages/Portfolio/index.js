import portfolioImagesWeb from "../../Assets/images/pictures/illustrationWeb/index.js";
import '../../Assets/styles/portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolioPageWeb">
      <div className="imageSlideShow">
        {portfolioImagesWeb.map((image, index) => {
          return (
              <img key={index} src={image} alt="Web" />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
