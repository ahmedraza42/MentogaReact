import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Input from "../components/Input";
import CreatorMiniProfile from "../components/CreatorMiniProfile";
import "../css/Home.css";
import Analytics from "../components/Analytics";
import CrearorProfile from "../components/CrearorProfile";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Carousel } from "@trendyol-js/react-carousel";
import API_CALLS from "../services/constants";
import { getCategory } from "../redux/actions/country";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";

const Home = () => {
  const dispatch = useDispatch();
  const [model, setModel] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryList = useSelector((state) => state.category.category);
  useEffect(() => {
    getCategoryy();
    getHomePageData();
  }, []);
  const getHomePageData = async () => {
    try {
      const respose = await API_CALLS.HomePreferedMentors();
      if (respose.status === true) {
        setModel(respose.objModelList);
      } else {
        throw respose.userMessage;
      }
    } catch (error) {
      console.log({ error });
    }
    finally{
      setLoading(false)
    }
  };

  const getCategoryy=async()=>{
    try {
      const response=await API_CALLS.getAllcategories();
      if(response.status===true){
        console.log('response.modelList',response.modelList)
        dispatch(getCategory(response.modelList))
      }
      else{
        throw response.userMessage;
      }
    } catch (error) {
      console.log(error,'response category')
    }
  }
  
  return (
    <dic className=" bg-[#fff]">
     <Navbar />
      <Hero />
      {categoryList?.length>0&&<Categories model={categoryList}/>}
      <Analytics /> 
      {!loading&& <CrearorProfile model={model} />}
      <Newsletter />
      <Footer />
    </dic>
  );
};

export default Home;

{
  /* <Container className="">
      <Row className="d-flex">
  
        <h1>Top superstars</h1>
        <Col className=" flex overflow-y-scroll scrollbar-hide p-3  bg-fuchsia-200">
          {data.map((item, index) => {
            return <div key={index} className="item"><CreatorMiniProfile /></div> ;
          })}
        </Col>
      </Row>

      <Row>
        <h1>Top superstars</h1>
        <Col className=" flex overflow-y-scroll scrollbar-hide p-3  bg-fuchsia-200">
          {data.map((item, index) => {
            return <CreatorMiniProfile />;
          })}
        </Col>
      </Row>

      <Row>
        <h1>Top superstars</h1>
        <Col className=" flex overflow-y-scroll scrollbar-hide p-3  bg-fuchsia-200">
          {data.map((item, index) => {
            return <CreatorMiniProfile />;
          })}
        </Col>
      </Row>
    </Container> */
}
