import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: require('./images/Wil1.jpg'),
  },
  {
    url: require('./images/willf1.webp'),
  },
  {
    url: require('./images/wil-hunt.png'),
  },
  {
    url: require('./images/Wil2.jpg'),
  },
  {
    url: require('./images/prince-will.webp'),
  },
  {
    url: require('./images/wil-poet.png'),
  },
  {
    url: require('./images/capt-wil.png'),
  },
  {
    url: require('./images/Wil3.jpg'),
  },
  {
    url: require('./images/wiliam.jpg'),
  },
  {
    url: require('./images/Wil5.jpg'),
  },
  {
    url: require('./images/will-dog.jpg'),
  },
  {
    url: require('./images/wilfred-dog.webp'),
  },
  {
    url: require('./images/will-s.jpg'),
  },
];

function SlideShow() {
  return (
    <div className="SlideShow">
      <div className="slide-container">
        <Slide>
          {slideImages.sort(() => Math.random() - 0.5).map((slideImage, index)=> (
            <div className="flex justify-center each-slide" key={index}>
              <img className="rounded-lg max-h-96" src={ slideImage.url } />
            </div>
          ))} 
        </Slide>
      </div>
    </div>
  );
}

export default SlideShow;


