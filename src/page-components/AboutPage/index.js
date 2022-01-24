import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { page, aboutPage, featuredProductsList } from "./AboutPage.module.css";
import ActionButton from "../../components/Buttons/ActionButton";
import { navigate } from "gatsby";
import ProductCard from "../ProductsPage/Sections/ProductCard";

const AboutPage = ({ products }) => {
  const featuredProducts = products.slice(0, 3);
  return (
    <main className={page}>
      <section className={aboutPage}>
        <article>
          <h2>About Us</h2>
          <p>
            Ex do pariatur veniam do. Nisi occaecat quis id nisi sit irure.
            Incididunt officia dolor officia aute sint qui. Sint sit commodo
            dolore do veniam do cupidatat. Quis non ex mollit officia excepteur
            excepteur labore pariatur elit.
          </p>
          <p>
            Eu duis irure et commodo id exercitation nulla excepteur cupidatat
            id proident aliquip irure. Consectetur et esse nulla in adipisicing
            incididunt dolor ullamco minim velit qui voluptate.
          </p>
          <ActionButton
            buttonText="See More Products"
            onClick={() => {
              navigate("/products");
            }}
          />
        </article>
        <StaticImage
          src="../../images/product1-1.jpg"
          alt="Person Pouring Salt in Bowl"
          className="about-img"
          placeholder="tracedSVG"
        />
      </section>
      <section>
        <h5>Check out our featured products!</h5>
        <div className={featuredProductsList}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
