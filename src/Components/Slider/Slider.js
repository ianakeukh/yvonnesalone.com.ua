import React from 'react'
import './Slider.css'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from 'mdbreact';

const Slider = () => {
  return (
      <div>
        <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1 slider"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/slider5.jpg')}
                    alt="Second slide"
                />
                <MDBMask overlay="black" className="slide2"></MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/slide2.jpg')}
                    alt="Second slide"
                />
                <MDBMask overlay="black" className="slide2"></MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3" className='slide'>
              <MDBView>
                <img
                    className="d-block h-100 w-100 slideimage"
                    src={require('../../img/slider/images15.jpg')}
                    alt="Second slide"
                />
                <MDBMask overlay="black" className="slide2"></MDBMask>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
  );
}

export default Slider;
