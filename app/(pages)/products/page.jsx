"use client"

import React, { useState } from 'react';
import { ShoppingCart, Star, Leaf, Search, X } from 'lucide-react';
import { categories, products } from '@/app/utils/data';

export default function FeaturedProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  function openDescription() {
    if( products.map((product) => product.id )) {
       setOpen(!open)
    }
  }
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  const handleAddToCart = (product) => {
    const whatsappNumber = '+2347048556600'; // First number from the contact info
    const message = encodeURIComponent(
      `Hello Herbary! I'm interested in the ${product.name} (${formatPrice(product.price)}). Please provide more information about this product.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Leaf className="w-8 h-8 text-green-600 mr-2" />
            <span className="text-green-600 font-semibold text-lg">Premium Quality</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Complete <span className="text-green-600">Product Collection</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the power of wellness with Herbary's expertly crafted herbal blends
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-full focus:border-green-500 focus:outline-none text-gray-700 bg-white shadow-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 border-2 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-center">
            Showing <span className="font-bold text-green-600">{filteredProducts.length}</span> of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-500 group"
              >
                {/* Product Image Container */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 h-56 flex items-center justify-center relative overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <Leaf className="w-24 h-24 text-green-300 group-hover:text-green-400 transition-colors duration-300" />
                      <span className="text-xs text-green-600 mt-2 font-medium">Image Coming Soon</span>
                    </div>
                  )}
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-green-600 flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-green-600" />
                    <span>4.8</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                    
                  </h3>






                  {open && <p className="text-gray-600 mb-4 ">
                    {product.description}
                  </p>}
                  






                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <div className='flex flex-row justify-between gap-4'>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-50 bg-green-600 text-white py-3 rounded-xl  hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Order Now
                  </button>



                    <button 
                    onClick={openDescription}
                    className={ ` w-40 bg-yellow-600 text-white py-3 font-light rounded-xl  hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg`}
                  >
                    
                    check details
                  </button>
                  
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Leaf className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-green-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-6">
            Our wellness experts are here to guide you to the perfect herbal solution
          </p>
          <button 
            onClick={() => {
              const whatsappNumber = '1550';
              const message = encodeURIComponent('Hello Herbary! I need help choosing the right product for my wellness needs.');
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            }}
            className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Contact Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}