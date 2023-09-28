import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import PropTypes from 'prop-types';
import '../todayDeals.css'


export default function HeaderSlider(props) {
  return (
    <Splide options={ { perPage: props.numberOfItems, rewind: true , pagination:false } } aria-label="React Splide TodayDeals" className='splide'>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/allDeals.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">All Deals</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/extra discount coupons.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">extra discount coupons</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/primeExeclusiveDeals.png" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">prime Exclusive Deals</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/Electronics.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Electronics</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/Home&Kitchen.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Home& Kitchen</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/health%20and personal care.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Health & Personal Care</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/Beauty.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Beauty</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/mobiles&Accessoires.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Mobiles& Accessories</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/supermarket.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">supermarket</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/pc&accessoires.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">PC & accessories</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/fashion.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Fashion</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/baby.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Baby</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/toys.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Toys</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/office supplies.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Office Supplies</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/tools&home.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Tools&Home Improvement</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/Automative.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Automotive</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/outdoor&Garden.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Outdoor& Garden</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/sports.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Sports</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/video Game.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Video Game</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='d-flex flex-column justify-content-center align-content-center container'>
        <img src="./assets/todayDealsImage/Books.jpg" alt="Image 1"/>
        <div className="fw-bolder text-center TDSlideText">Books</div>
        </div>
      </SplideSlide>
    </Splide>
  );
}
HeaderSlider.propTypes={
  numberOfItems:PropTypes.number.isRequired
}
