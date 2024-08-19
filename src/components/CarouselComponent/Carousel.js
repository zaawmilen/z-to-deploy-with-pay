import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
/// Import images from assets folder
import image1 from '../../assets/images/img/image1.jpg';
import image2 from '../../assets/images/img/image2.jpg';
import image3 from '../../assets/images/img/image3.jpg';
import image4 from '../../assets/images/img/image4.jpg';
const Carousel = () => {
  return (
    <ReactCarousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src={image1} alt="Carousel Item 1" />
      </div>
      <div>
        <img src={image2} alt="Carousel Item 2}" />
      </div>
      <div>
        <img src={image3} alt="Carousel Item 3" />
      </div>
      <div>
        <img src={image4} alt="Carousel Item 4}" />
      </div>
    </ReactCarousel>
  );
};

export default Carousel;
