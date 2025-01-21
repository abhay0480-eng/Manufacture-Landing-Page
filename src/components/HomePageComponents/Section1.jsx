import React from 'react'
import H2 from '../Typography/H2'
import P20 from '../Typography/P20'

const Section1 = () => {
  return (
    <section className='md:grid md:grid-cols-2 gap-x-20 text-center my-24'>
        <div>
            <H2>Focusing on quality, <span className='text-[#8d959d]'> we maintain customer trust</span> </H2>
        </div>

        <div>
            <P20>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a pariatur vero quam temporibus est praesentium omnis amet. Quibusdam placeat eaque nihil fugiat distinctio nemo laborum minus explicabo velit in?</P20>
        </div>
    </section>
  )
}

export default Section1
