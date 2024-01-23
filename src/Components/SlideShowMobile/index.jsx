import {navUp} from '../../Assets/images/symbols/'
import '../../Assets/styles/pages/portfolioMobile.scss';
const SlideShowMoile = ({photos}) => {

    const backToTop = () => {
        document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div id='portfolio' className="portfolioPageMobile">
        {photos.map((image, index) => {
            return (
                    <img
                        key={index}
                        className="slideShowMobile_image"
                        src={image}
                        alt={"Mobile Illustration"+ index}
                    />

            );
        })}
        <img className='navButton' src={navUp} alt="Button to scroll top" onClick={backToTop}/>
        </div>
    )
}

export default SlideShowMoile;
