//////////////////////////////////////////////

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Books.css";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rate from "../rate/rate";
import { PaginationControl } from 'react-bootstrap-pagination-control';

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Books from './Books';
// import Books from './Books';
import { useEffect } from 'react';
import Sliders from "./sliders";
import { useDispatch, useSelector } from "react-redux";
import { fetchcategory, fetchcategorypage } from "../../../store/Slice/categorySlice";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { addProductInCart, fetchCart } from "../../../store/Slice/cartSlice";
import { addProductInfavorite, fetchfavorite } from "../../../store/Slice/favorite";
import axiosInstance from "../../axiosConfig/instance";

export default function Books() {
  const [page, setPage] = useState(1)

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [change, setchange] = useState(0);
  let [pages, setpages] = useState(0);
  
  useEffect(() => {
    dispatch(fetchcategory("books",))
    dispatch(fetchCart())
    dispatch(fetchfavorite())
  }, [dispatch,change])

  useEffect(()=>{
    // setpages(dispatch(fetchcategorypage("books")))
    axiosInstance.get(`/category/getbyname/books`).then((p)=>{setpages(p.data.pages);})

  },[change])
  // console.log(pages);
  var listbook = useSelector((state) => { return state.category.data })
  var cart = useSelector((state) => { return state.cart.data })
  var fav = useSelector((state) => { return state.favorite.data.productId })

  function isInCart(bookId) {
    for (const item of cart) {

      if (bookId == item.product._id) {
        return true
      }


    }
  }
  function isinfav(bookId) {
    for (const item of fav) {

      if (bookId == item._id) {
        return true
      }


    }
  }

  function viewcart() {
    navigate("/cart")
  }
  const [screenWidth, setScreen] = useState(window.innerWidth);


  var outhors = ["1", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  async function addtocart(productId) {
    await dispatch(addProductInCart({ "items": [{ "product": productId, "quantity": 1 }] }))
    setchange(productId)
  }
  async function addtofav(productId) {
    await dispatch(addProductInfavorite(productId))
    setchange(productId+" ")
  }

  function gotodetails(bookId) {
    navigate("/productdetails", { state: { productId: bookId } });
  }

  return (
    <>
      <p style={{ fontSize: "40px" }} className="text-center ">
        Book at amazon
      </p>
      <div className="d-flex ">
        <div
          className="col-2 px-3"
          style={{
            minWidth: "240px",
            borderRight: "2px solid rgb(221,221,221)",
          }}
        >
          <h6 style={{ fontWeight: "100" }}>Popular in Books</h6>
          <div className="px-3 d-flex flex-column mb-3">
            <Link className="a-book"> Summer Reading</Link>
            <Link className="a-book"> Read with Pride</Link>
            <Link className="a-book"> Raising Asian Voices</Link>
            <Link className="a-book"> Books by Black Authors</Link>
            <Link className="a-book"> Hispanic and Latino Stories</Link>
            <Link className="a-book"> Books in Spanish</Link>
            <Link className="a-book"> Celebrity Picks</Link>
            <Link className="a-book"> Children's Books</Link>
            <Link className="a-book"> Deals in Books</Link>
            <Link className="a-book"> Best Books of 2023 So Far</Link>
            <Link className="a-book"> Best Books of the Month</Link>
          </div>
          <h6 style={{ fontWeight: "100" }}>More in Books</h6>
          <div className="px-3 d-flex flex-column mb-3">
            <Link className="a-book"> Book Merch Shop</Link>
            <Link className="a-book"> 100 Books to Read in a Lifetime</Link>
            <Link className="a-book"> Amazon Book Review</Link>
            <Link className="a-book"> Amazon Books on Facebook</Link>
            <Link className="a-book"> Amazon Books on Twitter</Link>
            <Link className="a-book"> Amazon First Reads</Link>
            <Link className="a-book"> Book Club Picks</Link>
            <Link className="a-book"> From Page to Screen</Link>
            <Link className="a-book"> Start a New Series</Link>
            <Link className="a-book"> Your Company Bookshelf</Link>
          </div>
          <h6 style={{ fontWeight: "100" }}> Textbooks</h6>
          <div className="px-3 d-flex flex-column mb-3">
            <Link className="a-book">Textbooks Store</Link>
            <Link className="a-book"> Textbook Rentals</Link>
            <Link className="a-book"> Kindle eTextbooks</Link>
          </div>
          <h6 style={{ fontWeight: "100" }}> Kindle & Audible</h6>
          <div className="px-3 d-flex flex-column mb-3">
            <Link className="a-book">Audible Audiobooks</Link>
            <Link className="a-book"> Kindle eBooks</Link>
            <Link className="a-book">Kindle Deals</Link>
            <Link className="a-book"> Kindle Unlimited</Link>
            <Link className="a-book"> Kindle Vella</Link>
            <Link className="a-book">Prime Reading</Link>
          </div>
          <h6 style={{ fontWeight: "100" }}> New Releases</h6>
          <div className=" d-flex flex-column mb-3">
            <Link style={{ fontSize: "15px" }} className="a-book">
              Last 30 days
            </Link>
            <Link style={{ fontSize: "15px" }} className="a-book">
              Last 90 days
            </Link>
            <Link style={{ fontSize: "15px" }} className="a-book">
              Coming Soon
            </Link>
          </div>

          <h6 style={{ fontWeight: "100" }}> Department</h6>
          <h6 className="px-3 " style={{ fontWeight: "100" }}>
            {" "}
            Books
          </h6>
          <div className="px-4 d-flex flex-column mb-3">
            <Link className="a-book"> Arts & Photography</Link>
            <Link className="a-book">Biographies & Memoirs</Link>
            <Link className="a-book">Business & Money</Link>
            <Link className="a-book">Calendars</Link>
            <Link className="a-book">Children's Books</Link>
            <Link className="a-book">Christian Books & Bibles</Link>
            <Link className="a-book">Comics & Graphic Novels</Link>
            <Link className="a-book">Computers & Technology</Link>
            <Link className="a-book"> Cookbooks, Food & Wine</Link>
            <Link className="a-book">Crafts, Hobbies & Home</Link>
            <Link className="a-book">Education & Teaching</Link>
            <Link className="a-book">Engineering & Transportation</Link>
            <Link className="a-book">Health, Fitness & Dieting</Link>
            <Link className="a-book">History</Link>
            <Link className="a-book">Humor & Entertainment</Link>
            <Link className="a-book">Law</Link>
            <Link className="a-book">LGBTQ+ Books</Link>
            <Link className="a-book">Literature & Fiction</Link>
            <Link className="a-book">Medical Books</Link>
            <Link className="a-book">Mystery, Thriller & Suspense</Link>
            <Link className="a-book">Parenting & Relationships</Link>
            <Link className="a-book">Politics & Social Sciences</Link>
            <Link className="a-book">Reference</Link>
            <Link className="a-book">Religion & Spirituality</Link>
            <Link className="a-book">Romance</Link>
            <Link className="a-book">Science & Math</Link>
            <Link className="a-book">Science Fiction & Fantasy</Link>
            <Link className="a-book">Self-Help</Link>
            <Link className="a-book">Sports & Outdoors</Link>
            <Link className="a-book">Teen & Young Adult</Link>
            <Link className="a-book">Test Preparation</Link>
            <Link className="a-book">Travel</Link>
          </div>
          <h6 style={{ fontWeight: "100" }}>Format</h6>
          <div className=" d-flex flex-column mb-3">
            <Link className="a-book">Paperback</Link>
            <Link className="a-book">Hardcover</Link>
            <Link className="a-book">Kindle Edition</Link>
            <Link className="a-book">Large Print</Link>
            <Link className="a-book">Audible Audiobook</Link>
            <Link className="a-book">Printed Access Code</Link>
            <Link className="a-book">Loose Leaf</Link>
            <Link className="a-book">Audio CD</Link>
            <Link className="a-book">Board Book</Link>
            <Link className="a-book">Spiral-bound</Link>
          </div>

          <h6 style={{ fontWeight: "100" }}>Kindle Unlimited</h6>
          <div className=" d-flex flex-column mb-3">
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Paperback
            </a>
          </div>
          <h6 style={{ fontWeight: "100" }}>Author</h6>
          <div className=" d-flex flex-column mb-3">
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Caroline Peckham
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Rebecca Yarros
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Marina J.
              Lostetter
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Gwendolyn Kiste
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Stephen King
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Keila Shaheen
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Ann Patchett
            </a>
          </div>
          <h6 style={{ fontWeight: "100" }}>Author</h6>
          <div className=" d-flex flex-column mb-3">
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Caroline Peckham
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Rebecca Yarros
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Marina J.
              Lostetter
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Gwendolyn Kiste
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Stephen King
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Keila Shaheen
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Ann Patchett
            </a>
          </div>
          <h6 style={{ fontWeight: "100" }}>Author</h6>
          <div className=" d-flex flex-column mb-3">
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Caroline Peckham
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Rebecca Yarros
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Marina J.
              Lostetter
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Gwendolyn Kiste
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Stephen King
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Keila Shaheen
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Ann Patchett
            </a>
          </div>
          <h6 style={{ fontWeight: "100" }}>Author</h6>
          <div className=" d-flex flex-column mb-3">
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Caroline Peckham
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Rebecca Yarros
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Marina J.
              Lostetter
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Gwendolyn Kiste
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Stephen King
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Keila Shaheen
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Ann Patchett
            </a>
          </div>
          <h6 style={{ fontWeight: "100" }}>Promotion</h6>
          <div className=" d-flex flex-column mb-3">
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Bargain Books
            </a>
          </div>
          <h6 style={{ fontWeight: "100" }}>Customer Reviews</h6>

          <div className="d-flex flex-column">
            <span>
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaRegStar />
              <span className="averageReview">& up</span>
            </span>
            <span>
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaRegStar />
              <FaRegStar />
              <span className="averageReview">& up</span>
            </span>
            <span>
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <span className="averageReview">& up</span>
            </span>
            <span>
              <FaStar className="checkedStar" />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <span className="averageReview">& up</span>
            </span>
          </div>
          <h6 style={{ fontWeight: "100" }}>Author</h6>
          <div className=" d-flex flex-column mb-3">
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Caroline Peckham
            </a>
            <a className="a-book">
              {" "}
              <FormCheckInput type="checkbox" name="" id="" /> Rebecca Yarros
            </a>
          </div>
        </div>

        <div className=" d-flex flex-column col-respons" >
          <img style={{ width: "100%" }} src="../assets/books/1.jpg" alt="" />
          <div style={{ height: "20px" }}></div>
          <img style={{ width: "100%" }} src="../assets/books/2.jpg" alt="" />
          <div style={{ height: "20px" }}></div>
          <div className="d-flex flex-nowrap">
            <img
              className="p-2"
              style={{ width: "25%" }}
              src="../assets/books/31.jpg"
              alt=""
            />
            <img
              className="p-2"
              style={{ width: "25%" }}
              src="../assets/books/32.jpg"
              alt=""
            />
            <img
              className="p-2"
              style={{ width: "25%" }}
              src="../assets/books/33.jpg"
              alt=""
            />
            <img
              className="p-2"
              style={{ width: "25%" }}
              src="../assets/books/34.jpg"
              alt=""
            />
          </div>

          <div className="w-100">
            <h2>Best sellers</h2>
            <div className=" d-flex flex-wrap p-2 ">
              {
              // Array.isArray(listbook)?
              listbook.map((book) => {
                return <>
                  <div className="col-lg-3 col-6 p-2" >
                    <div className="bg-light w-100 p-2 text-center "  >
                      <img className="w-50 " src={book.img} alt="" />
                      <p style={{ fontSize: "1vw", height: "50px" }}>{book.title_en}</p>
                      <Rate rate={book.rate} ></Rate>
                      <p style={{ fontSize: "1vw" }}>{book.price.new} $</p>
                      <p style={{ fontSize: "1vw", color: "red" }}>{book.quantity} in stok</p>

                      <div className="d-felx  ">
                        <button onClick={() => { gotodetails(book._id); }} className="btn btn-secondary m-2">details</button>
                        {!isInCart(book._id) ? <button disabled={book.quantity < 1} onClick={() => { addtocart(book._id) }} className="btn btn-warning">add to cart</button> : <button onClick={viewcart} className="btn btn-warning">view cart</button>}
                        {!isinfav(book._id) ? <MdOutlineFavoriteBorder onClick={() => { addtofav(book._id) }} style={{ fontSize: "25px", marginLeft: "10px" }}></MdOutlineFavoriteBorder> : <MdFavorite></MdFavorite>}
                        {/* <MdOutlineFavoriteBorder onClick={addtofav(book._id)} style={{ fontSize: "25px", marginLeft: "10px" }}></MdOutlineFavoriteBorder> */}
                      </div>
                    </div>
                  </div>
                </>
              })
              // :""
              }
              
            </div>

          </div>
          <PaginationControl
                    page={page}
                    between={5}
                    total={40}
                    limit={12}
                    changePage={(page) => {
                        setPage(page)
                        console.log("pageff",page)

                    }}
                    ellipsis={1}
                />
          <div>
            <h2>Featured Page to Screen Adaptations</h2>
            <Sliders numberOfItems={(screenWidth > 1200) ? 6 : (screenWidth < 1200 && screenWidth > 768) ? 3 : (screenWidth < 768 && screenWidth > 500) ? 2 : 1} />

            <p style={{ fontSize: "40px" }} className="text-center ">
              Popular authors & series
            </p>

            <div className=" d-flex flex-wrap p-2 ">
              {outhors.map((outhor) => {
                return <>
                  <div className=" p-2" style={{ width: "20%" }}>
                    <div className="bg-light w-100 p-2 text-center "  >
                      <img className="w-50 " src={`../assets/books/authors/${outhor}.jpg`} alt="" />
                    </div>
                  </div>

                </>
              })}
            </div>
            <h2>Books at Amazon</h2>
            <p style={{ fontSize: "14px" }}>
              The Amazon.com Books homepage helps you explore Earth's Biggest Bookstore without ever leaving the comfort of your couch. Here you'll find current best sellers in books, new releases in books, deals in books, Kindle eBooks, Audible audiobooks, and so much more. We have popular genres like Literature & Fiction, Children's Books, Mystery & Thrillers, Cooking, Comics & Graphic Novels, Romance, Science Fiction & Fantasy, and Amazon programs such as Best Books of the Month, the Amazon Book Review, and Amazon Charts to help you discover your next great read.
            </p>
            <p style={{ fontSize: "14px" }}>
              In addition, you'll find great book recommendations that may be of interest to you based on your search and purchase history, as well as the most wished for and most gifted books. We hope you enjoy the Amazon.com Books homepage!
            </p>

          </div>

        </div>
      </div>
      <p className="p-3" style={{ fontSize: "12px" }}>
        Amazon.com Books has the world’s largest selection of new and used titles to suit any reader's tastes. Find best-selling books, new releases, and classics in every category, from Harper Lee's To Kill a Mockingbird to the latest by Stephen King or the next installment in the Diary of a Wimpy Kid children’s book series. Whatever you are looking for: popular fiction, cookbooks, mystery, romance, a new memoir, a look back at history, or books for kids and young adults, you can find it on Amazon.com Books. Discover a new favorite author or book series, a debut novel or a best-seller in the making. We have books to help you learn a new language, travel guides to take you on new adventures, and business books for entrepreneurs. Let your inner detective run wild with our mystery, thriller & suspense selection containing everything from hard-boiled sleuths to twisty psychological thrillers. Science fiction fans can start the Game of Thrones book series or see what's next from its author, George R.R. Martin. You’ll find the latest New York Times best-seller lists, and award winners in literature, mysteries, and children’s books. Get reading recommendations from our Amazon book editors, who select the best new books each month and the best books of the year in our most popular genres. Read the books behind blockbuster movies like Suzanne Collins’ The Hunger Games, John Green’s The Fault in Our Stars, Stephenie Meyers’ Twilight series, or E.L. James’ 50 Shades of Grey. For new and returning students, we have textbooks to buy, rent or sell and teachers can find books for their classroom in our education store. Whether you know which book you want or are looking for a recommendation, you’ll find it in the Amazon.com Books store.


      </p>
    </>
  );
}
