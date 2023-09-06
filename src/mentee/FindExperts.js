import React from 'react'
import Hero from '../components/Hero'
import Analytics from '../components/Analytics'
import CrearorProfile from '../components/CrearorProfile'
import Newsletter from '../components/Newsletter'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Col, Row } from 'react-bootstrap'
import Input from '../components/Input'
import InputExampleIcon from '../components/SearchInput'
import DropdownExampleDivider from '../components/Dropdown'

const FindExperts=()=> {
  return (
    <div className=' bg-[#fff]'>
    <Navbar />
    <Row className='max-w-[900px] mx-auto my-4  '>
      <Col lg={10} className='items-center flex '>
      <InputExampleIcon />
      </Col>
      <Col lg={2}>
        <div className=' items-center flex '>
        <DropdownExampleDivider/>
        </div>
      </Col>
    </Row>
    {/* <Analytics/>
    <CrearorProfile/>
    <Newsletter/>
    <Cards/> */}
    <Footer/> 
  </div>
  )
}

export default FindExperts