import React from "react";
import Carousel from "./Carousel";

import PosMachines from "./PosMachines";
import HomeProducts from "./HomeProducts";
import Service from "./Services";
import Partners from "./Partners";
import ContactUsBanner from "./utils/ContactUsBanner";
import WhyChooseUs from "./utils/WhyYouChooseUs";
import NewsletterSubscription from "./utils/NewsLetter";

export default function Home() {
  return (
    <div className=""> 
      <Carousel />
      <PosMachines />
      <HomeProducts />
      <Service />
      <Partners />
      <ContactUsBanner/>
      <WhyChooseUs/>
      <NewsletterSubscription/>
    </div>
  );
}
