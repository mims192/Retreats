import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card'; 

function BookRetreat() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setData({
        id: data.id,
        title: data.title,
        description: data.description,
        imageurl: data.image,
        location: data.location,
        price: data.price,
        duration: data.duration
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {data ? (
        <Card
          id={data.id}
          title={data.title}
          description={data.description}
          imgurl={data.imageurl}
          location={data.location}
          price={data.price}
          duration={data.duration}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookRetreat;

