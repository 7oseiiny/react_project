//////////////////////////////////////////////

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Books.css";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rate from "./rate";
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Books from './Books';
// import Books from './Books';
import { useEffect } from 'react';
import Sliders from "./sliders";

export default function Books() {
  var listbook = [
    {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL127_SR127,127_.jpg",
        book_name: "Fourth Wing (The Empyrean, 1)",
        rate: 4.8,
        price: 15.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL254_SR254,254_.jpg",
        book_name:
          "American Prometheus: The Inspiration for the Major Motion Picture OPPENHEIMER",
        rate: 4.4,
        price: 1.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL254_SR254,254_.jpg",
        book_name:
          "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        rate: 4.2,
        price: 5.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL254_SR254,254_.jpg",
        book_name: "Iron Flame (The Empyrean, 2)",
        rate: 2.8,
        price: 12.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL254_SR254,254_.jpg",
        book_name:
          "Our Class is a Family (Our Class is a Family & Our School is a Family)",
        rate: 3.8,
        price: 7.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71Pyj+9IPdL._AC_UL254_SR254,254_.jpg",
        book_name: "Outlive: The Science and Art of Longevity",
        rate: 4.8,
        price: 9.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91XPKk96LXL._AC_UL254_SR254,254_.jpg",
        book_name: "Tom Lake: A Reeses Book Club Pick",
        rate: 4.5,
        price: 10.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL254_SR254,254_.jpg",
        book_name: "Lessons in Chemistry: A Novel",
        rate: 1.5,
        price: 14.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81o-PyNHxbL._AC_UL254_SR254,254_.jpg",
        book_name:
          "Baking Yesteryear: The Best Recipes from the 1900s to the 1980s",
        rate: 4.9,
        price: 13.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81WduXjuKwL._AC_UL254_SR254,254_.jpg",
        book_name: "The Housemaid",
        rate: 5,
        price: 19.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91b7tm523VL._AC_UL254_SR254,254_.jpg",
        book_name: "The Covenant of Water (Oprahs Book Club)",
        rate: 1,
        price: 99.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL127_SR127,127_.jpg",
        book_name: "The 48 Laws of Power",
        rate: 1.2,
        price: 60.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/61Ars9rdgGS._AC_UL254_SR254,254_.jpg",
        book_name: "A Letter From Your Teacher: On the First Day of School",
        rate: 1.7,
        price: 40.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/8180Uhc4BuL._AC_UL254_SR254,254_.jpg",
        book_name: "A Court of Thorns and Roses (A Court of Thorns and Roses, 1)",
        rate: 2.6,
        price: 55.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71bVExi4yXL._AC_UL254_SR254,254_.jpg",
        book_name:
          "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
        rate: 4.7,
        price: 95.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81fup1LanbL._AC_UL254_SR254,254_.jpg",
        book_name:
          "Like a River: Finding the Faith and Strength to Move Forward after Loss and Heartache",
        rate: 4.8,
        price: 85.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81kZ3Gl3WKL._AC_UL254_SR254,254_.jpg",
        book_name: "Brown Bear, Brown Bear, What Do You See?",
        rate: 3.3,
        price: 88.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL254_SR254,254_.jpg",
        book_name: "The Very Hungry Caterpillar",
        rate: 4.7,
        price: 44.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/A1YhM3oRFbL._AC_UL254_SR254,254_.jpg",
        book_name: "The Creative Act: A Way of Being",
        rate: 4.1,
        price: 55.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91pJQMkd5dL._AC_UL254_SR254,254_.jpg",
        book_name: "Too Late: Definitive Edition",
        rate: 4.4,
        price: 63.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL127_SR127,127_.jpg",
        book_name: "Fourth Wing (The Empyrean, 1)",
        rate: 4.8,
        price: 15.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL254_SR254,254_.jpg",
        book_name:
          "American Prometheus: The Inspiration for the Major Motion Picture OPPENHEIMER",
        rate: 4.4,
        price: 1.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL254_SR254,254_.jpg",
        book_name:
          "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        rate: 4.2,
        price: 5.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL254_SR254,254_.jpg",
        book_name: "Iron Flame (The Empyrean, 2)",
        rate: 2.8,
        price: 12.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL254_SR254,254_.jpg",
        book_name:
          "Our Class is a Family (Our Class is a Family & Our School is a Family)",
        rate: 3.8,
        price: 7.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71Pyj+9IPdL._AC_UL254_SR254,254_.jpg",
        book_name: "Outlive: The Science and Art of Longevity",
        rate: 4.8,
        price: 9.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91XPKk96LXL._AC_UL254_SR254,254_.jpg",
        book_name: "Tom Lake: A Reeses Book Club Pick",
        rate: 4.5,
        price: 10.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL254_SR254,254_.jpg",
        book_name: "Lessons in Chemistry: A Novel",
        rate: 1.5,
        price: 14.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81o-PyNHxbL._AC_UL254_SR254,254_.jpg",
        book_name:
          "Baking Yesteryear: The Best Recipes from the 1900s to the 1980s",
        rate: 4.9,
        price: 13.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81WduXjuKwL._AC_UL254_SR254,254_.jpg",
        book_name: "The Housemaid",
        rate: 5,
        price: 19.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91b7tm523VL._AC_UL254_SR254,254_.jpg",
        book_name: "The Covenant of Water (Oprahs Book Club)",
        rate: 1,
        price: 99.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL127_SR127,127_.jpg",
        book_name: "The 48 Laws of Power",
        rate: 1.2,
        price: 60.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/61Ars9rdgGS._AC_UL254_SR254,254_.jpg",
        book_name: "A Letter From Your Teacher: On the First Day of School",
        rate: 1.7,
        price: 40.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/8180Uhc4BuL._AC_UL254_SR254,254_.jpg",
        book_name: "A Court of Thorns and Roses (A Court of Thorns and Roses, 1)",
        rate: 2.6,
        price: 55.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/71bVExi4yXL._AC_UL254_SR254,254_.jpg",
        book_name:
          "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
        rate: 4.7,
        price: 95.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81fup1LanbL._AC_UL254_SR254,254_.jpg",
        book_name:
          "Like a River: Finding the Faith and Strength to Move Forward after Loss and Heartache",
        rate: 4.8,
        price: 85.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/81kZ3Gl3WKL._AC_UL254_SR254,254_.jpg",
        book_name: "Brown Bear, Brown Bear, What Do You See?",
        rate: 3.3,
        price: 88.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL254_SR254,254_.jpg",
        book_name: "The Very Hungry Caterpillar",
        rate: 4.7,
        price: 44.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/A1YhM3oRFbL._AC_UL254_SR254,254_.jpg",
        book_name: "The Creative Act: A Way of Being",
        rate: 4.1,
        price: 55.99,
        category: "Books",
      },
      {
        image_url:
          "https://images-na.ssl-images-amazon.com/images/I/91pJQMkd5dL._AC_UL254_SR254,254_.jpg",
        book_name: "Too Late: Definitive Edition",
        rate: 4.4,
        price: 63.99,
        category: "Books",
      },
  ];
  const [screenWidth, setScreen] = useState(window.innerWidth);


  var outhors=["1",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]  


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
                {listbook.map((book)=>{return<>
                        <div className="col-lg-3 col-6 p-2" >
                            <div className="bg-light w-100 p-2 text-center "  >
                                <img className="w-50 " src={book.image_url} alt="" />
                                <p style={{fontSize:"1vw",height:"50px"}}>{book.book_name}</p>
                                     <Rate rate={book.rate} ></Rate>
                                <p style={{fontSize:"1vw"}}>{book.price} $</p>
                            </div>
                        </div>
                
                </>})}
            </div>
          
          </div>
          <div>
          <h2>Featured Page to Screen Adaptations</h2>
          <Sliders numberOfItems={(screenWidth > 1200) ? 6 : (screenWidth < 1200 && screenWidth > 768) ? 3 : (screenWidth < 768 && screenWidth > 500) ? 2 : 1} />

          <p style={{ fontSize: "40px" }} className="text-center ">
                Popular authors & series
            </p>
          
            <div className=" d-flex flex-wrap p-2 "> 
                {outhors.map((outhor)=>{return<>
                        <div className=" p-2"  style={{width:"20%"}}>
                            <div className="bg-light w-100 p-2 text-center "  >
                                <img className="w-50 " src={`../assets/books/authors/${outhor}.jpg`} alt="" />
                            </div>
                        </div>
                
                </>})}
            </div>
            <h2>Books at Amazon</h2>
            <p  style={{fontSize:"14px"}}>
            The Amazon.com Books homepage helps you explore Earth's Biggest Bookstore without ever leaving the comfort of your couch. Here you'll find current best sellers in books, new releases in books, deals in books, Kindle eBooks, Audible audiobooks, and so much more. We have popular genres like Literature & Fiction, Children's Books, Mystery & Thrillers, Cooking, Comics & Graphic Novels, Romance, Science Fiction & Fantasy, and Amazon programs such as Best Books of the Month, the Amazon Book Review, and Amazon Charts to help you discover your next great read.
            </p>
            <p  style={{fontSize:"14px"}}>
            In addition, you'll find great book recommendations that may be of interest to you based on your search and purchase history, as well as the most wished for and most gifted books. We hope you enjoy the Amazon.com Books homepage!
            </p>

          </div>
          
        </div>
      </div>
      <p className="p-3" style={{fontSize:"12px"}}>
      Amazon.com Books has the world’s largest selection of new and used titles to suit any reader's tastes. Find best-selling books, new releases, and classics in every category, from Harper Lee's To Kill a Mockingbird to the latest by Stephen King or the next installment in the Diary of a Wimpy Kid children’s book series. Whatever you are looking for: popular fiction, cookbooks, mystery, romance, a new memoir, a look back at history, or books for kids and young adults, you can find it on Amazon.com Books. Discover a new favorite author or book series, a debut novel or a best-seller in the making. We have books to help you learn a new language, travel guides to take you on new adventures, and business books for entrepreneurs. Let your inner detective run wild with our mystery, thriller & suspense selection containing everything from hard-boiled sleuths to twisty psychological thrillers. Science fiction fans can start the Game of Thrones book series or see what's next from its author, George R.R. Martin. You’ll find the latest New York Times best-seller lists, and award winners in literature, mysteries, and children’s books. Get reading recommendations from our Amazon book editors, who select the best new books each month and the best books of the year in our most popular genres. Read the books behind blockbuster movies like Suzanne Collins’ The Hunger Games, John Green’s The Fault in Our Stars, Stephenie Meyers’ Twilight series, or E.L. James’ 50 Shades of Grey. For new and returning students, we have textbooks to buy, rent or sell and teachers can find books for their classroom in our education store. Whether you know which book you want or are looking for a recommendation, you’ll find it in the Amazon.com Books store.


      </p>
    </>
  );
}
