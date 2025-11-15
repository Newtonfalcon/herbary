"use client"

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Leaf, Sparkles } from 'lucide-react';
import { products } from '../utils/data';

const WHATSAPP_NUMBER = '+2347048556600';

// Sample products data - Replace with your actual data
const SAMPLE_PRODUCTS = products


export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [products] = useState(SAMPLE_PRODUCTS);

  const getRandomProducts = (allProducts, count) => {
    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    setFeaturedProducts(getRandomProducts(products, 6));

    const interval = setInterval(() => {
      setFeaturedProducts(getRandomProducts(products, 6));
    }, 300000);

    return () => clearInterval(interval);
  }, [products]);

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  const handleOrderClick = (product) => {
    const message = `Hello Herbary! I'm interested in the ${product.name} (${formatPrice(product.price)}). Please provide more information about this product.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 gap-2">
            <Sparkles className="w-8 h-8 text-green-600" />
            <span className="text-green-600 font-semibold text-lg">Handpicked For You</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-green-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully selected premium herbal products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500 group"
            >
              <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Leaf className="w-24 h-24 text-green-300 group-hover:text-green-400 transition-colors duration-300" />
                  </div>
                )}
                
                <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {product.category}
                </div>

                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-green-600 flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-green-600" />
                  <span>4.8</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                
                {product.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <button
                  onClick={() => handleOrderClick(product)}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => window.location.href = '/products'}
            className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <Leaf className="w-5 h-5" />
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}