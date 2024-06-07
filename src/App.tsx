import BannerSection from "./components/BannerSection"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import FeaturesSec from "./components/FeaturesSec"
import FeaturesSection from "./components/FeaturesSection"
import FeaturesSectionBreakfast from "./components/FeaturesSectionBreakfast"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewsLatter from "./components/NewsLatter"

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeaturesSection/>
      <FeaturesSectionBreakfast/>
      <BannerSection/>
      <BlogSection/>
      <NewsLatter/>
      <FeaturesSec/>
      <Footer/>
    </main>
  )
}

export default App
