import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Leaf, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean-50 via-white to-ocean-100 pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent)]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
              <Leaf className="h-4 w-4 mr-2 fill-current" />
              100% Organic & Chemical-Free
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
              স্বাস্থ্যকর{' '}
              <span className="bg-gradient-to-r from-ocean-600 to-ocean-800 bg-clip-text text-transparent">
                শুটকি মাছ
              </span>{' '}
              ও{' '}
              <span className="bg-gradient-to-r from-ocean-600 to-ocean-800 bg-clip-text text-transparent">
                সামুদ্রিক মাছ
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              বাংলাদেশের উপকূলীয় অঞ্চল থেকে সরাসরি সংগৃহীত লবণ ও রাসায়নিক মুক্ত 
              প্রাকৃতিক শুটকি মাছ ও তাজা সামুদ্রিক মাছ। স্বাস্থ্যকর প্রোটিনের জন্য 
              আমাদের বিশ্বস্ত পছন্দ।
            </p>

            {/* Fish Images Display */}
            {/* Desktop: Fish images on right, mobile: unchanged (stacked) */}
            <div className="relative mb-8 h-[300px]">
              {/* Desktop right-aligned fish images */}
              <div className="hidden lg:flex flex-col items-end justify-center absolute right-0 top-1/2 -translate-y-1/2 gap-[1mm]">
                <img
                  src="/lovable-uploads/5646843e-635d-4778-93ba-dc4ac9caf098.png"
                  alt="Bronze Fish Background"
                  className="w-60 h-60 object-contain opacity-70 animate-float transition-transform duration-500"
                  style={{ margin: 0, animationDelay: '0.5s' }}
                />
                <img
                  src="/lovable-uploads/da989531-6df3-4866-a39b-9ea212775891.png"
                  alt="Fresh Organic Sea Fish"
                  className="w-60 h-60 object-contain animate-float transition-transform duration-500"
                  style={{ margin: 0, animationDelay: '1s' }}
                />
              </div>
              {/* Mobile: stacked fish images as before */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-[1mm] lg:hidden">
                <img
                  src="/lovable-uploads/5646843e-635d-4778-93ba-dc4ac9caf098.png"
                  alt="Bronze Fish Background"
                  className="w-60 h-60 object-contain opacity-70 animate-float transition-transform duration-500"
                  style={{ margin: 0, animationDelay: '0.5s' }}
                />
                <img
                  src="/lovable-uploads/da989531-6df3-4866-a39b-9ea212775891.png"
                  alt="Fresh Organic Sea Fish"
                  className="w-60 h-60 object-contain animate-float transition-transform duration-500"
                  style={{ margin: 0, animationDelay: '1s' }}
                />
              </div>
              {/* Desktop: Extra info cards on left, hidden on mobile */}
              <div className="hidden lg:flex flex-col gap-6 absolute left-0 top-1/2 -translate-y-1/2">
                <div className="bg-white p-4 rounded-xl shadow-lg animate-float z-30 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">আজকের তাজা</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg animate-float z-30 flex items-center space-x-2" style={{ animationDelay: '0.5s' }}>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-medium">Fresh-Quality</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg animate-float z-30 flex items-center space-x-2" style={{ animationDelay: '1s' }}>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm font-medium">Imported Sea Fish & Dry Fishes</span>
                </div>
              </div>
              
              {/* Floating Info Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float z-30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">আজকের তাজা</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float z-30" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <div className="text-lg font-bold text-ocean-600">৪.৯★</div>
                  <div className="text-xs text-gray-600">গ্রাহক রেটিং</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-gradient-to-r from-ocean-600 to-ocean-700 hover:from-ocean-700 hover:to-ocean-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                অর্ডার করুন
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-ocean-300 text-ocean-700 hover:bg-ocean-50 font-semibold px-8 py-4 rounded-xl">
                শুটকি মাছের তালিকা
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>রাসায়নিক মুক্ত</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-green-600" />
                <span>১০০% প্রাকৃতিক</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>সর্বোচ্চ মানের</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">৫০+</div>
                <div className="text-sm text-gray-600">মাছের জাত</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">১০K+</div>
                <div className="text-sm text-gray-600">সন্তুষ্ট ক্রেতা</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">২৪ঘ</div>
                <div className="text-sm text-gray-600">তাজা ডেলিভারি</div>
              </div>
            </div>
          </div>
          
          {/* Right side - keeping it empty since we moved images to left */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
