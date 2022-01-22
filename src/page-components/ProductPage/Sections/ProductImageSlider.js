import React, { useState } from "react";
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
      setImageIndex(index)
    };

  return (
    <>
      <div className={styles.slider}>
        <button onClick={decrement}>{"<"}</button>
        <GatsbyImage
          image={getImage(product.images[imageIndex])}
          alt={product.name}
        />
        <button onClick={increment}>{">"}</button>
      </div>
      <div className={styles.gallery}>
        {product.images.map((image, index) => (
          <GatsbyImage
            key={index}
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
