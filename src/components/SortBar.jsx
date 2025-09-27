import React, { useState } from 'react';
import { ChevronDown, Plane, Clock, ThumbsUp } from 'lucide-react';

const SortBar = ({ 
  sortBy, 
  sortOrder, 
  onSortChange, 
  cheapestPrice, 
  fastestPrice,
  bestValuePrice = 135000
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('cheapest');

  const sortOptions = [
    { key: 'price', label: 'Price' },
    { key: 'duration', label: 'Duration' },
    { key: 'departure', label: 'Departure' }
  ];

  const handleSortSelect = (key) => {
    onSortChange(key);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white p-3 sm:p-4 md:p-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 max-w-6xl mx-auto">
        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-full font-medium text-sm transition-all duration-200 w-full sm:w-auto"
          >
            <span>Sort : Price</span>
            <ChevronDown
              size={16}
              className={`transform transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px] w-full sm:w-auto">
              <div className="py-1">
                {sortOptions.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => handleSortSelect(key)}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors duration-200"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Filter Tabs Container - Mobile Responsive */}
        <div className="flex items-center justify-center bg-gray-200 rounded-full p-1 sm:p-1.5 flex-1 w-full overflow-x-auto">
          {/* Cheapest Tab */}
          <button
            onClick={() => setActiveFilter('cheapest')}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex-1 min-w-0 whitespace-nowrap ${
              activeFilter === 'cheapest'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Plane size={14} className={activeFilter === 'cheapest' ? 'text-white' : ''} />
            <span className="truncate">Cheapest: {cheapestPrice}</span>
          </button>

          {/* Fastest Tab */}
          <button
            onClick={() => setActiveFilter('fastest')}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex-1 min-w-0 whitespace-nowrap ${
              activeFilter === 'fastest'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Plane size={14} />
            <span className="truncate">Fastest: {fastestPrice}</span>
          </button>

          {/* Best Value Tab */}
          <button
            onClick={() => setActiveFilter('bestValue')}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex-1 min-w-0 whitespace-nowrap ${
              activeFilter === 'bestValue'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <ThumbsUp size={14} />
            <span className="truncate">Best Value: {bestValuePrice}</span>
          </button>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
      )}
    </div>
  );
};

export default SortBar;