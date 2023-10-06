import React, { useState } from "react";
import Rate from "./rate";
import Sliders from "./sliders";
import { useTranslation } from "react-i18next";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";
export default function Books() {
  const { t } = useTranslation();
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

  var outhors = [
    "1",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  return (
    <>
      <p style={{ fontSize: "40px" }} className="text-center ">
        {t("Book at amazon")}
      </p>
      <div className="d-flex ">
      <LiftSide categoryId={"6519d2f8a19024252354539f"} lessThan={25} between1={[25,50]} between2={[50,100]} between3={[100,200]} greaterThan={200}/>

        <div className=" d-flex flex-column col-respons">
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
            <h2>{t("Best Sellers")}</h2>
            <div className=" d-flex flex-wrap p-2 ">
              {listbook.map((book) => {
                return (
                  <>
                    <div className="col-lg-3 col-6 p-2">
                      <div className="bg-light w-100 p-2 text-center ">
                        <img className="w-50 " src={book.image_url} alt="" />
                        <p style={{ fontSize: "1vw", height: "50px" }}>
                          {book.book_name}
                        </p>
                        <Rate rate={book.rate}></Rate>
                        <p style={{ fontSize: "1vw" }}>{book.price} $</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div>
            <h2>Featured Page to Screen Adaptations</h2>
            <Sliders
              numberOfItems={
                screenWidth > 1200
                  ? 6
                  : screenWidth < 1200 && screenWidth > 768
                  ? 3
                  : screenWidth < 768 && screenWidth > 500
                  ? 2
                  : 1
              }
            />

            <p style={{ fontSize: "40px" }} className="text-center ">
              Popular authors & series
            </p>

            <div className=" d-flex flex-wrap p-2 ">
              {outhors.map((outhor) => {
                return (
                  <>
                    <div className=" p-2" style={{ width: "20%" }}>
                      <div className="bg-light w-100 p-2 text-center ">
                        <img
                          className="w-50 "
                          src={`../assets/books/authors/${outhor}.jpg`}
                          alt=""
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <h2>Books at Amazon</h2>
            <p style={{ fontSize: "14px" }}>
              The Amazon.com Books homepage helps you explore Earth's Biggest
              Bookstore without ever leaving the comfort of your couch. Here
              you'll find current best sellers in books, new releases in books,
              deals in books, Kindle eBooks, Audible audiobooks, and so much
              more. We have popular genres like Literature & Fiction, Children's
              Books, Mystery & Thrillers, Cooking, Comics & Graphic Novels,
              Romance, Science Fiction & Fantasy, and Amazon programs such as
              Best Books of the Month, the Amazon Book Review, and Amazon Charts
              to help you discover your next great read.
            </p>
            <p style={{ fontSize: "14px" }}>
              In addition, you'll find great book recommendations that may be of
              interest to you based on your search and purchase history, as well
              as the most wished for and most gifted books. We hope you enjoy
              the Amazon.com Books homepage!
            </p>
          </div>
        </div>
      </div>
      <p className="p-3" style={{ fontSize: "12px" }}>
        Amazon.com Books has the world’s largest selection of new and used
        titles to suit any reader's tastes. Find best-selling books, new
        releases, and classics in every category, from Harper Lee's To Kill a
        Mockingbird to the latest by Stephen King or the next installment in the
        Diary of a Wimpy Kid children’s book series. Whatever you are looking
        for: popular fiction, cookbooks, mystery, romance, a new memoir, a look
        back at history, or books for kids and young adults, you can find it on
        Amazon.com Books. Discover a new favorite author or book series, a debut
        novel or a best-seller in the making. We have books to help you learn a
        new language, travel guides to take you on new adventures, and business
        books for entrepreneurs. Let your inner detective run wild with our
        mystery, thriller & suspense selection containing everything from
        hard-boiled sleuths to twisty psychological thrillers. Science fiction
        fans can start the Game of Thrones book series or see what's next from
        its author, George R.R. Martin. You’ll find the latest New York Times
        best-seller lists, and award winners in literature, mysteries, and
        children’s books. Get reading recommendations from our Amazon book
        editors, who select the best new books each month and the best books of
        the year in our most popular genres. Read the books behind blockbuster
        movies like Suzanne Collins’ The Hunger Games, John Green’s The Fault in
        Our Stars, Stephenie Meyers’ Twilight series, or E.L. James’ 50 Shades
        of Grey. For new and returning students, we have textbooks to buy, rent
        or sell and teachers can find books for their classroom in our education
        store. Whether you know which book you want or are looking for a
        recommendation, you’ll find it in the Amazon.com Books store.
      </p>
    </>
  );
}
