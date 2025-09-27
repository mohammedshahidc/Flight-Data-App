import React from 'react';
import { Plane } from 'lucide-react';

const FlightCard = ({ flight, onSelect }) => {
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Airline Logo */}
          <div className="w-10 h-8 sm:w-12 sm:h-10 md:w-16 md:h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded flex items-center justify-center flex-shrink-0">
            <img 
              src={flight.logo} 
              alt={flight?.airline }
              className="w-full h-full object-contain rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full items-center justify-center text-white font-bold text-xs">
              {flight?.airline ? flight.airline.substring(0, 6).toUpperCase() : "ETIHAD"}
            </div>
          </div>
          
          {/* Flight Info */}
          <div className="flex flex-col min-w-0 flex-1">
            <div className="text-sm sm:text-base text-gray-900 font-medium truncate">
              {flight?.airline || "Etihad Airways"}
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              {flight?.flightNumber || `FL${flight?.id || '562'}`}
            </div>
            <div className="text-xs sm:text-sm text-gray-500">Economy</div>
          </div>
        </div>

        {/* Center: Flight Route - Mobile Layout */}
        <div className="flex items-center justify-between sm:justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-1 lg:mx-8 order-last lg:order-none">
          {/* Departure */}
          <div className="text-center flex-shrink-0">
            <div className="font-bold text-base sm:text-lg md:text-xl text-gray-900">
              {flight?.departureTime || "05:45"}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 font-medium truncate max-w-[60px] sm:max-w-none">
              {flight.from}
            </div>
          </div>

          {/* Route Visualization */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] flex-1">
            {/* Stops indicator */}
            <div className="flex items-center gap-1 sm:gap-2 text-xs text-blue-600 font-medium">
              {flight?.stops === 0 ? (
                <span>Direct</span>
              ) : (
                <>
                  <span className="whitespace-nowrap">1 Stop</span>
                  <span className="hidden sm:inline">CAI</span>
                </>
              )}
            </div>
            
            {/* Flight path */}
            <div className="relative w-16 sm:w-20 md:w-24 flex items-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-gray-200 via-blue-500 to-gray-200"></div>
              <div className="absolute left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
              <div className="absolute right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                <Plane size={12} className="text-blue-500 transform rotate-90 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </div>
            </div>
            
            {/* Flight duration */}
            <div className="text-xs text-gray-500 whitespace-nowrap">
              <span className="hidden sm:inline">Total Time: </span>
              {flight?.duration || "6 H 0M"}
            </div>
          </div>

          {/* Arrival */}
          <div className="text-center flex-shrink-0">
            <div className="font-bold text-base sm:text-lg md:text-xl text-gray-900">
              {flight?.arrival || "09:20"}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 font-medium truncate max-w-[60px] sm:max-w-none">
              {flight.to}
            </div>
          </div>
        </div>

        {/* Right: Price and Select Button */}
        <div className="flex flex-row justify-between items-center lg:flex-col lg:items-end lg:space-y-2 gap-3">
          <div className="flex flex-col lg:items-end">
            {flight?.oldPrice && (
              <div className="text-sm text-gray-400 line-through">
                KWD {(flight.oldPrice / 1000).toFixed(3)}
              </div>
            )}
            <div className="font-bold text-lg sm:text-xl text-gray-900">
              KWD {flight?.price ? flight.price : "80000"}
            </div>
            <div className="text-xs sm:text-sm text-purple-600 font-medium">
              {flight?.refundable ? 'Refundable' : 'Non-refundable'}
            </div>
          </div>
          <button 
            onClick={() => onSelect && onSelect(flight?.id)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 md:px-6 py-2 rounded-full font-semibold text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            SELECT +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;