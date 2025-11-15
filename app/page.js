"use client "

import Ticker from "./component/Barscroll";
import FeaturedProducts from "./component/Featured";
import Header from "./component/Header";
import ServicesSection from "./component/Service";



export default function Home() {
  return (
    
   <div className="mt-15">
    <Ticker/>
    <Header/>
    <hr className=" border-green-600"/>  
    <FeaturedProducts/>
    
    <ServicesSection/>
    
    
     </div>
  );
}
