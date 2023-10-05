// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './minetor.css'
import React from "react"
import LiftSide from '../TodayDeals/todayDealsLiftSide/liftSide';
import '../TodayDeals/todayDealsLiftSide/leftSide.css'
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
export default function Monitor() {
    var data = [

        {
            id: 5,
            imageURL: "https://m.media-amazon.com/images/I/81zM2vVM+wL._AC_UL320_.jpg",
            title: "Sceptre 24-inch Professional Thin 1080p LED Monitor 99% sRGB 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)",
            rate: "4.6",
            totalRates: "27.7K+",
            price: "$89.97",
            discount: "$70.97",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 6,
            imageURL: "https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL320_.jpg",
            title: "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)",
            rate: "4.7",
            totalRates: "24.4K+",
            price: "$159.99",
            discount: null,
            deliveryDate: "Thu, Oct 5 "
        },
        {
            id: 7,
            imageURL: "https://m.media-amazon.com/images/I/81rsMys9S8L._AC_UL320_.jpg",
            title: "KYY Portable Monitor 15.6inch 1080P FHD USB-C Laptop Monitor HDMI Computer Display HDR IPS Gaming Monitor w/Premium Smart Cover & Screen Protector, Speakers, for Laptop PC MAC Phone PS4 Xbox Switch",
            rate: "4.5",
            totalRates: "5.3K+",
            price: "$129.99",
            discount: "$219.99",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 8,
            imageURL: "https://m.media-amazon.com/images/I/71iMPr0C8KL._AC_UL320_.jpg",
            title: "PHILIPS Computer Monitors 22 inch Class Thin Full HD (1920 x 1080) 75Hz Monitor, VESA, HDMI & VGA Port, 4 Year Advance Replacement Warranty, 221V8LN",
            rate: "4.6",
            totalRates: "1.2K+",
            price: "$69.99",
            discount: null,
            deliveryDate: "Sep 19 - Oct 8 "
        },
        {
            id: 9,
            imageURL: "https://m.media-amazon.com/images/I/61HXwkwWPqL._AC_UL320_.jpg",
            title: "ARZOPA Portable Monitor, 15.6'' 1080P FHD Laptop Monitor USB C HDMI Computer Display HDR Eye Care External Screen w/Smart Cover for PC Mac Phone Xbox Switch PS5-S1 Table",
            rate: "4.4",
            totalRates: "5.2K+",
            price: "$129.99",
            discount: null,
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 10,
            imageURL: "https://m.media-amazon.com/images/I/81MILcvJgUL._AC_UL320_.jpg",
            title: "MNN Portable Monitor 15.6inch FHD 1080P Laptop Monitor USB C HDMI Gaming Ultra-Slim IPS Display w/Smart Cover & Speakers,HDR Plug&Play, External Monitor for Laptop PC Phone Mac Xbox (15.6'' 1080P)",
            rate: "4.7",
            totalRates: "3.4K+",
            price: "$98.82",
            discount: null,
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 11,
            imageURL: "https://m.media-amazon.com/images/I/71P0M7tKjYL._AC_UL320_.jpg",
            title: "Sceptre Curved 24-inch Gaming Monitor 1080p R1500 98% sRGB HDMI x2 VGA Build-in Speakers, VESA Wall Mount Machine Black (C248W-1920RN Series)",
            rate: "4.6",
            totalRates: "18.7K+",
            price: "$99.97",
            discount: "$92.97",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 12,
            imageURL: "https://m.media-amazon.com/images/I/91K9SyGiyzL._AC_UL320_.jpg",
            title: "Acer 23.8” Full HD 1920 x 1080 IPS Zero Frame Home Office Computer Monitor - 178° Wide View Angle - 16.7M - NTSC 72% Color Gamut - Low Blue Light - Tilt Compatible - VGA HDMI DVI R240HY bidx",
            rate: "4.7",
            totalRates: "15.4K+",
            price: "$149.99",
            discount: "$99.99",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 13,
            imageURL: "https://m.media-amazon.com/images/I/81PVpvJQBeL._AC_UL320_.jpg",
            title: "Dell SE2722HX Monitor - 27 inch FHD (1920 x 1080) 16:9 Ratio with Comfortview (TUV-Certified), 75Hz Refresh Rate, 16.7 Million Colors, Anti-Glare Screen with 3H Hardness - Black",
            rate: "4.6",
            totalRates: "2.4K+",
            price: "$49.99",
            discount: null,
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 14,
            imageURL: "https://m.media-amazon.com/images/I/51b5m+T6ZKL._AC_UL320_.jpg",
            title: "Sceptre 22 inch 75Hz 1080P LED Monitor 99% sRGB HDMI X2 VGA Build-In Speakers, Machine Black (E225W-19203R series)",
            rate: "4.6",
            totalRates: "8.4K+",
            price: "$67.97",
            discount: "$89.97",
            deliveryDate: "Thu, Oct 5 "
        },
        {
            id: 15,
            imageURL: "https://m.media-amazon.com/images/I/71PZf0YdiLL._AC_UL320_.jpg",
            title: "SANSUI Monitor 27 inch FHD 1080p 75Hz USB Type-C Computer Monitor HDMI VGA Built-in Speakers Headphone Eye Care VESA Compatible for Home Office(ES-27F1 Type-C Cable & HDMI Cable Included)",
            rate: "4.5",
            totalRates: "406",
            price: "$116.29",
            discount: "$106.99",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 16,
            imageURL: "https://m.media-amazon.com/images/I/81dcBdBw3+L._AC_UL320_.jpg",
            title: "GTEK 240Hz Gaming Monitor, 27 Inch Frameless Display Full HD 1920 x 1080P, Curved 1800R, VA 1ms MPRT, FreeSync, Speakers, DisplayPort/HDMI, VESA - F2740C",
            rate: "4.6",
            totalRates: "959",
            price: "$229.99",
            discount: "$199.99",
            deliveryDate: "Thu, Oct 5 "
        },
        {
            id: 17,
            imageURL: "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UL320_.jpg",
            title: "Acer 21.5 Inch Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Computer Monitor (HDMI & VGA Port), SB220Q bi",
            rate: "4.6",
            totalRates: "43.7K+",
            price: "$99.99",
            discount: "$99.99",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 18,
            imageURL: "https://m.media-amazon.com/images/I/71pLtrvTfqL._AC_UL320_.jpg",
            title: "ForHelp 15.6inch Portable Monitor,1080P USB-C HDMI Second External Monitor for Laptop,PC,Mac Phone,PS,Xbox,Swich,IPS Ultra-Thin Zero Frame Gaming Monitor/Premium Smart Cover",
            rate: "4.7",
            totalRates: "1.8K+",
            price: "$99.66",
            discount: null,
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 19,
            imageURL: "https://m.media-amazon.com/images/I/71WnTimV+OL._AC_UL320_.jpg",
            title: "Dell S2722QC 27-inch 4K USB-C Monitor - UHD (3840 x 2160) Display, 60Hz Refresh Rate, 8MS Grey-to-Grey Response Time (Normal Mode), Built-in Dual 3W Speakers, 1.07 Billion Colors - Platinum Silver",
            rate: "4.3",
            totalRates: "1.2K+",
            price: "$369.99",
            discount: null,
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 20,
            imageURL: "https://m.media-amazon.com/images/I/61FYOyYCg1S._AC_UL320_.jpg",
            title: "Sceptre 27-Inch FHD LED Gaming Monitor 75Hz 2X HDMI VGA Build-in Speakers, Ultra Slim Metal Black",
            rate: "4.5",
            totalRates: "7.6K+",
            price: "$149.97",
            discount: "$109.97",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 21,
            imageURL: "https://m.media-amazon.com/images/I/81FTa3aSdnL._AC_UL320_.jpg",
            title: "Acer KB272 EBI 27\" IPS Full HD (1920 x 1080) Zero-Frame Gaming Office Monitor | AMD FreeSync Technology | Up to 100Hz Refresh | 1ms (VRB) | Low Blue Light | Tilt | HDMI & VGA Ports,Black",
            rate: "4.6",
            totalRates: "2K+",
            price: "$159.99",
            discount: "$119.99",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 22,
            imageURL: "https://m.media-amazon.com/images/I/61B8Lq5NXmL._AC_UL320_.jpg",
            title: "SAMSUNG T350 Series 22-Inch FHD 1080p Computer Monitor, 75Hz, IPS Panel, HDMI, VGA (D-Sub), 3-Sided Border-Less, FreeSync (LF22T350FHNXZA)",
            rate: "4.5",
            totalRates: "3.5K+",
            price: "$149.99",
            discount: "$129.99",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 23,
            imageURL: "https://m.media-amazon.com/images/I/71ZIVPxclML._AC_UL320_.jpg",
            title: "Dell S2421HS Full HD 1920 x 1080, 24-Inch 1080p LED, 75Hz, Desktop Monitor with Adjustable Stand, 4ms Grey-to-Grey Response Time, AMD FreeSync, IPS Technology, HDMI, DisplayPort, Silver",
            rate: "4.7",
            totalRates: "874",
            price: "$129.99",
            discount: null,
            deliveryDate: null
        },
        {
            id: 24,
            imageURL: "https://m.media-amazon.com/images/I/71-4ZeUWzqL._AC_UL320_.jpg",
            title: "Sceptre Curved 27\" FHD 1080p 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)",
            rate: "4.6",
            totalRates: "13.9K+",
            price: "$127.97",
            discount: "$119.88",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 25,
            imageURL: "https://m.media-amazon.com/images/I/71yo3bmyBnL._AC_UL320_.jpg",
            title: "Acer Nitro KG241Y Sbiip 23.8” Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms (VRB) | ZeroFrame Design | 1 x Display Port 1.2 & 2 x HDMI 2.0,Black",
            rate: "4.6",
            totalRates: "4.3K+",
            price: "$179.99",
            discount: "$149.99",
            deliveryDate: "Thu, Oct 5 "
        },
        {
            id: 26,
            imageURL: "https://m.media-amazon.com/images/I/71YIbSoWRzL._AC_UL320_.jpg",
            title: "Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide/ Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN1)",
            rate: "4.6",
            totalRates: "10.4K+",
            price: "$249.97",
            discount: "$219.97",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 27,
            imageURL: "https://m.media-amazon.com/images/I/81dAe2wXIqL._AC_UL320_.jpg",
            title: "LG UltraGear QHD 27-Inch Gaming Monitor 27GL83A-B - IPS 1ms (GtG), with HDR 10 Compatibility, NVIDIA G-SYNC, and AMD FreeSync, 144Hz, Black",
            rate: "4.7",
            totalRates: "10.7K+",
            price: "$299.99",
            discount: null,
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 28,
            imageURL: "https://m.media-amazon.com/images/I/81-53iRCjcL._AC_UL320_.jpg",
            title: "ASUS TUF Gaming 27\" 2K HDR Gaming Monitor (VG27AQ) - QHD (2560 x 1440), 165Hz (Supports 144Hz), 1ms, Extreme Low Motion Blur, Speaker, G-SYNC Compatible, VESA Mountable, DisplayPort, HDMI ,Black",
            rate: "4.6",
            totalRates: "7.6K+",
            price: "$359.49",
            discount: "$309.00",
            deliveryDate: "Thu, Oct 5 "
        },
        {
            id: 29,
            imageURL: "https://m.media-amazon.com/images/I/81U+MhwN2OL._AC_UL320_.jpg",
            title: "LG FHD 32-Inch Computer Monitor 32ML600M-B, IPS with HDR 10 Compatibility, Black",
            rate: "4.6",
            totalRates: "2.9K+",
            price: "$279.99",
            discount: "$199.99",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 30,
            imageURL: "https://m.media-amazon.com/images/I/71P1MZ8ztDL._AC_UL320_.jpg",
            title: "Sceptre Curved 24.5-inch Gaming Monitor up to 240Hz 1080p R1500 1ms DisplayPort x2 HDMI x2 Blue Light Shift Build-in Speakers, Machine Black 2023 (C255B-FWT240)",
            rate: "4.4",
            totalRates: "388",
            price: "$159.97",
            discount: "$134.97",
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 31,
            imageURL: "https://m.media-amazon.com/images/I/51b5m+T6ZKL._AC_UL320_.jpg",
            title: "Sceptre 22 inch 75Hz 1080P LED Monitor 99% sRGB HDMI X2 VGA Build-In Speakers, Machine Black (E225W-19203R series)",
            rate: "4.6",
            totalRates: "8.4K+",
            price: "$97.97",
            discount: "$89.97",
            deliveryDate: "Thu, Oct 5 "
        },
        {
            id: 32,
            imageURL: "https://m.media-amazon.com/images/I/61XMUHsEd1L._AC_UL320_.jpg",
            title: "Portable Monitor Touchscreen, 14 Inch Laptop Monitor FHD 1080P IPS HDR 16:9 PC Display, 300cd/m², HDMI USB Type-C Touch Screen External Monitor for PC Phones Xbox Ras Pi, Built-in Kickstand & Speakers",
            rate: "4.8",
            totalRates: "6",
            price: "$109.99",
            discount: null,
            deliveryDate: "Wed, Oct 4 "
        },
        {
            id: 33,
            imageURL: "https://m.media-amazon.com/images/I/71N9jOUhEpL._AC_UL320_.jpg",
            title: "Norcent 27 Inch Desktop Frameless Monitor, 75hz Full HD 1080p VA LED Display, HDMI VGA Port, Wide Viewing Angle Blue Light Protection, Thin Frame Vesa Mountable, Adjustable Angle Screen",
            rate: "5.0",
            totalRates: "1",
            price: "$109.99",
            discount: null,
            deliveryDate: "Thu, Oct 5 "
        },
        {
            id: 34,
            imageURL: "https://m.media-amazon.com/images/I/71kNuKHcq-L._AC_UL320_.jpg",
            title: "Sceptre 34-Inch Curved Ultrawide WQHD Monitor 3440 x 1440 R1500 up to 165Hz DisplayPort x2 99% sRGB 1ms Picture by Picture, Machine Black 2023 (C345B-QUT168)",
            rate: "4.1",
            totalRates: "123",
            price: "$299.97",
            discount: null,
            deliveryDate: "Wed, Oct 4 "
        }
    ]
    return (
        <>


            <div className=' container-fluid '>
                <div className='row'>

                    <LiftSide className='s' />
                    <div className='col-xl-10 col-md-9 col-12'>
                        <div className="row d-flex justify-content-center">
                            <h1>result</h1>                            {data.map((prd) => {
                                return (
                                    <Card className='col-xl-2 col-lg-3 col-md-5  col-5 mx-2 my-3' key={prd.id}>
                                        <Card.Img variant="top" className='img' src={prd.imageURL} />
                                        <Card.Body>
                                            <Card.Title className='title-wrapper'>{prd.title}</Card.Title>
                                            <Card.Text className='m-0'>
                                                {/* <span className='fs-4' >{prd.price}</span> */}
                                                {prd.discount == null ? <>
                                                    <span className='fs-4' >{prd.price}</span>
                                                </> : <>
                                                    <span style={{ textDecoration: "line-through" }}>({prd.price})</span>

                                                </>
                                                }


                                            </Card.Text>
                                            <Card.Text className='m-0'>
                                                <span className='fs-4' >
                                                    {prd.discount == null ? <></> : <>discount : {prd.discount}</>}
                                                </span>

                                            </Card.Text>
                                            <Card.Text className='m-0'>
                                                <span className='fs-4' ></span>                {prd.rate}            <div className="d-inline-block">
                                                    <BsStarFill color='#FFA41C' />
                                                    <BsStarFill color='#FFA41C' />
                                                    <BsStarFill color='#FFA41C' />
                                                    <BsStarHalf color='#FFA41C' />
                                                    <BsStar color='#FFA41C' />

                                                </div>
                                                <span style={{ color: "#007185" }}>({prd.totalRates})</span>
                                            </Card.Text>

                                            {/* <Card.Text>
                                                <span className='fs-4' >totalRates</span>                {prd.totalRates}
                                            </Card.Text> */}
                                            <Card.Text className='m-0'>
                                                <span className='fs-4' >deliveryDate</span>                {prd.deliveryDate}
                                            </Card.Text>
                                            {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>
                                    </Card>

                                )



                            })}


                        </div>

                    </div>

                </div>

            </div >



        </>)
}

{/* <div className="d-inline-block">
<BsStarFill color='#FFA41C' />
<BsStarFill color='#FFA41C' />
<BsStarFill color='#FFA41C' />
<BsStarHalf color='#FFA41C' />
<BsStar color='#FFA41C' />
31
</div>   */}