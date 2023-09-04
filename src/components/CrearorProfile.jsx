import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SliderHeader from "./SliderHeader";
import Cards from "./Cards";
import { Carousel } from "@trendyol-js/react-carousel";

const CrearorProfile = ({model}) => {
  const itemList = model.map((item, index) => (
    <Cards
      key={`index ${index}`}
      image={item.profileImage}
      firstName={item?.fullName}
      aboutMe={item?.aboutMe}
      shortBio={item?.shortBio}
    />
  ));
  return (
    <div className="max-w-[1240px] mx-auto  py-[1rem]  bg-[#ffff] ">
     <SliderHeader type={'Business'} heading={'Connect with CEOs, executives, coaches, and more'}/>
     <div className=" bg-[#ffff]">
     <Carousel  className=" bg-[#ffff] my-5" show={4} slide={3} swiping={true}>
        {itemList}
      </Carousel>
      </div>
    </div>
  );
};

export default CrearorProfile;
