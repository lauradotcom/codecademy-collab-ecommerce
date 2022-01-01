import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as testPageStyles from './testPage.module.css';

const image1 = '../../images/product1-1.png';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 12,
  color: 'green',
};

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

// links
const links = [
  {
    text: 'Home',
    url: '/',
    description: 'Back to the Home page',
    color: '#E95800',
  },
  {
    text: 'Documentation',
    url: 'https://www.gatsbyjs.com/docs/',
    description: 'Gatsby docs',
    color: '#8954A8',
  },
];

const TestPage = () => {
  return (
    <>
      <title>Test Page</title>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          <span style={headingAccentStyles}>Test Page</span>
        </h1>
        <p>Here are some changes to the test page! (Buster 12.27.21)</p>
        <p>
          This is a test page to re-familiarize with Gatsby image optimization
          and styles imports. (unstyled paragraph element)
        </p>
        <p style={paragraphStyles}>
          This is a test page to re-familiarize with Gatsby image optimization
          and styles imports. (This section styled via CSS-in-JS on
          page-component @ /pages/test )
        </p>
        <p className={testPageStyles.paragraph_content}>
          This is a test page to re-familiarize with Gatsby image optimization
          and styles imports. (This section styled via stylesheet @
          /styles/pages/test.module.css )
        </p>
        <ul style={listStyles}>
          {links.map((link) => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a style={linkStyle} href={link.url}>
                  {link.text}
                </a>

                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
        <div>
          {/* {customImage(image1)} */}
          <StaticImage src={image1} className={testPageStyles.main_image} />
          <caption className={testPageStyles.image_caption}>
            Image styled via stylesheet at /styles/pages/test.module.css
          </caption>
        </div>
      </main>
    </>
  );
};

export default TestPage;
