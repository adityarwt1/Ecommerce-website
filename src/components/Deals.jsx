
import { FaStar, FaStarHalfAlt, FaClock, FaShoppingCart } from "react-icons/fa";
import Menwear4 from "../assets/men4.jpg";
import Menwear5 from "../assets/men5.jpg";
import Menwear6 from "../assets/men6.jpg";
import Menwear7 from "../assets/men7.jpg";
import Menwear8 from "../assets/men8.jpg";
import WomanWearImage3 from "../assets/woman3.jpg";
import WomanWearImage4 from "../assets/woman4.jpg";
import WomanWearImage5 from "../assets/woman5.jpg";
import WomanWearImage6 from "../assets/woman6.jpg";
import WomanWearImage7 from "../assets/woman7.jpg";
import WomanWearImage8 from "../assets/woman8.jpg";
import ScienceKit from "../assets/sciencekit.webp";
import kidwear from "../assets/kid2.jpg";
import kidwear2 from "../assets/kid3.jpg";
import kidwear3 from "../assets/kid4.jpg";
import kidwear4 from "../assets/kid5.jpg";
import kidwear5 from "../assets/kid6.jpg";
const DealsSection = () => {
  
const deals = [
  { image: Menwear4, title: "Men's Jacket", oldPrice: 120, newPrice: 75 },
  { image: Menwear5, title: "Men's Shirt", oldPrice: 60, newPrice: 40 },
  { image: Menwear6, title: "Men's Trousers", oldPrice: 80, newPrice: 50 },
  { image: Menwear7, title: "Men's Shoes", oldPrice: 100, newPrice: 65 },
  { image: Menwear8, title: "Men's Hoodie", oldPrice: 90, newPrice: 60 },
  { image: WomanWearImage3, title: "Women's Dress", oldPrice: 150, newPrice: 100 },
  { image: WomanWearImage4, title: "Women's Top", oldPrice: 70, newPrice: 45 },
  { image: WomanWearImage5, title: "Women's Skirt", oldPrice: 80, newPrice: 55 },
  { image: WomanWearImage6, title: "Women's Shoes", oldPrice: 110, newPrice: 75 },
  { image: WomanWearImage7, title: "Women's Bag", oldPrice: 130, newPrice: 85 },
  { image: WomanWearImage8, title: "Women's Coat", oldPrice: 160, newPrice: 110 },
  { image: ScienceKit, title: "Science Kit", oldPrice: 50, newPrice: 35 },
  { image: kidwear, title: "Kids T-Shir'", oldPrice: 40, newPrice: 25 },
  { image: kidwear2, title: "Kids Jacket", oldPrice: 70, newPrice: 50 },
  { image: kidwear3, title: "Kids Shorts", oldPrice: 30, newPrice: 20 },
  { image: kidwear4, title: "Kids Shoes", oldPrice: 60, newPrice: 45 },
  { image: kidwear5, title: "Kids Hoodie", oldPrice: 55, newPrice: 35 },
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

  return (
    <section id="deals" className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Special Deals</h2>
        <p className="text-gray-600 mt-2">Limited Time Offers - Don't Miss Out!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {deals.map((deal, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-lg h-64">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                {Math.round(((deal.oldPrice - deal.newPrice) / deal.oldPrice) * 100)}% OFF
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{deal.title}</h3>
              
              {/* Pricing */}
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-red-600">${deal.newPrice}</span>
                <span className="ml-2 text-gray-500 line-through">${deal.oldPrice}</span>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-3">
                <div className="flex space-x-1">
                  {renderStars(4.5)}
                </div>
                <span className="ml-2 text-sm text-gray-600">(4.5)</span>
              </div>

              {/* Stock Status */}
              <div className="text-sm text-gray-600 mb-4 flex items-center">
                <FaClock className="mr-2" />
                <span>Limited Stock Available</span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-2">
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

export default DealsSection;
