// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './minetor.css'
import React, { useEffect, useState } from "react"
import LiftSide from '../TodayDeals/todayDealsLiftSide/liftSide';
import '../TodayDeals/todayDealsLiftSide/leftSide.css'
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { fetchcategory } from '../../../store/Slice/categorySlice';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export default function Monitor() {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchcategory("Monitors"))
        console.log(dispatch)
    }, [dispatch])
    let monitorsList = useSelector((state) => {
        // console.log(state)
        // console.log(monitorsList)
        return state.category.data
    })
    const [page, setPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(12);


    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = monitorsList.slice(indexOfFirstItem, indexOfLastItem);
    console.log("ca",currentItems)
    console.log(monitorsList)

    return (
        <>
            <div className=' container-fluid '>
                <div className='row'>

                    <LiftSide className='s' />
                    <div className='col-xl-10 col-md-9 col-12'>
                        <div className="row d-flex justify-content-center">
                            <h1>result</h1>                            {currentItems.map((prd) => {
                                return (
                                    <Card className='col-xl-3 col-lg-4 col-md-5  col-5 mx-2 my-3' key={prd._id}>
                                        <Card.Img variant="top" className='img' src={prd.img} />
                                        <Card.Body>
                                            <Card.Title className='title-wrapper'>{prd.title_en}</Card.Title>
                                            <Card.Text className='m-0'>
                                                <span className='fs-4' >deliveryDate</span>                {prd.quantity}
                                            </Card.Text>
                                            <Card.Text className='m-0'>
                                                <span className='fs-4' > old price</span>                {prd.price['old']}
                                            </Card.Text>
                                            <Card.Text className='m-0'>
                                                <span className='fs-4' > new price</span>                {prd.price['new']}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                )
                            })}
                        </div>
                    </div>
                </div>
                <PaginationControl
                    page={page}
                    between={4}
                    total={250}
                    limit={20}
                    changePage={(page) => {
                        setPage(page)
                    }}
                    ellipsis={1}
                />
            </div >
        </>)
}

