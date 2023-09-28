import React from 'react'
import './leftSide.css'
import { FaStar, FaRegStar } from "react-icons/fa6";
// import './todayDeals.js'


export default function LiftSide() {
  
  return (
    <>
      <section className="col-xl-2 col-md-3 col-4 todayDealsLeftSide ps-xl-4 ps-1">
        <header className="d-flex flex-column pb-3">
          <a className="active" href="#"> All deals</a>
          <a href="#"> Available</a>
          <a href="#"> Upcoming</a>
          <a href="#"> Watchlist</a>
        </header>
        <section className="leftSideSections pb-3">
          <h2>Prime Programs</h2>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="col-1" type="checkbox" name="primeCheckbox" id="primeCheckbox" />
            <label className="col-10 text-info fw-bold" htmlFor="primeCheckbox"><i className="fa-solid fa-check text-warning"></i>
              Prime</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="col-1" type="checkbox" name="PrimeEarlyAccessDealsCheckbox"
              id="PrimeEarlyAccessDealsCheckbox" />
            <label className="col-10 fw-bold" htmlFor="PrimeEarlyAccessDealsCheckbox">
              Prime Early Access deals</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="col-1" type="checkbox" name="PrimeExclusiveDealsCheckbox"
              id="PrimeExclusiveDealsCheckbox" />
            <label className="col-10 fw-bold" htmlFor="PrimeExclusiveDealsCheckbox">
              Prime Exclusive deals</label>
          </span>
        </section>
        <section className="leftSideSections pb-3">
          <h2>Categories</h2>
          <p id="selectAll" className="fw-bold">Select All</p>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="AutomotiveCheckbox"
              id="AutomotiveCheckbox" />
            <label className="col-10 fw-bold" htmlFor="AutomotiveCheckbox">
              Automotive</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyFashionCheckbox"
              id="BabyFashionCheckbox" />
            <label className="col-10 fw-bold" htmlFor="BabyFashionCheckbox">
              Baby Fashion</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyProductsCheckbox"
              id="BabyProductsCheckbox" />
            <label className="col-10 fw-bold" htmlFor="BabyProductsCheckbox">
              Baby Products</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BeautyCheckbox" id="BeautyCheckbox" />
            <label className="col-10 fw-bold" htmlFor="BeautyCheckbox">
              Beauty</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BooksCheckbox" id="BooksCheckbox" />
            <label className="col-10 fw-bold" htmlFor="BooksCheckbox">
              Books</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BoysFashionCheckbox"
              id="BoysFashionCheckbox" />
            <label className="col-10 fw-bold" htmlFor="BoysFashionCheckbox">
              Boys` Fashion</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="Computers,Components&Accessories"
              id="ComputersComponents&Accessories" />
            <label className="col-10 fw-bold" htmlFor="ComputersComponents&Accessories">
              Computers, Components & Accessories</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="ElectronicsCheckbox"
              id="ElectronicsCheckbox" />
            <label className="col-10 fw-bold" htmlFor="ElectronicsCheckbox">
              Electronics</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="FashionCheckbox" id="FashionCheckbox" />
            <label className="col-10 fw-bold" htmlFor="FashionCheckbox">
              Fashion</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="GardenCheckbox" id="GardenCheckbox" />
            <label className="col-10 fw-bold" htmlFor="GardenCheckbox">
              Garden</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="GirlsFashionCheckbox"
              id="GirlsFashionCheckbox" />
            <label className="col-10 fw-bold" htmlFor="GirlsFashionCheckbox">
              Girls` Fashion</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="GroceryCheckbox" id="GroceryCheckbox" />
            <label className="col-10 fw-bold" htmlFor="GroceryCheckbox">
              Grocery</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="HealthHouseholdProducts"
              id="HealthHouseholdProducts" />
            <label className="col-10 fw-bold" htmlFor="HealthHouseholdProducts">
              Health & Household Products</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="HomeKitchenCheckbox"
              id="HomeKitchenCheckbox" />
            <label className="col-10 fw-bold" htmlFor="HomeKitchenCheckbox">
              Home & Kitchen</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="MensFashionCheckbox"
              id="MensFashionCheckbox" />
            <label className="col-10 fw-bold" htmlFor="MensFashionCheckbox">
              Men`s Fashion</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="MobilephonesCheckbox"
              id="MobilephonesCheckbox" />
            <label className="col-10 fw-bold" htmlFor="MobilephonesCheckbox">
              Mobile Phones & Communication Products</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="MusicalInstrumentsCheckbox"
              id="MusicalInstrumentsCheckbox" />
            <label className="col-10 fw-bold" htmlFor="MusicalInstrumentsCheckbox">
              Musical Instruments</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="OfficeProductsCheckbox"
              id="OfficeProductsCheckbox" />
            <label className="col-10 fw-bold" htmlFor="OfficeProductsCheckbox">
              Office Products</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="PerfumesFragrancesCheckbox"
              id="PerfumesFragrancesCheckbox" />
            <label className="col-10 fw-bold" htmlFor="PerfumesFragrancesCheckbox">
              Perfumes & Fragrances</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="PetSuppliesCheckbox"
              id="PetSuppliesCheckbox" />
            <label className="col-10 fw-bold" htmlFor="PetSuppliesCheckbox">
              Pet Supplies</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="SportsOutdoorsCheckbox"
              id="SportsOutdoorsCheckbox" />
            <label className="col-10 fw-bold" htmlFor="SportsOutdoorsCheckbox">
              Sports & Outdoors</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="ToolsHomeCheckbox" id="ToolsHomeCheckbox" />
            <label className="col-10 fw-bold" htmlFor="ToolsHomeCheckbox">
              Tools & Home Improvement</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="ToysCheckbox" id="ToysCheckbox" />
            <label className="col-10 fw-bold" htmlFor="ToysCheckbox">
              Toys</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="VideoGamesCheckbox"
              id="VideoGamesCheckbox" />
            <label className="col-10 fw-bold" htmlFor="VideoGamesCheckbox">
              Video Games</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="VideoGamesCheckbox"
              id="VideoGamesCheckbox" />
            <label className="col-10 fw-bold" htmlFor="VideoGamesCheckbox">
              Women`s Fashion</label>
          </span>
        </section>
        <section className="d-flex flex-column pb-3">
          <h2>Deal type</h2>
          <a className="active" href="#"> All deals</a>
          <a href="#"> Deal of the day</a>
          <a href="#"> Lightning deals</a>
          <a href="#"> Best deal </a>
        </section>
        <section className="d-flex flex-column pb-3">
          <h2>Price</h2>
          <a className="active" href="#"> All</a>
          <a href="#"> Under EGP400</a>
          <a href="#"> EGP400 to EGP800</a>
          <a href="#"> EGP800 to EGP1,200 </a>
          <a href="#"> EGP1,200 to EGP1,600 </a>
          <a href="#"> EGP1,600 & above </a>
        </section>
        <section className="d-flex flex-column pb-3">
          <h2>Discount</h2>
          <a className="active" href="#"> All deals</a>
          <a href="#"> 10% off or more</a>
          <a href="#"> 20% off or more</a>
          <a href="#"> 30% off or more</a>
          <a href="#"> 40% off or more</a>
          <a href="#"> 50% off or more</a>
        </section>
        <section className="d-flex flex-column pb-3">
          <h2>Average customer review</h2>
          <span>
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaRegStar /><span className="averageReview">& up</span>
          </span>
          <span>
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaRegStar />
            <FaRegStar /><span className="averageReview">& up</span>
          </span>
          <span>
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar /><span className="averageReview">& up</span>
          </span>
          <span>
            <FaStar className="checkedStar" />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar /><span className="averageReview">& up</span>
          </span>

        </section>
      </section>

    </>
  )
}
