import React from 'react'
import H2 from '../Typography/H2'
import P from '../Typography/P'
import P20Black from '../Typography/P20Black'

const Section3 = () => {
  return (
    <section className='bg-[#f2f4f4] py-20 md:py-32'>
        <div className='text-center w-[80%] md:w-[50%] mx-auto'>

        <H2>We offer quality, <span className='text-[#b1ceeb]'> with the best material and services</span></H2>
        </div>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-x-0  my-24 border-[1px] border-[#8d959d] bg-white border-collapse w-[95%] md:w-[70%] md:rounded-2xl  mx-auto shadow-md'>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10 md:rounded-tl-2xl ">
                    <p className='text-left'>icon</p>

                    <P20Black>Lorem ipsum</P20Black>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit pariatur .</P>
                </div>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10">
                    <p className='text-left'>icon</p>

                    <P20Black>Lorem ipsum</P20Black>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit pariatur .</P>
                </div>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10 md:rounded-tr-2xl">
                    <p className='text-left'>icon</p>

                    <P20Black>Lorem ipsum</P20Black>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit pariatur .</P>
                </div>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10 md:rounded-bl-2xl">
                    <p className='text-left'>icon</p>

                    <P20Black>Lorem ipsum</P20Black>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit pariatur .</P>
                </div>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10">
                    <p className='text-left'>icon</p>

                    <P20Black>Lorem ipsum</P20Black>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit pariatur .</P>
                </div>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10 md:rounded-br-2xl">
                    <p className='text-left'>icon</p>

                    <P20Black>Lorem ipsum</P20Black>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit pariatur .</P>
                </div>
            </div>
    </section>
  )
}

export default Section3
