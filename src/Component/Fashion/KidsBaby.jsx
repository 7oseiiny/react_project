import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./Fashion.css";

export default function KidsBaby() {
  const { t } = useTranslation();
  let language = useSelector((state) => state.language.language);
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
      </div>
    </>
  );
}
