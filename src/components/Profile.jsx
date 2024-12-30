import { useState } from 'react';
import { FaUser, FaShoppingBag, FaMapMarkerAlt, FaCreditCard, FaHeart, FaEdit } from 'react-icons/fa';

function Profile() {
  const [activeTab, setActiveTab] = useState('personal');

  const user = {
    name: 'Aditya Rawat',
    email: 'adityarawatnew2487@gmail.com',
    phone: '+91 9244524565',
    joinedDate: 'January 2024',
    orders: [
      { id: '#1234', date: '2024-01-15', status: 'Delivered', amount: 99.99 },
      { id: '#1235', date: '2024-01-10', status: 'In Transit', amount: 149.99 },
    ],
    addresses: [
      {
        id: 1,
        type: 'Home',
        address: '19 Vill. Hardiha Pawai, Churhat 486771, Madhya Pradesh',
        default: true
      }
    ],
    paymentMethods: [
      {
        id: 1,
        type: 'Credit Card',
        last4: '4242',
        expiry: '12/25'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="w-10 h-10 text-gray-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">Member since {user.joinedDate}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('personal')}
          className={`py-2 px-4 ${
            activeTab === 'personal'
              ? 'border-b-2 border-yellow-400 text-yellow-600'
              : 'text-gray-600'
          }`}
        >
          <FaUser className="inline mr-2" /> Personal Info
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`py-2 px-4 ${
            activeTab === 'orders'
              ? 'border-b-2 border-yellow-400 text-yellow-600'
              : 'text-gray-600'
          }`}
        >
          <FaShoppingBag className="inline mr-2" /> Orders
        </button>
        <button
          onClick={() => setActiveTab('addresses')}
          className={`py-2 px-4 ${
            activeTab === 'addresses'
              ? 'border-b-2 border-yellow-400 text-yellow-600'
              : 'text-gray-600'
          }`}
        >
          <FaMapMarkerAlt className="inline mr-2" /> Addresses
        </button>
        <button
          onClick={() => setActiveTab('payment')}
          className={`py-2 px-4 ${
            activeTab === 'payment'
              ? 'border-b-2 border-yellow-400 text-yellow-600'
              : 'text-gray-600'
          }`}
        >
          <FaCreditCard className="inline mr-2" /> Payment Methods
        </button>
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'personal' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <button className="text-yellow-600 hover:text-yellow-700">
                <FaEdit className="inline mr-1" /> Edit
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600">Email</label>
                <p className="text-gray-800">{user.email}</p>
              </div>
              <div>
                <label className="block text-gray-600">Phone</label>
                <p className="text-gray-800">{user.phone}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <div className="space-y-4">
              {user.orders.map(order => (
                <div key={order.id} className="border rounded p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Order {order.id}</p>
                      <p className="text-gray-600">{order.date}</p>
                    </div>
                    <div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {order.status}
                      </span>
                      <p className="text-right mt-2">${order.amount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'addresses' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Saved Addresses</h2>
              <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
                Add New Address
              </button>
            </div>
            {user.addresses.map(address => (
              <div key={address.id} className="border rounded p-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{address.type}</p>
                    <p className="text-gray-600">{address.address}</p>
                    {address.default && (
                      <span className="text-green-600 text-sm">Default Address</span>
                    )}
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'payment' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Payment Methods</h2>
              <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
                Add New Card
              </button>
            </div>
            {user.paymentMethods.map(method => (
              <div key={method.id} className="border rounded p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{method.type}</p>
                    <p className="text-gray-600">**** **** **** {method.last4}</p>
                    <p className="text-gray-600">Expires: {method.expiry}</p>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;