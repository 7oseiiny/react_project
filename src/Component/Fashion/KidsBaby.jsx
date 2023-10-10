import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../../axiosConfig/instance';
import { useEffect } from 'react';
import { fetchcategory } from "../../../store/Slice/categorySlice";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
export default function KidsBaby() {
  const { t } = useTranslation();
  let language = useSelector((state) => state.language.language);
  let navigate = useNavigate()
  function gotodetails(prodId){
    console.log(prodId)
    navigate("/productdetails", { state: { productId: prodId}});
}
  let [myfash, setmyfash] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    axiosInstance.get("category/651ed4871f7aed6d784da279").then((data)=>{
      setmyfash(data.data.data.products)
      console.log(data.data.data.products)
    }).catch((err)=>{console.log(err)})
    dispatch(fetchcategory("Baby Fashion"))
    return()=>{ dispatch(fetchcategory([]))}
  }, [])


  
  return (
    <>
      <div className="row container-fluid m-0 justify-content-center mt-3">
        <img
          src="../assets/images/first.PNG"
          className="img-fluid"
          width="100%"
        />
        <img
          src={
            language == "en"
              ? "../assets/images/o1.jpeg"
              : "../assets/images/fashionArabicImag.jpg"
          }
          className="img-fluid veiw mt-4"
          width="100%"
        />

<h2 className="text-center fs-4 mt-4">{t("Boys")}</h2>
        <img
          src="../assets/images/second.PNG"
          className="img-fluid mt-4"
          width="100%"
        />
        <h2 className="text-center fs-4 mt-4">{t("Girls")}</h2>
        <img
          src="../assets/images/third.PNG"
          className="img-fluid mt-4"
          width="100%"
        />
        <h2 className="text-center fs-4 mt-4">{t("Baby Boys")}</h2>
        <img
          src="../assets/images/fourth.PNG"
          className="img-fluid mt-4"
          width="100%"
        />
        <h2 className="text-center fs-4 mt-4">{t("Baby Girls")}</h2>
        <img
          src="../assets/images/fifth.PNG"
          className="img-fluid mt-4"
          width="100%"
        />
  <div className="container">
            <div className="row">
              {myfash.map((moda) => {
                return < >

                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                    <div className="card border-0" style={{ width: '20rem', height: '25rem' }}>
                      <img src={moda.img} className="card-img-top  h-75" onClick={() => { gotodetails(moda._id)}} />
                      <div className="d-inline-block">
                        <p className="card-text">{moda.title_en}</p>
                        <BsStarFill color='#FFA41C' />
                        <BsStarFill color='#FFA41C' />
                        <BsStarFill color='#FFA41C' />
                        <BsStarFill color='#FFA41C' />
                        <BsStar color='#FFA41C' />
                      </div>
                      <div className="d-flex">EGP <sub>
                        <h3>{moda.price.new}</h3>
                      </sub>00
                      </div>
                    </div>
                  </div>

                </>
              })}


       
            </div>
          </div>
  </div>
  
 
  </>
  )
       
   
}
