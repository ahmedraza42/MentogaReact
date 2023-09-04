import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SliderHeader=({type,heading,onPress})=> {
  return (
    // <Container className="">
        <Row>
          <Col className="items-center flex">
            <Row className="justify-center">
              <Col className="bg-[#DDEAFF] rounded p-2">
                <div className="d-flex rounded ">
                  <h5 className="">{type}</h5>
                  <img
                    className="ml-3"
                    src="https://res.cloudinary.com/dn2x9xpxm/image/upload/v1688393864/Angular/stockimages/star-2_quuvjr.svg"
                    alt="Star Icon"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="hidden sm:flex md:flex justify-center items-center">
            <div className="hidden sm:flex md:flex justify-center items-center">
              <h5 className="text-center font-bold">
                {heading}
              </h5>
            </div>
          </Col>
          <Col>
            <div className=" bg-slate-100  float-right">
              {/* <h4 className=' text-right '>View All</h4> */}
              <button className="bg-[#DDEAFF] w-[100px] rounded font-medium p-[12px]" onClick={onPress}>
                View All
              </button>
            </div>
          </Col>
        </Row>
      // </Container>
  )
}

export default SliderHeader