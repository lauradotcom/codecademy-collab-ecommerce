<p align="center">

<h1 align="center">E-Commerce Starter:<br/>Gatsby + Redux</h1>

<p align="center">
  <a href="https://www.gatsbyjs.com/">
    <img src="https://img.shields.io/badge/Gatsby-v4.4%2B-purple?style=for-the-badge&logo=gatsby">
  </a>
  <a href="https://redux.js.org/">
    <img src="https://img.shields.io/badge/Redux-v7.2.6%2B-blueviolet?style=for-the-badge&logo=redux">
  </a>
  <a href="https://redux-toolkit.js.org/">
    <img src="https://img.shields.io/badge/Redux%20Toolkit-v1.7.1%2B-blueviolet?style=for-the-badge&logo=redux">
  </a>
  <a href="https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/">
    <img src="https://img.shields.io/badge/GraphQL-GraphiQL-ff69b4?style=for-the-badge&logo=graphql">
  </a>
  <a href="https://www.gatsbyjs.com/docs/how-to/styling/css-modules">
    <img src="https://img.shields.io/badge/CSS-Modules-9cf?style=for-the-badge&logo=">
  </a>
</p>

---
> 🛍️ 🛒 Simple E-Commerce starter built on Gatsby framework with Redux Toolkit and session persistent shopping cart managed in local storage 🛍️ 🛒

> Live demo [_here_](https://codecademyecommstore.netlify.app/).

Statically generated Gatsby E-Commerce web app with page for viewing all products and individual programmatically created product pages. GraphQL queries against local filesystem data store for product information and dynamic routing/programmatic page generation.

---

- [1. Installation](#1-installation)
- [2. Usage](#2-usage)

---

## 1. Installation

Fork or clone the repo and install node modules:

```bash
npm install
```

Run application in development environment:

```bash
npm run develop || gatsby develop
```

Create local static build and run:

```bash
npm run build || gatsby build
npm run start || gatsby start
```

Clear cache between builds:

```bash
npm run clean || gatsby clean
```

---

## 2. Usage

### Global State and Session Management

The folder [/src/state](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/state) houses global app state functionality.

- Redux Toolkit used to handle Shopping Cart state in [/src/state/cartSlice.js](https://github.com/lauradotcom/codecademy-collab-ecommerce/blob/main/src/state/cartSlice.js)
- Local Storage for session management. Written to/rehydrated by middleware in [/src/state/store.js](https://github.com/lauradotcom/codecademy-collab-ecommerce/blob/main/src/state/store.js)
  <br/><br/>

### Folder Structure

1. [/src/pages](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/pages) - top-level page render

   - Product data queries
   - Page head
   - Page routing (built-in Gatsby router)
     <br/><br/>

2. [/src/page-components](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/page-components) - consolidates page sections and exports pages as components to top-level [/src/pages](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/pages)

   - Sections - page sections containing logic, components and stylesheets
   - index - consolidates sections and exports as full page
     <br/><br/>

3. [/src/components](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/components) - contains shared/global components and their scoped stylesheets

   - Layout (Header, Nav, CartDrawer) - renders on all pages globally
   - Shared components - Basic reusable components, including buttons
     <br/><br/>

4. [/src/lib](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/lib) - library containing helper functions like formatters, validators, and reducers
   <br/><br/>

5. [/src/data](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/data) - contains product information data in JSON document
   <br/><br/>

6. [/src/images](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/images) - contains image assets
   <br/><br/>

7. [/src/styles](https://github.com/lauradotcom/codecademy-collab-ecommerce/tree/main/src/styles) - contains global styles and CSS overrides
   <br/><br/>

---
## Acknowledgements
This project was as part of a Beta [Codecademy](https://www.codecademy.com/) Collaboration Project

---
## Contact
Created by [BusterCodes](hhttps://github.com/BusterCodes), [lauradotcom](https://github.com/lauradotcom), [CxrlosKenobi](https://github.com/CxrlosKenobi), and [ChrisDeCleene](https://github.com/ChrisDeCleene) - feel free to contact us!