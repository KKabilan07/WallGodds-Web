import styles from "./Mobile.module.css";
import ImgCard from "./ImgCardsMobile/ImgCard";

import img1 from "./MobileAssets/mobile_wallpaper1.png";
import img2 from "./MobileAssets/mobile_wallpaper2.png";
import img3 from "./MobileAssets/mobile_wallpaper3.png";
import img4 from "./MobileAssets/mobile_wallpaper4.png";
import img5 from "./MobileAssets/mobile_wallpaper5.png";
import img6 from "./MobileAssets/mobile_wallpaper6.png";
import img7 from "./MobileAssets/mobile_wallpaper7.png";
import img8 from "./MobileAssets/mobile_wallpaper8.png";
import img9 from "./MobileAssets/mobile_wallpaper9.png";

const Mobile = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className={styles.pageBg}>
      <div className={styles.mobileFrame}>
        <div className={styles.imgGrid}>
          {images.map((src, i) => (
            <ImgCard key={i} imageSrc={src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
