
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Atlantic Salmon',
    category: 'Fresh Fish',
    price: '₹899',
    originalPrice: '₹1,199',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Fresh Today'
  },
  {
    id: 2,
    name: 'King Prawns',
    category: 'Seafood',
    price: '₹1,299',
    originalPrice: '₹1,599',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'Dried Bombay Duck',
    category: 'Dry Fish',
    price: '₹649',
    originalPrice: '₹799',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Best Seller'
  },
  {
    id: 4,
    name: 'Red Snapper',
    category: 'Fresh Fish',
    price: '₹749',
    originalPrice: '₹999',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Ocean Fresh'
  },
  {
    id: 5,
    name: 'Dried Mackerel',
    category: 'Dry Fish',
    price: '₹549',
    originalPrice: '₹699',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Traditional'
  },
  {
    id: 6,
    name: 'Tuna Steaks',
    category: 'Fresh Fish',
    price: '₹1,199',
    originalPrice: '₹1,499',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Premium Cut'
  }
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Our Premium{' '}
            <span className="bg-gradient-to-r from-ocean-600 to-ocean-800 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of the finest sea fish and traditional dry fish, 
            sourced directly from coastal waters and prepared with traditional methods.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-ocean-600 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                  <span className="text-sm text-ocean-600 font-medium">{product.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-400 ml-2">(250+ reviews)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-ocean-600 to-ocean-700 hover:from-ocean-700 hover:to-ocean-800 text-white">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-ocean-300 text-ocean-700 hover:bg-ocean-50 font-semibold px-8 py-4 rounded-xl">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
