import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Images({ img1, img2, img3, img4, img5 }) {
  return (
    <Carousel>
        <div>
            <img src={img1} alt="" />
        </div>
        <div>
            <img src={img2} alt="" />
        </div>
        <div>
            <img src={img3} alt="" />
        </div>
        <div>
            <img src={img4} alt="" />
        </div>
        <div>
            <img src={img5} alt="" />
        </div>
    </Carousel>
  )
}

export default Images
