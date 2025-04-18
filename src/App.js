import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TestimonialSection from './components/TestimonialSection';
import ImageSlider from './components/ImageSlider';
import Services from './components/Services';
import ClientFeedback from './components/ClientFeedback';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import SocialButtons from './components/SocialButtons';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TestimonialSection />
      <ImageSlider />
      <Services />
      <ClientFeedback />
      <PricingSection />
      <FAQSection />
      <SocialButtons />
      <Footer />
    </div>
  );
}

export default App;
