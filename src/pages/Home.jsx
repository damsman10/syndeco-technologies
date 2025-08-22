import AboutHome from "../components/AboutHome"
import BlogPosts from "../components/BlogPosts"
import CallToAction from "../components/CallToAction"
import Hero from "../components/Hero"
import OurProject from "../components/OurProject"
import PricingPlan from "../components/PricingPlan"
import ServicesHome from "../components/ServicesHome"
import StrategicSolutions from "../components/StrategicSolutions"
import Testimonials from "../components/Testimonials"
import TrustedComps from "../components/TrustedComps"


const Home = () => {
  return (
    <div>
        <Hero />
        <TrustedComps />
        <AboutHome />
        <ServicesHome />
        <StrategicSolutions /> 
        <OurProject /> 
        <PricingPlan />
        <Testimonials />
        <BlogPosts />
        <CallToAction />
    </div>
  )
}

export default Home