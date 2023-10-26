import Image from "next/image";

import styles from "./IconSlider.module.css";
import { ICONS } from "@/constants";

const IconSlider = () => {
  return (
    <div className="max-w-screen-xl px-4 py-4 mx-auto">
      <div className={styles.slider}>
        <div className={styles.slider_logos}>
          {ICONS.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={150}
              height={50}
              priority={true}
              className={styles.slide_icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconSlider;
