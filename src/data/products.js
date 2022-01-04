import image1 from '../images/product1-1.png';
import image2 from '../images/product1-2.png';
import image3 from '../images/product1-3.png';

export const products = [
  {
    id: 'p1',
    name: 'Product 1 Name',
    description:
      "Product 1's description with lots of details wow here are all the features you need to know about and then you will buy! Buy it now!",
    images: [image1, image2, image3],
    price: 38,
  },
  {
    id: 'p2',
    name: 'Product 2 Name',
    description:
      "Product 2's description with lots of details wow here are all the features you need to know about and then you will buy! Buy it now!",
    images: [image2, image3, image1],
    price: 59,
  },
  {
    id: 'p3',
    name: 'Product 3 Name',
    description:
      "Product 3's description with lots of details wow here are all the features you need to know about and then you will buy! Buy it now!",
    images: [image3, image1, image2],
    price: 92,
  },
];
