import React from 'react'
import { Link, NavLink } from 'react-router'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className='bg-black py-20'>
        <div className='md:grid md:grid-cols-2 gap-x-10 w-[95%] md:w-[70%] mx-auto text-center md:text-left'>
            <div>
                <h2 className=' text-white text-xl md:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere praesentium officiis animi magni eaque nihil architecto id.</h2>
                <div className='md:flex justify-between text-sm items-center my-5 text-white flex-wrap'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                </div>
            </div>

            <div>
                <p className=' text-white text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere praesentium officiis animi magni eaque nihil architecto id.</p>
                <button className='border-[1px] border-white my-10 bg-white text-black rounded-3xl px-3 py-2 shadow-sm '>Get in touch</button>

            </div>
        </div>

        <div className="flex items-center z-50 justify-between pt-20 pb-10  text-white w-[95%] text-center md:w-[70%] mx-auto border-b-[1px] border-b-gray-400 flex-wrap gap-2">
            <h1 className="text-xl md:text-2xl font-bold">Xurya</h1>
            <div className='flex justify-between items-center gap-x-5 flex-wrap gap-2'>
                <Link to='/' >Home</Link>
                <Link to='/about-us' >About Us</Link>
                <Link to='/features' >Features</Link>
                <Link to='/services' >Services</Link>
                <Link to='/contact' >Contact</Link>
            </div>

            <div className='flex justify-start items-center gap-x-5'>
                <FacebookIcon/>
                <LinkedInIcon/>
                <InstagramIcon/>
                <XIcon/>
            </div>
        </div>
        <div className='flex justify-between items-center gap-2 text-white w-[95%] md:w-[70%] mx-auto pt-10 flex-wrap'>
            <div>
                <p>All rights reserved.</p>
            </div>
            <div className='flex justify-start items-center '>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
