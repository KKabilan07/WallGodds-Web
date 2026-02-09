import React from "react";
import Style from "./ImgCard.module.css";

const ImgCard = ({ imageSrc }) => {
  return (
    <div className={Style.imgCard}>
      <img src={imageSrc} alt="Wallpaper" className={Style.image} />
    </div>
  );
};

export default ImgCard;
