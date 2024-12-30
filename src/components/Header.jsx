import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [cartCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  let timeoutId = null;
  let categoryTimeoutId = null;

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleCategoryEnter = () => {
    setIsCategoryOpen(true);
    if (categoryTimeoutId) clearTimeout(categoryTimeoutId);
  };

  const handleCategoryLeave = () => {
    categoryTimeoutId = setTimeout(() => {
      setIsCategoryOpen(false);
    }, 200);
  };
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <h1>Adi-Ecommerce</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-600 hover:text-yellow-500">
                Home
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={handleCategoryEnter}
              onMouseLeave={handleCategoryLeave}
            >
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                Categories
              </a>
              {/* Categories Dropdown */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300 transform ${
                  isCategoryOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <Link
                  to="/men"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Men&apos;s Wear
                </Link>
                <Link
                  to="/women"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Women&apos;s Wear
                </Link>
                <Link
                  to="/kids"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Kids Collection
                </Link>
              </div>
            </li>
            <li>
              <a href="/deals" className="text-gray-600 hover:text-yellow-500">
                Deals
              </a>
            </li>
          </ul>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-6 ml-8">
          {/* User Account */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-600 hover:text-yellow-500">
              <FaUser className="text-xl" />
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300 transform ${
                isDropdownOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                My Profile
              </a>
              <a
                href="/orders"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Orders
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </div>

          {/* Cart */}
          <div className="relative">
            <button className="text-gray-600 hover:text-yellow-500">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
