import React from 'react'
import { Testi } from '../constant/constant'
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import { motion } from "motion/react";
import { fadeIn } from "../utils/variant";
import { Element } from 'react-scroll';
const Testimonial = () => {
  return (
    <Element name='Testimonials'>
      <div className='w-full bg-[#f7f8fc] py-12'>
      <div className='container mx-auto'>
          <div className='px-10'>
            <h2 className='font-bold text-2xl text-center'>What Our Clients Say</h2>
            <p className=' text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi culpa in quae <br></br> provident numquam iure dolore reiciendis officiis alias.</p>
          </div>
          <div className='flex justify-center my-5'>
          <div className='flex md:flex-row flex-col  gap-10 px-5'>
            {
               Testi.map((items,index)=>(
                <div
                 className='lg:w-[500px] border-2 relative rounded-sm shadow-sm p-8'
                
                  key={index}>
                  <div>
                     <div>
                        <FormatQuoteOutlinedIcon 
                        className='absolute top-[-13px] text-white  bg-green-400 rounded-full p-2'
                        fontSize='large'
                        />
                     </div>
                    <p>{items.review}</p>
                    <div className='flex gap-4'>
                       <div className='my-4 flex items-center'>
                        <img 
                        src={items.image} 
                        className='w-16  rounded-full'
                         alt="" />
                         <div className='px-4'>
                            <h4 className='font-bold '>{items.name}</h4>
                            <p>{items.location}</p>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
               ))
            }
          </div>
          </div>
      </div>
    </div>
    </Element>
  )
}

export default Testimonial
