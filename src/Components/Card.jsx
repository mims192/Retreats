import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, title, description, imgurl, location, price, duration }) {
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
        <p><span className="font-semibold">Location:</span> {location}</p>
        <h2><span className="font-semibold">Price:</span> {price}</h2>
        <p><span className="font-semibold">Duration:</span> {duration}</p>
        <div className="card-actions justify-end">
          <Link to={`/book/${id}`}>
            <button className="btn bg-green-300">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

