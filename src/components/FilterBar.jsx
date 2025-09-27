import React, { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';

const FilterBar = ({ filters, onFilterChange, onClearFilters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <>
      <div className="hidden lg:flex bg-gradient-to-b from-green-400 to-teal-500 w-16 h-screen fixed left-0 top-0 flex-col items-center justify-center shadow-lg z-30">
        
        {/* Filter Icon */}
        <div className="transform -rotate-90 flex items-center space-x-2">
          <div className="bg-white bg-opacity-20 rounded-full p-2">
            <Filter size={20} className="text-black" />
          </div>
          <span className="text-white font-semibold text-sm tracking-widest">FILTER</span>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <div className="absolute bottom-20 z-40">
            <button
              onClick={onClearFilters}
              className="bg-white bg-opacity-20 rounded-full p-1.5 hover:bg-opacity-30 transition-all"
            >
              <X size={14} className="text-black" />
            </button>
          </div>
        )}

        {/* Filter Form Overlay */}
        <div className="absolute left-16 top-0 bg-white shadow-xl rounded-r-lg p-4 w-80 h-full transform -translate-x-full hover:translate-x-0 hover:opacity-100 opacity-0 transition-all duration-300 z-20">
          <div className="h-full overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Filter size={18} className="text-green-500" /> Filter Options
            </h3>

            {/* Price */}
            <div className="space-y-2 mb-4">
              <h4 className="font-medium text-gray-700 text-sm uppercase">Price Range (KWD)</h4>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={onFilterChange}
                  className="px-2 py-1.5 border rounded w-full text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={onFilterChange}
                  className="px-2 py-1.5 border rounded w-full text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-2 mb-4">
              <h4 className="font-medium text-gray-700 text-sm uppercase">Locations</h4>
              <input
                type="text"
                name="fromLocation"
                placeholder="From"
                value={filters.fromLocation}
                onChange={onFilterChange}
                className="w-full px-2 py-1.5 border rounded text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <input
                type="text"
                name="toLocation"
                placeholder="To"
                value={filters.toLocation}
                onChange={onFilterChange}
                className="w-full px-2 py-1.5 border rounded text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet - Collapsible Filter Section */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-3 sm:px-4 py-3">
          {/* Filter Toggle Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-between w-full p-3 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Filter size={18} />
              <span className="font-medium">Filters</span>
              {hasActiveFilters && (
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                  Active
                </span>
              )}
            </div>
            <ChevronDown 
              size={18} 
              className={`transform transition-transform duration-200 ${
                isFilterOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="mt-3 p-4 bg-gray-50 rounded-lg border">
              <div className="space-y-4">
                {/* Price Range */}
                <div>
                  <h4 className="font-medium text-gray-700 text-sm mb-2">Price Range (KWD)</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      name="minPrice"
                      placeholder="Min Price"
                      value={filters.minPrice}
                      onChange={onFilterChange}
                      className="px-3 py-2 border border-gray-300 rounded-lg w-full text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      placeholder="Max Price"
                      value={filters.maxPrice}
                      onChange={onFilterChange}
                      className="px-3 py-2 border border-gray-300 rounded-lg w-full text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <h4 className="font-medium text-gray-700 text-sm mb-2">Locations</h4>
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="fromLocation"
                      placeholder="From Location"
                      value={filters.fromLocation}
                      onChange={onFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="toLocation"
                      placeholder="To Location"
                      value={filters.toLocation}
                      onChange={onFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Clear Filters Button */}
                {hasActiveFilters && (
                  <div className="pt-2">
                    <button
                      onClick={onClearFilters}
                      className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterBar;