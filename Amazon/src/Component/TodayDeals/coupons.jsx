import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import {AiOutlineDown} from 'react-icons/ai'
import CouponsCards from './todayDealsComponents/couponsCards';
export default function Coupons() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showCat, setShowCat] = useState(false);
    const handleCloseCat = () => setShowCat(false);
    const handleShowCat = () => setShowCat(true);
    return (
        <div className='container-fluid'>
            <div className='container d-flex flex-column align-items-center my-3'>
                <img className='img-fluid' style={{ maxWidth: "428px" }} src='https://images-eu.ssl-images-amazon.com/images/G/42/Coupons/Store/1214908_coupon_banner_mobile_en.jpg' />
                <h3>Most Popular Coupons</h3>
                <h6>Display:</h6>
                <Button style={{backgroundColor:"#f0f2f2", color:"black"}} className='shadow border-0' onClick={handleShow}>
                    All Coupons <AiOutlineDown/>
                </Button>

                <Modal show={show} onHide={handleClose} size='lg' className='h-75 overflow-auto my-5'>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body className='p-0'>
                        <ListGroup >
                            <ListGroup.Item>All Coupons</ListGroup.Item>
                            <ListGroup.Item>BabyProducts</ListGroup.Item>
                            <ListGroup.Item>Beauty</ListGroup.Item>
                            <ListGroup.Item>Camera</ListGroup.Item>
                            <ListGroup.Item>Clothing & Accessories</ListGroup.Item>
                            <ListGroup.Item>Computers & Accessories</ListGroup.Item>
                            <ListGroup.Item>Tools & HomeImprovement</ListGroup.Item>
                            <ListGroup.Item>Electronics</ListGroup.Item>
                            <ListGroup.Item>Grocery & Gourmet</ListGroup.Item>
                            <ListGroup.Item>Health & Personal Care</ListGroup.Item>
                            <ListGroup.Item>Home & Kitchen</ListGroup.Item>
                            <ListGroup.Item>Jewelry</ListGroup.Item>
                            <ListGroup.Item>Office & School Supplies</ListGroup.Item>
                            <ListGroup.Item>Pets Supplies</ListGroup.Item>
                            <ListGroup.Item>Shoes & Handbags</ListGroup.Item>
                            <ListGroup.Item>Sports & Outdoors</ListGroup.Item>
                            <ListGroup.Item>Toys & Games</ListGroup.Item>
                            <ListGroup.Item>Watches</ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>

                </Modal>
                <h6>sort by :</h6>
                <Button style={{backgroundColor:"#f0f2f2", color:"black"}} className='shadow-lg border-0' onClick={handleShowCat}>
                    Most Popular <AiOutlineDown/>
                </Button>

                <Modal show={showCat} onHide={handleCloseCat} size='lg' className='h-75 overflow-auto my-5'>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body className='p-0'>
                        <ListGroup >
                            <ListGroup.Item>Most Popular</ListGroup.Item>
                            <ListGroup.Item>Newest</ListGroup.Item>
                            <ListGroup.Item>Oldest</ListGroup.Item>
                            <ListGroup.Item>Expiring Soon</ListGroup.Item>
                            <ListGroup.Item>Discount Percentage</ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>

                </Modal>
            </div>
            <div className='container-fluid'>    
             <div className='row'>
             <CouponsCards/>
             <CouponsCards/>
             </div>
             <div className='row'>
             <CouponsCards/>
             <CouponsCards/>
             </div>
             <div className='row'>
             <CouponsCards/>
             <CouponsCards/>
             </div>
             <div className='row'>
             <CouponsCards/>
             <CouponsCards/>
             </div>
             <div className='row'>
             <CouponsCards/>
             <CouponsCards/>
             </div>
             <div className='row'>
             <CouponsCards/>
             <CouponsCards/>
             </div>
             <div className='row'>
             <CouponsCards/>
             <CouponsCards/>
             </div>
             <div className='row'>
             <CouponsCards/>
             <CouponsCards/>
             </div>   
            </div>
            <div className='row d-flex justify-content-center my-3'>
            <button className='btn btn-light border border-1 border-black rounded  col-2'> Show More Coupons</button>
            </div>
        </div>
    )
}