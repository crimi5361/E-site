import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard';

// images import

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img9 from "../../assets/product/p-9.jpg";




// data

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120000",
    aosDelay:"0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "42000",
    aosDelay:"200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "32000",
    aosDelay:"400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "22000",
    aosDelay:"600",
  },
  

];

const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Boat Headphone",
    price: "120000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img7,
    title: "Rocky Mountain",
    price: "42000",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Goggles",
    price: "420",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img9, // Assurez-vous d'importer ou de définir Img8
    title: "Printed",
    price: "22000",
    aosDelay: "600",
  },
];


const Product = () => {
  return (
    <div>
      <div className="container">
        {/* section header */}
        <Heading title="Our Products"
        subtile={"Explore Our Products"}
        />

        {/* section header */}
        <ProductCard data={ProductsData}/>
        <ProductCard data={ProductsData2}/>
      </div>
    </div>
  )
}

export default Product;
