
import { Shield, Truck, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every fish is carefully selected and quality checked to ensure freshness and taste.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Express delivery within 24 hours to maintain the freshness of your seafood.',
    gradient: 'from-blue-500 to-ocean-600'
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Our fish arrives fresh every morning from coastal fishing boats.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Heart,
    title: 'Sustainably Sourced',
    description: 'We work with local fishermen who practice sustainable fishing methods.',
    gradient: 'from-purple-500 to-pink-600'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-ocean-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-ocean-600 to-ocean-800 bg-clip-text text-transparent">
              Seafin.shop
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to bringing you the finest seafood experience with uncompromising quality and service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group text-center animate-slide-up hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-ocean-200 to-blue-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 transform scale-150"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <span className="text-gray-700 font-medium">Ready to taste the ocean's finest?</span>
            <button className="ml-4 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-6 py-2 rounded-full hover:from-ocean-700 hover:to-ocean-800 transition-all duration-300 font-medium">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
