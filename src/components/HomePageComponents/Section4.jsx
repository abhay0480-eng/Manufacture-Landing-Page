import React from 'react'
import H2 from '../Typography/H2'
import P from '../Typography/P'
import P20Black from '../Typography/P20Black'
import { Link } from 'react-router'

const Section4 = () => {
  return (
    <section className='bg-white py-20 md:grid-cols-2 md:grid gap-x-20 gap-y-10   justify-items-center text-center md:text-left  content-center w-[95%] md:w-[70%] mx-auto'>
        <div className='my-10 md:my-0'>
            <div className='pb-20'>
                <H2>Trusted Services, <span className='text-[#b1ceeb]'> for your various needs.</span></H2>
                <button className='border-[1px] border-[#00d47e] my-10 bg-[#00d47e] text-white rounded-3xl px-3 py-2 shadow-sm '>Get in touch</button>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10 rounded-2xl ">
                    <P className='text-left'>01</P>
                    <P20Black>Lorem ipsum</P20Black>
                    <Link to='#'>View Details</Link>
                </div>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10 rounded-2xl ">
                    <P className='text-left'>01</P>
                    <P20Black>Lorem ipsum</P20Black>
                    <Link to='#'>View Details</Link>
                </div>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10 rounded-2xl ">
                    <P className='text-left'>01</P>
                    <P20Black>Lorem ipsum</P20Black>
                    <Link to='#'>View Details</Link>
                </div>
                <div className="border-[1px] border-[#8d959d] border-collapse p-10 rounded-2xl ">
                    <P className='text-left'>01</P>
                    <P20Black>Lorem ipsum</P20Black>
                    <Link to='#'>View Details</Link>
                </div>
            </div>
        </div>
        <div>
            <img src='https://images.unsplash.com/photo-1616527206387-29b7a7d37a81?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='rounded-2xl max-h-[800px] '/>
        </div>
    </section>
  )
}

export default Section4
