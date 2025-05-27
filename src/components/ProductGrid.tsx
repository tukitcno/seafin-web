
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, ShoppingCart, Leaf } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'চিংড়ি শুটকি',
    nameEn: 'Organic Dried Shrimp',
    category: 'শুটকি মাছ',
    price: '৳৪৯৯',
    originalPrice: '৳৬৯৯',
    rating: 4.9,
    badge: 'জৈব',
  },
  {
    id: 2,
    name: 'রুই শুটকি',
    nameEn: 'Organic Dried Rohu',
    category: 'শুটকি মাছ',
    price: '৳৮৯৯',
    originalPrice: '৳১,১৯৯',
    rating: 4.8,
    badge: 'প্রিমিয়াম',
  },
  {
    id: 3,
    name: 'ইলিশ শুটকি',
    nameEn: 'Organic Dried Hilsa',
    category: 'শুটকি মাছ',
    price: '৳১,২৯৯',
    originalPrice: '৳১,৫৯৯',
    rating: 4.9,
    badge: 'বেস্ট সেলার',
  },
  {
    id: 4,
    name: 'কাতলা শুটকি',
    nameEn: 'Organic Dried Catla',
    category: 'শুটকি মাছ',
    price: '৳৭৪৯',
    originalPrice: '৳৯৯৯',
    rating: 4.7,
    badge: 'প্রাকৃতিক',
  },
  {
    id: 5,
    name: 'পার্শে শুটকি',
    nameEn: 'Organic Dried Parse',
    category: 'শুটকি মাছ',
    price: '৳৫৪৯',
    originalPrice: '৳৬৯৯',
    rating: 4.6,
    badge: 'ঐতিহ্যবাহী',
  },
  {
    id: 6,
    name: 'করাল শুটকি',
    nameEn: 'Organic Dried Coral',
    category: 'শুটকি মাছ',
    price: '৳৯৯৯',
    originalPrice: '৳১,২৯৯',
    rating: 4.8,
    badge: 'স্পেশাল',
  }
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            আমাদের{' '}
            <span className="bg-gradient-to-r from-ocean-600 to-ocean-800 bg-clip-text text-transparent">
              প্রিমিয়াম সংগ্রহ
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            বাংলাদেশের উপকূলীয় অঞ্চল থেকে সংগৃহীত রাসায়নিক মুক্ত, ১০০% প্রাকৃতিক 
            শুটকি মাছের বিশেষ সংগ্রহ। স্বাস্থ্যকর প্রোটিনের জন্য আদর্শ।
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-ocean-50 to-ocean-100 flex items-center justify-center">
                {/* Placeholder for product image */}
                <div className="text-center text-gray-400">
                  <div className="w-20 h-20 mx-auto mb-4 bg-ocean-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐟</span>
                  </div>
                  <p className="text-sm">পণ্যের ছবি যোগ করা হবে</p>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <Leaf className="h-3 w-3 mr-1" />
                  {product.badge}
                </div>
                
                {/* Quick Add Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-ocean-600 hover:bg-ocean-50 rounded-full p-3">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-green-600 font-medium">{product.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.nameEn}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-400 ml-2">(২৫০+ রিভিউ)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-ocean-600 to-ocean-700 hover:from-ocean-700 hover:to-ocean-800 text-white">
                    কার্টে যোগ করুন
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-ocean-300 text-ocean-700 hover:bg-ocean-50 font-semibold px-8 py-4 rounded-xl">
            সব পণ্য দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
