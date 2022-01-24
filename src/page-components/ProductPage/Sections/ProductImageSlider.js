import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./ProductImageSlider.module.css";

const ProductImageSlider = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageCount = product.images.length;

  const decrement = () => {
    if (imageIndex > 0) {
      setImageIndex((prevState) => prevState - 1);
    }
  };

  const increment = () => {
    if (imageIndex < imageCount - 1) {
      setImageIndex((prevState) => prevState + 1);
    }
  };

  const imageChangeHandler = (index) => {
    setImageIndex(index);
  };

  return (
    <>
      <div className={styles.slider}>
        <GatsbyImage
          fadein='true'
          image={getImage(product.images[imageIndex])}
          alt={product.name}
        />
        {imageIndex > 0 && (
          <MdArrowBackIosNew
            className={styles.previousImage}
            onClick={decrement}
          />
        )}
        {imageIndex < imageCount - 1 && (
          <MdArrowForwardIos className={styles.nextImage} onClick={increment} />
        )}
      </div>
      <div className={styles.gallery}>
        {product.images.map((image, index) => (
          <GatsbyImage
            key={index}
            className={imageIndex === index ? styles.selectedImage : ""}
            image={getImage(image)}
            alt={product.name + " #" + index}
            onClick={() => imageChangeHandler(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductImageSlider;
