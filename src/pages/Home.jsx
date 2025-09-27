import React, { useState, useEffect } from 'react';
import FlightList from '../components/FlightList';
import FlightForm from '../components/FlightForm';
import FilterBar from '../components/FilterBar';
import SortBar from '../components/SortBar';
import flightsMockData from '../datas/flight';
import Navbar from '../components/layout/Navbar';
import { Plus } from 'lucide-react';

const Home = () => {
    const [flights, setFlights] = useState(flightsMockData);
    const [filteredFlights, setFilteredFlights] = useState(flightsMockData);
    const [showForm, setShowForm] = useState(false);
    const [sortBy, setSortBy] = useState('price');
    const [sortOrder, setSortOrder] = useState('asc');
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        fromLocation: '',
        toLocation: ''
    });

    const convertToMinutes = (duration) => {
        if (!duration || typeof duration !== 'string') return 999;
        let hours = 0, minutes = 0;
        const hMatch = duration.match(/(\d+)h/);
        const mMatch = duration.match(/(\d+)m/);
        if (hMatch) hours = parseInt(hMatch[1]);
        if (mMatch) minutes = parseInt(mMatch[1]);
        return hours * 60 + minutes;
    };

    const sortFlights = (flightsToSort, sortField, order) => {
        return [...flightsToSort].sort((a, b) => {
            let aVal = a[sortField];
            let bVal = b[sortField];

            if (sortField === 'price') {
                aVal = parseInt(aVal);
                bVal = parseInt(bVal);
            } else if (sortField === 'totalDuration') {
                aVal = convertToMinutes(aVal);
                bVal = convertToMinutes(bVal);
            } else if (sortField === 'departureTime') {
                const convertTimeToMinutes = (time) => {
                    if (!time || typeof time !== 'string') return 0;
                    const [hours, minutes] = time.split(':').map(Number);
                    return hours * 60 + minutes;
                };
                aVal = convertTimeToMinutes(aVal);
                bVal = convertTimeToMinutes(bVal);
            }

            return order === 'asc' ? aVal - bVal : bVal - aVal;
        });
    };

    const applyFilters = (flightsToFilter) => {
        return flightsToFilter.filter(flight => {
            const matchesPrice = (!filters.minPrice || flight.price >= parseInt(filters.minPrice)) &&
                (!filters.maxPrice || flight.price <= parseInt(filters.maxPrice));

            const matchesFrom = !filters.fromLocation ||
                flight.from.toLowerCase().includes(filters.fromLocation.toLowerCase());

            const matchesTo = !filters.toLocation ||
                flight.to.toLowerCase().includes(filters.toLocation.toLowerCase());

            return matchesPrice && matchesFrom && matchesTo;
        });
    };

    useEffect(() => {
        let result = applyFilters(flights);
        result = sortFlights(result, sortBy, sortOrder);
        setFilteredFlights(result);
    }, [flights, filters, sortBy, sortOrder]);

    const handleAddFlight = (newFlight) => {
        setFlights(prevFlights => [...prevFlights, newFlight]);
        setShowForm(false);
    };

    const handleSortChange = (field) => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
    };

    const handleFilterChange = (e) => {
        setFilters(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleClearFilters = () => {
        setFilters({
            minPrice: '',
            maxPrice: '',
            fromLocation: '',
            toLocation: ''
        });
    };

    const handleSelectFlight = (flightId) => {
        const flight = flights.find(f => f.id === flightId);
        alert(`Flight ${flightId} selected!
${flight.airline}
${flight.from} → ${flight.to}
Price: KWD ${flight.price}`);
    };

    const getCheapest = () => {
        if (!filteredFlights.length) return 0;
        return Math.min(...filteredFlights.map(f => f.price));
    };

    const getFastest = () => {
        if (!filteredFlights.length) return 0;
        const fastest = filteredFlights.reduce((prev, curr) =>
            convertToMinutes(prev.duration) < convertToMinutes(curr.duration) ? prev : curr
        );
        return fastest.price;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <Navbar />
            <SortBar
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSortChange={handleSortChange}
                cheapestPrice={getCheapest()}
                fastestPrice={getFastest()}
                flightCount={filteredFlights.length}
            />
            <button
                onClick={() => setShowForm(true)}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-40"
                title="Add New Flight"
            >
                <Plus size={24} />
            </button>
            <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
            />

            <FlightList
                flights={filteredFlights}
                onSelectFlight={handleSelectFlight}
            />

            <FlightForm
                onAddFlight={handleAddFlight}
                onClose={() => setShowForm(false)}
                isOpen={showForm}
            />
        </div>
    );
};

export default Home;
