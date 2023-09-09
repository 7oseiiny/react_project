import React, { useEffect } from "react";
import "./Prime.css";

export default function Prime() {
  let cards;
  let cards_container;
  let cardsarr;

  useEffect(() => {
    cards = document.getElementsByClassName("ccard");
    cards_container = document.getElementById("cards");
    cardsarr = [...cards];
  });

  function back() {
    let cardlast = cardsarr.pop();
    cardsarr.unshift(cardlast);
    cards_container.appendChild(cardsarr[1]);
    cards_container.appendChild(cardsarr[2]);
    cards_container.appendChild(cardsarr[3]);

    console.log(cardsarr);
  }

  function next() {
    let card1 = cardsarr.shift();
    cardsarr.push(card1);
    cards_container.appendChild(cardsarr[1]);
    cards_container.appendChild(cardsarr[2]);
    cards_container.appendChild(cardsarr[3]);

    console.log(cardsarr);
  }
  return (
    <>
      <div
        className="scrolll container-fluid d-flex text-center p-5 gap-4 align-items-center flex-column"
        style={{ color: "white", backgroundColor: "rgb(35, 47, 62)" }}
      >
        <img
          style={{ height: "44px", width: "fit-content" }}
          src="../assets/images/ahlogo.png"
          alt=""
        />
        <h1 className="h1">
          Amazon Customer, we're giving you a
          <span style={{ color: "rgb(26, 152, 255)" }}>30 day free trial</span>{" "}
          of Amazon Prime
        </h1>
        <h4>
          Only EGP 29.00/month after trial. Cancel anytime. Terms and conditions
          apply
        </h4>
        <a className="a" href="#plans">
          Explore other plans
        </a>
        <button
          className="btn button"
          style={{ backgroundColor: "rgb(255, 167, 36)" }}
        >
          start your free 30-day trial
        </button>
      </div>
      <div
        className="container-fluid p-4 text-center"
        style={{ backgroundColor: "rgb(26, 152, 255)", color: "white" }}
      >
        <h3>Take a look at what's included with Prime membership</h3>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div
          style={{
            width: "50px",
            height: " 50px",
            border: "50px solid rgb(26, 152, 255)",
            borderColor: "rgb(26, 152, 255) white white",
          }}
        ></div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <h1 className="h1" style={{ color: "rgb(26, 152, 255)" }}>
          Check out what's included
        </h1>
      </div>

      <div className="d-flex text-center p-5">
        <button id="back" className="btn button" onClick={back}>
          ←
        </button>

        <div
          className="container-fluid mt-4 d-flex overflow-hidden g-4 row flex-nowrap w-100"
          id="cards"
        >
          <div className="col-sm-6 col-md-4 ccard">
            <div className="card">
              <img
                src="../assets/images/ah1.jpg"
                className="card-img-top"
                alt="Image 2"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "rgb(26,152,255)" }}>
                  Monthly gaming perks
                </h5>
                <p className="card-text">
                  Free games, exclusive in-game content and a free Twitch
                  channel subscription every month.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 ccard">
            <div className="card">
              <img
                src="../assets/images/ah2.jpg"
                className="card-img-top"
                alt="Image 2"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "rgb(26,152,255)" }}>
                  Fast, free delivery
                </h5>
                <p className="card-text">
                  Enjoy same day delivery to Cairo and Giza and next day
                  delivery across most of Egypt on over half a million items.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 ccard">
            <div className="card">
              <img
                src="../assets/images/ah3.jpg"
                className="card-img-top"
                alt="Image 2"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "rgb(26,152,255)" }}>
                  Popular films and TV programs
                </h5>
                <p className="card-text">
                  Stream international TV shows and movies, plus award-winning
                  Amazon Originals from your favorite devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 ccard">
            <div className="card">
              <img
                src="../assets/images/ah4.jpg"
                className="card-img-top"
                alt="Image 2"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "rgb(26,152,255)" }}>
                  Exclusive deals
                </h5>
                <p className="card-text">
                  Get early access to in-demand deals and save big during annual
                  events, like Prime Day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button id="next" className="btn button" onClick={next}>
          →
        </button>
      </div>

      <div
        className="scrolll container-fluid d-flex text-center p-5 gap-4 align-items-center flex-column"
        id="plans"
        style={{ color: "white", backgroundColor: "rgb(35, 47, 62)" }}
      >
        <h1 className="h1" style={{ color: "rgb(26,152,255)" }}>
          Choose your plan
        </h1>
        <h4 id="plan">
          Enjoy your 30 day free trial of Prime. After that, Prime is just EGP
          29.00 per month. Cancel at any time.
        </h4>

        <div className="d-flex">
          <label className="d-flex" htmlFor="monthly">
            <div
              className="container-fluid p-4 m-3"
              style={{
                backgroundColor: "white",
                width: " 300px",
                height: "300px",
                borderRadius: "10px",
              }}
            >
              <input
                type="radio"
                style={{ width: "100%", height: "50px" }}
                id="monthly"
                name="plan"
                value="Monthly"
              />
              <h5 style={{ color: "black" }}>Monthly Plan</h5>
              <h1 className="h1" style={{ color: "black" }}>
                EGP 29.00
              </h1>
              <h3 style={{ color: "black" }}>per month after trial</h3>
            </div>
          </label>
          <label className="d-flex" htmlFor="annual">
            <div
              className="container-fluid p-4 m-3"
              style={{
                backgroundColor: "white",
                width: "300px",
                height: "300px",
                borderRadius: "10px",
              }}
            >
              <input
                type="radio"
                style={{ width: "100%", height: "50px" }}
                id="annual"
                name="plan"
                value="Annual"
              />
              <h5 style={{ color: "black" }}>Monthly Plan</h5>
              <h1 className="h1" style={{ color: "black" }}>
                EGP 29.00
              </h1>
              <h3 style={{ color: "black" }}>per month after trial</h3>
            </div>
          </label>
        </div>
        <button
          className="btn button"
          style={{ backgroundColor: "rgb(255, 167, 36)" }}
        >
          Try Prime free htmlFor 30 days
        </button>
      </div>
      <div
        className="container-fluid p-4 text-center d-flex justify-content-center"
        style={{ backgroundColor: "rgb(26, 152, 255)", color: "white" }}
      >
        <div className="w-75">
          <h3 style={{ fontWeight: "500", fontSize: "40px" }}>
            More ways to subscribe:
          </h3>
          <h3 style={{ fontWeight: "400", fontSize: "30px" }}>
            Orange customers: Call #266# from your Orange mobile number to
            subscribe to Prime and start your 30-day free trial along with 1GB
            free on Amazon. Get Prime FREE with Orange Premier.
          </h3>
          <h3 style={{ fontWeight: "400", fontSize: "25px" }}>
            *Terms and conditions apply
          </h3>
        </div>
      </div>
      <h1 className="h1 text-center p-5" style={{ color: "rgb(26,152,255)" }}>
        Choose your plan
      </h1>

      <div className="container">
        <button
          className="btn d-flex w-100 justify-content-between button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse1"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <h3>
            How do I sign up htmlFor a free trial? What happens after the free
            trial period?
          </h3>
          <h3>+</h3>
        </button>
        <div className="collapse" id="collapse1">
          <h2 className="p-4" style={{ fontWeight: "300" }}>
            To sign up htmlFor your free 30 day free trial, please click on “Try
            Prime free htmlFor 30 days” button above. Although you will not be
            charged htmlFor your 30 day trial of Prime, we do need a valid
            payment option on file in order to start enjoying your trial and
            Prime’s benefits.
          </h2>
        </div>
        <div
          className="div w-100"
          style={{ height: "3px", backgroundColor: "rgb(26, 152, 255)" }}
        ></div>

        <button
          className="btn d-flex w-100 justify-content-between button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse2"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <h3>What benefits does Prime offer?</h3>
          <h3>+</h3>
        </button>
        <div className="collapse" id="collapse2">
          <h2 className="p-4" style={{ fontWeight: "300" }}>
            Prime offers you the best of entertainment including movies, TV
            series, Amazon Originals, free PC games and in game content with
            Prime Gaming, and fast and free delivery.
          </h2>
        </div>
        <div
          className="div w-100"
          style={{ height: "3px", backgroundColor: "rgb(26, 152, 255)" }}
        ></div>

        <button
          className="btn d-flex w-100 justify-content-between button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse3"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <h3>What methods can I use to sign up htmlFor Prime?</h3>
          <h3>+</h3>
        </button>
        <div className="collapse" id="collapse3">
          <h2 className="p-4" style={{ fontWeight: "300" }}>
            To sign up, you must have a valid payment method on file. Payment
            methods accepted include international and domestic Visa and
            MasterCard credit and debit cards. Don't have a credit or debit
            card? Call #266# from your Orange mobile number to subscribe to
            Amazon Prime and start your free trial
          </h2>
        </div>
        <div
          className="div w-100"
          style={{ height: "3px", backgroundColor: "rgb(26, 152, 255)" }}
        ></div>

        <button
          className="btn d-flex w-100 justify-content-between button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse4"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <h3>
            What if I am already a Prime member on a different Amazon website?
          </h3>
          <h3>+</h3>
        </button>
        <div className="collapse" id="collapse4">
          <h2 className="p-4" style={{ fontWeight: "300" }}>
            If you live in Egypt and have Amazon Prime on another Amazon
            website, we encourage you to change your subscription to Amazon.eg.
            Enjoy a wide selection of Egyptian brands with Prime delivery,
            customer service in Egypt and access to a wide range of movies and
            series on Prime Video. And all this htmlFor EGP 29.00/month or EGP
            249.00/year!
          </h2>
        </div>
        <div
          className="div w-100"
          style={{ height: "3px", backgroundColor: "rgb(26, 152, 255)" }}
        ></div>

        <button
          className="btn d-flex w-100 justify-content-between button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse5"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <h3>If I am not satisfied, how do I cancel? Will I get a refund?</h3>
          <h3>+</h3>
        </button>
        <div className="collapse" id="collapse5">
          <h2 className="p-4" style={{ fontWeight: "300" }}>
            You can cancel your Prime membership at any time by clicking on
            “Manage my membership” [https://www.amazon.eg/prime]. You will not
            receive a refund htmlFor the months during which your membership was
            active, but you will not be charged htmlFor your next scheduled
            billing.
          </h2>
        </div>
        <div
          className="div w-100"
          style={{ height: "3px", backgroundColor: "rgb(26, 152, 255)" }}
        ></div>

        <button
          className="btn d-flex w-100 justify-content-between button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse6"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <h3>What if I already have an Amazon Prime Video subscription?</h3>
          <h3>+</h3>
        </button>
        <div className="collapse" id="collapse6">
          <h2 className="p-4" style={{ fontWeight: "300" }}>
            Prime Video is included in Amazon Prime. If you are already a Prime
            Video subscriber in Egypt, you can cancel your Prime Video
            subscription and sign up htmlFor Prime on Amazon.eg and get 30 days
            free trial. Otherwise, you will be automatically migrated at the end
            of your billing cycle.
          </h2>
        </div>
        <div
          className="div w-100"
          style={{ height: "3px", backgroundColor: "rgb(26, 152, 255)" }}
        ></div>
      </div>
    </>
  );
}
