
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <ProductGrid />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
