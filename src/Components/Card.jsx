import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, description, imgurl, location, price, duration }) {
  const navigate = useNavigate();

  const handleClick = () => {

    navigate(`/book/${id}`);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl ml-10 mr-10 mt-10 h-400">
      <figure>
        <img
          src={imgurl ? imgurl : 'https://static.toiimg.com/photo/109885795.cms'}
          alt="..."
          className="w-full h-60 object-cover py-2 px-2"
        />
      </figure>
      <div className="card-body">
        
        <h1 className="font-semibold text-xl">{title}</h1>
        <p><span className="font-semibold">Description:</span> {description}</p>
        <p className="mt-0"><span className="font-semibold">Location:</span> {location}</p>
        <p><span className="font-semibold">Price:</span> {price}</p>
        <p><span className="font-semibold">Duration:</span> {duration}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-green-300" onClick={handleClick}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
