import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaShoppingCart } from "react-icons/fa";
import DianasourImage from "../assets/dianasour.jpg";
import ScienceKit from '../assets/sciencekit.webp'
import kidwear from '../assets/kid2.jpg'
import kidwear2 from '../assets/kid3.jpg'
import kidwear3 from '../assets/kid4.jpg'
import kidwear4 from '../assets/kid5.jpg'
import kidwear5 from '../assets/kid6.jpg'
import kidwear6 from '../assets/kid7.jpg'


function KidsWear() {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: 1,
      name: "Dinosaur T-Shirt",
      image: DianasourImage,
      price: 24.99,
      rating: 4.5,
      description: "Comfortable cotton t-shirt with cute dinosaur print",
      category: "clothes",
    },
    {
      id: 2,
      name: "Building Blocks Set",
      image: kidwear,
      price: 34.99,
      rating: 5,
      description: "Educational building blocks for creative play",
      category: "toys",
    },
    {
      id: 4,
      name: "Kids Sports Sneakers",
      image: kidwear2,
      price: 49.99,
      rating: 4.8,
      description: "Comfortable sports shoes for active kids",
      category: "shoes"
    },
    {
      id: 5,
      name: "Cartoon Print Hoodie",
      image: kidwear3,
      price: 34.99,
      rating: 4.3,
      description: "Warm and fun hoodie with cartoon characters",
      category: "clothes"
    },
    {
      id: 6,
      name: "Educational Robot Toy",
      image: kidwear4,
      price: 79.99,
      rating: 4.7,
      description: "Interactive learning robot for kids",
      category: "toys"
    },
    {
      id: 7,
      name: "Kids Backpack",
      image: kidwear5,
      price: 29.99,
      rating: 4.4,
      description: "Durable school backpack with fun designs",
      category: "accessories"
    },
    {
      id: 8,
      name: "Art Supply Set",
      image: kidwear6,
      price: 39.99,
      rating: 4.9,
      description: "Complete art kit for creative kids",
      category: "toys"
    },
    {
      id: 9,
      name: "Kids Science Kit",
      image: ScienceKit,
      price: 44.99,
      rating: 4.7,
      description: "Educational science experiment set for young minds",
      category: "toys"
  }
    // Add more products as needed
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
    <section id="kid" className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Kids Collection</h2>
        <p className="text-gray-600 mt-2">
          Discover our amazing collection for kids
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
      {['all', 'clothes', 'toys', 'shoes', 'accessories'].map((tab) => (
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

export default KidsWear;
