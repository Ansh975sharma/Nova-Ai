
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import TrustedBy from "./Components/TrustedBy"
import Features from "./Components/Features"
import About from "./Components/About"
import HowItWorks from "./Components/HowItWorks"
import Stats from "./Components/Stats"
import Solutions from "./Components/Solutions"
import Testimonials from "./Components/Testimonials"
import Pricing from "./Components/Pricing"
import FAQ from "./Components/FAQ"
import CTA from "./Components/CTA"
import Footer from "./Components/Footer"
function App() {


  return (
<>
<div className="flex flex-col px-6 md:px-10 lg:px-16 ">
  <Navbar/>
  <Hero/>
  <TrustedBy/>
  <Features/>
  <About/>
  <HowItWorks/>
  <Stats/>
  <Solutions/>
  <Testimonials/>
  <Pricing/>
  <FAQ/>
  <CTA/>
  <Footer/>
</div>


</>
  )
}

export default App
