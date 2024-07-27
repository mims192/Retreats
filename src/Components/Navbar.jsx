import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="navbar bg-black-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Wellness Retreats</Link>
      </div>
      
        <div className="form-control mr-4">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={handleSearch}
          />
        </div>
        
        <button className="btn bg-blue-400">Book Now</button>
      </div>
    
  );
}

export default Navbar;
