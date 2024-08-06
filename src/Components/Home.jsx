import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import WhyRetreat from './WhyRetreat';
import Retreat from './Retreat';
import Footer from './Footer';
import Carousel2 from './Carousel2';
import Card from './Card';
import axios from 'axios';
import Testimonials from './Testimonials';


function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const fetchData = async (pageNumber, type = '', location = '') => {
    try {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${pageNumber}&limit=3`;
      if (type) {
        url += `&filter=${type}`;
      }
      if (location) {
        url += `&location=${location}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setData(data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        imageurl: item.image,
        location: item.location,
        price: item.price,
        duration: item.duration
      })));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(page, typeFilter, locationFilter);
  }, [page, typeFilter, locationFilter]);

  useEffect(() => {
    if (searchTerm) {
      axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats')
        .then(res => {
          const filtered = res.data.filter(f => f.title.toLowerCase().includes(searchTerm.toLowerCase()));
          setFilteredData(filtered);
        })
        .catch(err => console.log(err));
    } else {
      setFilteredData([]);
    }
  }, [searchTerm]);

  const handleTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
    setPage(1); 
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
    setPage(1);
  };

  return (
    <div className="App">
      <Navbar onSearch={setSearchTerm} />
     
      {searchTerm && filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              imgurl={item.image}
              location={item.location}
              price={item.price}
              duration={item.duration}
            />
          ))}
        </div>
      ) : searchTerm ? (
        <p className="text-center">No results found</p>
      ) : (
        <>
          <Carousel2 />
          <h1 className='text-center font-semibold text-4xl mt-5 mb-5'>Embrace the Experience</h1>
          <div className="flex gap-4 justify-center p-4">
        <input
          type="text"
          placeholder="Filter by Type"
          value={typeFilter}
          onChange={handleTypeFilterChange}
          className="input input-bordered input-primary w-full max-w-xs"
          
        />
        <input
          type="text"
          placeholder="Filter by Location"
          value={locationFilter}
          onChange={handleLocationFilterChange}
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {data.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                imgurl={item.imageurl}
                location={item.location}
                price={item.price}
                duration={item.duration}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-4 my-4">
            <button className="btn bg-sky-300" onClick={() => setPage(page > 1 ? page - 1 : 1)}>❮</button>
            <button className="btn bg-green-200" onClick={() => setPage(page + 1)}>❯</button>
          </div>
          <h1 className='text-center font-semibold text-4xl mt-10 mb-10'>Transform Your Life</h1>
          <Retreat />
          <WhyRetreat />
          <Testimonials/>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
