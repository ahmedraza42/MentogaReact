import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SliderHeader from "../../SliderHeader";
import Cards from "../../Cards/Cards";

import '../CreatorProfile/creatorProfile.css'

const CrearorProfile = ({model=[]}) => {

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
    <div className=" w-full py-[1rem]  bg-[#ffff] px-4 ">
    <div className="max-w-[1240px] mx-auto">
    {
      model.map((item,ind)=>{
        console.log({item})
        return(
          <>
          <h1 className="categoryName">{item[0].categoryName}</h1>
          
          <div className="horizontal-scroll-container">
          <div className="card-container">
          {  item.map((item, index) => (
          <Cards
            key={`index ${index}`}
            image={item.profileImage}
            firstName={item?.fullName}
            aboutMe={item?.aboutMe}
            shortBio={item?.shortBio}
            uniqueName={item?.uniqueName}
          />
        ))}
          </div>
          
         
         
        
          {/* </Carousel> */}
         
          </div>
       
        
          </>
         
         
          
        )
      })
    }
     {/* <SliderHeader type={} heading={'Connect with CEOs, executives, coaches, and more'}/>
     <div className=" bg-[#ffff]">
     <Carousel  className=" bg-[#ffff] my-5" show={4} slide={3} swiping={true}>
        {itemList}
      </Carousel>
      </div> */}
      </div>
    </div>
  );
};

export default CrearorProfile;
