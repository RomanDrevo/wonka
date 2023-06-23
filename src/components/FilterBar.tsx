// FilterForm component
import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        const newFilters = { ...filters, [name]: value };
        onFilterChange(newFilters);
        dispatch(setNewFilters(event.data))
    };

    // {
    //     gender: 'Male'
    // }

    return (
        <form>
            {/* Render the filter inputs dynamically based on the filters */}
            {/* e.g., gender, age, hair type, etc. */}
            <input
                type="text"
                name="gender"
                value={filters.gender || ''}
                onChange={handleFilterChange}
            />
            {/* Add more filter inputs as needed */}
        </form>
    );
};

export default FilterBar;
