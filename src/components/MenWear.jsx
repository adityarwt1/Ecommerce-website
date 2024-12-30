import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaShoppingCart } from "react-icons/fa";
import Menwear1 from '../assets/men1.jpg'
import Menwear2 from '../assets/men2.jpg'
import Menwear3 from '../assets/men3.jpg'
import Menwear4 from '../assets/men4.jpg'
import Menwear5 from '../assets/men5.jpg'
import Menwear6 from '../assets/men6.jpg'
import Menwear7 from '../assets/men7.jpg'
import Menwear8 from '../assets/men8.jpg'

function MenWear() {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      image: Menwear1,
      price: 89.99,
      rating: 4.5,
      description: "Stylish denim jacket perfect for casual wear",
      category: "jackets",
    },
    {
      id: 2,
      name: "Slim Fit T-Shirt",
      image: Menwear2,
      price: 29.99,
      rating: 4.0,
      description: "Comfortable cotton t-shirt with modern fit",
      category: "tshirts",
    },
    {
      id: 3,
      name: "Formal Business Suit",
      image: Menwear3,
      price: 299.99,
      rating: 5.0,
      description: "Premium quality business suit for professionals",
      category: "formal",
    },
    {
      id: 4,
      name: "Sports Running Shoes",
      image: Menwear4,
      price: 89.99,
      rating: 4.8,
      description: "High-performance running shoes for athletes",
      category: "shoes"
    },
    {
      id: 5,
      name: "Leather Wallet",
      image: Menwear5,
      price: 49.99,
      rating: 4.6,
      description: "Genuine leather wallet with multiple compartments",
      category: "accessories"
    },
    {
      id: 6,
      name: "Classic Watch",
      image: Menwear6,
      price: 199.99,
      rating: 4.9,
      description: "Elegant timepiece for any occasion",
      category: "accessories"
    },
    {
      id: 7,
      name: "Casual Sneakers",
      image: Menwear7,
      price: 79.99,
      rating: 4.5,
      description: "Comfortable everyday sneakers",
      category: "shoes"
    },
    {
      id: 8,
      name: "Business Briefcase",
      image: Menwear8,
      price: 149.99,
      rating: 4.7,
      description: "Professional leather briefcase for work",
      category: "accessories"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : rating >= index + 0.5 ? (
          <FaStarHalfAlt className="text-yellow-400" />
        ) : (
          <FaStar className="text-gray-300" />
        )}
      </span>
    ));
  };

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <section id="man" className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Men&apos;s Collection
        </h2>
        <p className="text-gray-600 mt-2">
          Discover our trending men&apos;s fashion
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
      {["all", "jackets", "tshirts", "formal", "shoes", "accessories"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full ${
              activeTab === tab
                ? "bg-yellow-400 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 bg-yellow-400 text-white text-sm px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {product.description}
              </p>

              {/* Rating Stars */}
              <div className="flex items-center mb-3">
                <div className="flex space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.rating})
                </span>
              </div>

              {/* Price */}
              <div className="text-xl font-bold text-gray-900 mb-4">
                ${product.price}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2">
                <button className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                  Buy Now
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenWear;
