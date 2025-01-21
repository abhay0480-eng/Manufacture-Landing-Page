import React from 'react'
import HeroComponent from '../components/HomePageComponents/HeroComponent'
import Section1 from '../components/HomePageComponents/Section1'
import Section2 from '../components/HomePageComponents/Section2'
import Section3 from '../components/HomePageComponents/Section3'
import Section4 from '../components/HomePageComponents/Section4'
import Section5 from '../components/HomePageComponents/Section5'

const HomePage = () => {
  return (
    <div>
        {/* Hero Section */}
        <HeroComponent/>
        {/* section 1 */}
        <Section1/>
        {/* Section 2 */}
        <Section2/>
        {/* section3 */}
        <Section3/>
        {/* Section 4 */}
        <Section4/>
        {/* section5 */}
        <Section5/>
    </div>
  )
}

export default HomePage
