import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './assets/hero/Hero';
import Category from './components/Category/Category';
import Category2 from "../src/components/Category/Category 2" ;
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Partners from './components/Partners/Partners';
import Product from './components/Prooduct/Product';
import Heading from './components/Shared/Heading';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

import headphone from '../src/assets/hero/headphone.png';



const BannerData = {
  discount:"30% OFF",
  title:"Fine Smile",
  date: "10 jan to 28 jan",
  image : headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium quidem repellat quisquam, ducimus autem sequi consequatur totam illum ab veritatis nisi ",
  bgColor: "#f42c37"

};

const BannerData2 = {
  discount:"30% OFF",
  title:"Happy Hours",
  date: "14 jan to 28 jan",
  image :smartwatch2,
  title2:"Smart Solo",
  title3:"Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium quidem repellat quisquam, ducimus autem sequi consequatur totam illum ab veritatis nisi ",
  bgColor: "#2dcc6f"

};
  


const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
    <Navbar/>
    <Hero/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data={BannerData}/>
    <Product/>
    <Heading/>
    <Banner data={BannerData2}/>
    <Blogs/>
    <Partners/>
    <Footer/>
  </div>

  );
  
  
};

export default App;
