import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaShoppingCart } from 'react-icons/fa';
import WomanWearImage1 from '../assets/woman1.jpg';
import WomanWearImage2 from '../assets/woman2.jpg';
import WomanWearImage3 from '../assets/woman3.jpg';
import WomanWearImage4 from '../assets/woman4.jpg';
import WomanWearImage5 from '../assets/woman5.jpg';
import WomanWearImage6 from '../assets/woman6.jpg';
import WomanWearImage7 from '../assets/woman7.jpg';
import WomanWearImage8 from '../assets/woman8.jpg';

function WomenWear() {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 1,
      name: "Floral Summer Dress",
      image: WomanWearImage1,
      price: 79.99,
      rating: 4.5,
      description: "Beautiful floral print dress perfect for summer",
      category: "dresses"
    },
    {
      id: 2,
      name: "Designer Handbag",
      image: WomanWearImage2,
      price: 129.99,
      rating: 5.0,
      description: "Elegant leather handbag for everyday use",
      category: "accessories"
    },
    {
      id: 3,
      name: "Silk Blouse",
      image: WomanWearImage3,
      price: 89.99,
      rating: 4.0,
      description: "Luxurious silk blouse for formal occasions",
      category: "tops"
    },
    {
      id: 4,
      name: "High Heel Sandals",
      image: WomanWearImage4,
      price: 99.99,
      rating: 4.6,
      description: "Elegant evening sandals with comfortable fit",
      category: "shoes"
    },
    {
      id: 5,
      name: "Statement Necklace",
      image: WomanWearImage5,
      price: 49.99,
      rating: 4.8,
      description: "Bold and elegant statement piece jewelry",
      category: "accessories"
    },
    {
      id: 6,
      name: "Evening Gown",
      image: WomanWearImage6,
      price: 199.99,
      rating: 4.9,
      description: "Stunning evening gown for special occasions",
      category: "dresses"
    },
    {
      id: 7,
      name: "Casual Sneakers",
      image: WomanWearImage7,
      price: 69.99,
      rating: 4.4,
      description: "Comfortable and stylish everyday sneakers",
      category: "shoes"
    },
    {
      id: 8,
      name: "Designer Sunglasses",
      image: WomanWearImage8,
      price: 159.99,
      rating: 4.7,
      description: "Luxury sunglasses with UV protection",
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

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <section id='woman' className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Women&apos;s Collection</h2>
        <p className="text-gray-600 mt-2">Explore our exclusive women&apos;s fashion</p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        {['all', 'dresses', 'tops', 'accessories'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full ${
              activeTab === tab
                ? 'bg-yellow-400 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
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

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              
              <div className="flex items-center mb-3">
                <div className="flex space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
              </div>

              <div className="text-xl font-bold text-gray-900 mb-4">
                ${product.price}
              </div>

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

export default WomenWear;