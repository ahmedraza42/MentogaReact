import { Carousel } from '@trendyol-js/react-carousel'
import React from 'react'

const Categories=({model=[]})=> {

    const itemList = model.map((item, index) => (
        <div className='  px-4 bg-black'>
        <div className='grid md:grid-cols-3 gap-3'>
        
              
        </div>
      </div>
      ));
  return (
    <div className='max-w-[1240px] mx-auto  py-[1rem]  bg-[#ffff]'>
 <Carousel  className=" bg-[#ffff] my-5" show={6} slide={3} swiping={true}>
    {itemList}
  </Carousel>
    </div>
   

   
  )
}

export default Categories