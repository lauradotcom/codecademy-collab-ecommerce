import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './IndexPage.module.css';

// data
const links = [
  {
    text: 'Product Page',
    url: 'product',
    description: 'This page hosts our main design for a product page.',
    color: '#8954A8',
  },
  {
    text: 'Test Page',
    url: 'test',
    description: 'A test page playground to try things out.',
    color: '#E95800',
  },
];

// markup
const IndexPage = () => {
  return (
    <>
      <title>Home Page</title>
      <main className={styles.main}>
        <h1 className={styles.heading}>
          Home Page
          <br />
          <span className={styles.heading_accent}>
            Group 2 E-commerce Page Project
          </span>
        </h1>
        <p className={styles.paragraph}></p>
        <ul className={styles.list}>
          {links.map((link) => (
            <li
              key={link.url}
              className={styles.list_item}
              style={{ color: link.color }}
            >
              <span>
                <Link className={styles.link} to={link.url}>
                  {link.text}
                </Link>

                <p className={styles.description}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default IndexPage;
