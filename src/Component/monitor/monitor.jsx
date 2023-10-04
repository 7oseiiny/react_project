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
import axios from 'axios';

export default function Monitor() {
    const [page, setPage] = useState(1)
    console.log("pageq",page)
    // let dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchcategory("Monitors",page))
    // }, [dispatch,page])
    const [data, setData] = useState([]);
    const [pagechang, setpagechang] = useState(1)
    useEffect(() => {
        axios.get(`http://localhost:3300/category/getbyname/Monitors?pageNumber=${page}`)
          .then(response => setData(response.data.data.products))
          .catch(error => console.error(error));
      }, [page]);
      console.log("dataa",data)
    // let monitorsList = useSelector((state) => {
    //     // console.log(state)
    //     // console.log(monitorsList)
    //     return state.category.data
    // })

    // const itemsPerPage=5

    // const indexOfLastItem = page * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = data
    console.log("pagez",page)

    return (
        <>
            <div className=' container-fluid '>
                <div className='row'>

                    <LiftSide className='s' />
                    <div className='col-xl-10 col-md-9 col-12'>
                        <div className="row d-flex justify-content-center">
                            <h1>result</h1>                            {data.map((prd) => {
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
                    total={40}
                    limit={12}
                    changePage={(page) => {
                        setPage(page)
                        console.log("pageff",page)

                    }}
                    ellipsis={1}
                />
            </div >
        </>)
}

