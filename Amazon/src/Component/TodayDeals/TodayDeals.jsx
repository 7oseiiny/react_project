import React, { useLayoutEffect, useState } from 'react'
import HeaderSlider from './todayDealsComponents/HeaderSlider'
import LiftSide from './todayDealsLiftSide/liftSide';
import TodayMain from './todayDealsMain/TodayMain';
import Pagination from 'react-bootstrap/Pagination';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'
import Sliders from './todayDealsComponents/sliders';

export default function TodayDeals() {
    const [screenWidth, setScreen] = useState(window.innerWidth);

    useLayoutEffect(function () {
        function handleResize() {
            setScreen(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // console.log(screenWidth);
    return (
        <>
           
                <div className="p-3" style={{ boxSizing: "border-box" }}>
                    <h3>Todays Deals</h3>
                    <HeaderSlider numberOfItems={(screenWidth > 1200) ? 12 : (screenWidth < 1200 && screenWidth > 768) ? 6 : (screenWidth < 768 && screenWidth > 466) ? 4 : 2} />
                </div>
                <div className="container-fluid">
                    <hr />
                    <div className="row d-flex">
                        <LiftSide />
                        <TodayMain />
                    </div>
                </div>
                <div className='container d-flex justify-content-center my-5'>
                    <Pagination id='todayDealsPagination' >
                        <Pagination.Item disabled><GrLinkPrevious />Previous</Pagination.Item>
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item >{2}</Pagination.Item>
                        <Pagination.Item >{3}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{21}</Pagination.Item>
                        <Pagination.Item>Next<GrLinkNext /></Pagination.Item>
                    </Pagination>
                </div>
                <div className="p-3" style={{ boxSizing: "border-box" }}>
                    <span className="d-flex align-items-baseline">
                        <h3 className="me-1">Related to Items you`ve viewed</h3><span className="seeMore">See more</span>
                    </span>
                    <Sliders numberOfItems={(screenWidth > 1200) ? 6 : (screenWidth < 1200 && screenWidth > 768) ? 3 : (screenWidth < 768 && screenWidth > 500) ? 2 : 1} />
                </div>
                <hr/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="d-flex flex-column align-items-center">
                                <span>See personalized recommendations</span>
                                <button className="btn btn-warning col-md-2 col-3 fw-bold">Sign in</button>
                                <span>New customer? <a href="#" className="link-success text-decoration-none">Start here.</a></span>
                            </div>
                        </div>
                    </div>
            
        </>
    )
}
