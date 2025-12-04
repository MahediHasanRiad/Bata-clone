import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Slider({ image1, image2, image3, image4, image5 }) {
  return (

      <Carousel autoPlay={true} centerMode={true} infiniteLoop={true} >
        <div>
          <img src={image1} />
          
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
          
        </div>
        <div>
          <img src={image4} />
          
        </div>
        <div>
          <img src={image5} />
          
        </div>
      </Carousel>

  );
}

export default Slider;
