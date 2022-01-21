import React from "react";
//
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../../state/cartSlice";
import { formatPrice } from "../../../../lib/helpers";
//
import * as styles from "./CartProducts.module.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allProductsJson {
      nodes {
        description
        discount
        id
        images {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
        name
        price
        productId
      }
    }
  }
`;

const CartProducts = ({ products }) => {
  const dispatch = useDispatch();
  const allProducts = useStaticQuery(query).allProductsJson.nodes;

  const updateItemQuantity = (item, add, clear) => {
    if (add) {
      dispatch(
        addItem({
          ...item,
          quantity: 1,
        })
      );
    } else if (clear) {
      dispatch(removeItem(item));
    } else {
      dispatch(
        removeItem({
          ...item,
          quantity: 1,
        })
      );
    }
  };

  return products.map((product) => {
    const index = allProducts.findIndex(
      (existingItem) => existingItem.productId === product.productId
    );
    return (
      <div key={product.id} className={styles.productSection}>
        <GatsbyImage
          className={styles.productImage}
          image={getImage(allProducts[index].images[0])}
          alt={product.name}
        />
        <div className={styles.productDetails}>
          <div>{product.name}</div>
          <div>
            {product.discount
              ? formatPrice(product.price * (1 - product.discount))
              : formatPrice(product.price)}
          </div>
          <div className={styles.actions}>
            <button
              className={styles.quantityButton}
              onClick={() => updateItemQuantity(product, false)}
            >
              -
            </button>
            <span className={styles.quantityText}>{product.quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={() => updateItemQuantity(product, true)}
            >
              +
            </button>
          </div>
          <a
            className={styles.removeButton}
            onClick={() => updateItemQuantity(product, false, true)}
            onKeyPress={() => updateItemQuantity(product, false, true)}
            tabIndex={0}
            role="button"
          >
            Remove
          </a>
        </div>
      </div>
    );
  });
};

export default CartProducts;
