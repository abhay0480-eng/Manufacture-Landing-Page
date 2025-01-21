import React from 'react'
import { Link } from 'react-router'
import H2 from '../Typography/H2'
import P from '../Typography/P'

const HeroComponent = () => {
  return (
    <section className='rounded-xl relative max-h-[800px] overflow-hidden'>
    <div className='bg-black bg-opacity-35 w-full h-full absolute z-5 rounded-3xl'></div>
    <img src='https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    className='rounded-3xl '/>
    <div className='md:grid md:grid-cols-2 gap-x-20 absolute top-1/2  transform  -translate-y-1/2'>
        <div className='px-5 md:px-20'>
            <p className='text-white my-3 text-xl'>#1 Energy provided in the world</p>
            <h1 className='text-2xl md:text-8xl text-white font-medium'>New Energy for the Future</h1>
            <div className='text-white my-5 flex justify-start items-center gap-x-5'>
                <Link to='/get-in-touch' className='underline'>Get in Touch</Link>
                <Link to='/services' className='underline'>Our Services</Link>
            </div>
        </div>
        <div className='hidden'>
            <div className='w-80 h-80'></div>
        </div>
    </div>
    <div className='md:grid hidden  bg-white absolute bottom-0 right-0 w-[50%] h-[11rem] p-10 rounded-tl-3xl grid-cols-3 gap-x-4'>
        <div className='text-center'>
            <H2>6 mil</H2>
            <P>The Companys anual networth</P>
        </div>
        <div>
            <H2>315</H2>
            <P>The Companys anual networth</P>

        </div>
        <div>
            <H2>120K</H2>
            <P>The Companys anual networth</P>
        </div>
    </div>
</section>
  )
}

export default HeroComponent
