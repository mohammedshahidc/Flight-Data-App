import React from "react";
import FlightCard from "./FlightCard";

const FlightList = ({ flights, onSelectFlight }) => {
    const formatDate = () => {
      const date = new Date();
      const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      };
      return date.toLocaleDateString('en-US', options);
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-50 px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Departure - {formatDate()}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {flights.length} flight{flights.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <div className="mt-1 sm:mt-0">
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Best Deals Available
                  </span>
                </div>
              </div>
            </div>
  
            {/* Flight List */}
            <div className="divide-y divide-gray-100">
              {flights && flights.length > 0 ? (
                flights.map((flight, index) => (
                  <div key={flight.id} className="p-3 sm:p-4 md:p-6 hover:bg-gray-50 transition-colors duration-150">
                    <FlightCard 
                      flight={flight}
                      onSelect={onSelectFlight}
                    />
                  </div>
                ))
              ) : (
                <div className="text-center py-12 sm:py-16 px-4">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12 sm:h-16 sm:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">No flights found</h3>
                  <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto mb-4 sm:mb-6">
                    We couldn't find any flights matching your search criteria. Try adjusting your filters or search for different dates.
                  </p>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                    Modify Search
                  </button>
                </div>
              )}
            </div>
  
            {/* Footer with additional info */}
            {flights && flights.length > 0 && (
              <div className="bg-gray-50 px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
                  <div className="mb-1 sm:mb-0">
                    <span className="font-medium">Price includes:</span> Taxes and fees
                  </div>
                  <div className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    View all fare conditions →
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default FlightList;