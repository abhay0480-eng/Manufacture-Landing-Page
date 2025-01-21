import React from 'react'
import H2 from '../Typography/H2'
import P20Black from '../Typography/P20Black'
import P3xl from '../Typography/P3xl'
import P20 from '../Typography/P20'

const Section5 = () => {
  return (
    <section className='py-20 w-[95%] md:w-[70%] mx-auto'>
        <div className='text-center w-[95%] md:w-[60%] mx-auto'>
            <H2>See how we solve problems, <span className='text-[#b1ceeb]'> right on target</span></H2>
        </div>
        <div className='bg-[#f2f4f4] p-10 md:grid md:grid-cols-2 gap-x-10 my-20 rounded-2xl justify-items-center  content-center text-center md:text-left'>
            <div className='flex justify-start items-center flex-wrap'>
                <div>
                <P3xl>Medtronic</P3xl>
                <P20Black>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab itaque vitae ipsam autem soluta doloribus magni, dolores nisi nesciunt reiciendis ullam accusantium quibusdam ad possimus. Accusamus cum quaerat veniam id."</P20Black>
                <button className='border-[1px] border-[#00d47e] my-10 bg-[#00d47e] text-white rounded-3xl px-3 py-2 shadow-sm '>View case Study</button>
                <P20>Jennifre - CTO medtromic</P20>
                </div>
                
            </div>

            <div>
                <img src='https://images.unsplash.com/photo-1722495178488-c8056c4ec2c0?q=80&w=2997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className=''/>
            </div>
        </div>
    </section>
  )
}

export default Section5
