import * as React from "react";
import * as styles from "./HomePage.module.css";
import ActionButton from "../../components/Buttons/ActionButton";
import { navigate } from "gatsby";
import ProductCard from "../ProductsPage/Sections/ProductCard";

const HomePage = ({ products }) => {
  const featuredProducts = products.slice(0, 3);
  return (
    <>
      <title>Home Page</title>
      <main>
        <section className={styles.hero}>
          <h1 className={styles.heading}>E-Commerce Store Home</h1>
          <div className={styles.button}>
            <ActionButton
              buttonText="Shop Now"
              onClick={() => {
                navigate("/products");
              }}
            />
          </div>
        </section>

        <section className={styles.about}>
          <h2>Learn more about us</h2>
          <div className={styles.button}>
            <ActionButton
              buttonText="Click Here!"
              onClick={() => {
                navigate("/about");
              }}
            />
          </div>
        </section>
        <section className={styles.featuredProducts}>
          <h2>Check out our featured products!</h2>
          <div className={styles.featuredProductsList}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
