
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Abdullah Rahman',
    location: 'Dhaka',
    rating: 5,
    text: 'মাছের টাটকা স্বাদ অসাধারণ! ছয় মাস ধরে অর্ডার করছি, কখনোই হতাশ হইনি। ডেলিভারি সময়মতো এবং মান সবসময়ই চমৎকার।',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Hasan Ahmed',
    location: 'Sylhet',
    rating: 5,
    text: 'রেস্টুরেন্টের জন্য সেরা মানের সামুদ্রিক মাছ দরকার ছিল। Seafin.shop এখন আমার নির্ভরযোগ্য সাপ্লায়ার। শুটকি কালেকশন একেবারে আসল স্বাদের!',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg'
  },
  {
    name: 'Fatema Akter',
    location: 'Mymensingh',
    rating: 5,
    text: 'আমি মাছের মান নিয়ে খুবই সচেতন। Seafin.shop প্রত্যেকবারই আমার প্রত্যাশা ছাড়িয়ে যায়। বৈচিত্র্য দারুণ এবং সবকিছু একদম টাটকা আসে।',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-ocean-600 to-ocean-800 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their Seafin experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up bg-gradient-to-br from-white to-ocean-50/30" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-ocean-600 fill-current" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-ocean-50 to-blue-50 px-8 py-4 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-ocean-600">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ocean-600">10,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ocean-600">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
