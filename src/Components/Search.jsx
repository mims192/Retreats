import React, { useEffect, useState, useMemo } from 'react';
import Card from './Card';
import axios from 'axios';

function Search() {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats')
            .then(res => {
                setData(res.data);
                setRecords([]); 
            })
            .catch(err => console.log(err));
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setTitle(searchTerm);
    };

    const filteredRecords = useMemo(() => {
        if (!title) return [];
        return data.filter(f => f.title.toLowerCase().includes(title));
    }, [data, title]);

    return (
        <div>
            <input 
                type="text" 
                value={title}
                placeholder="Search" 
                onChange={handleSearch} 
                className="input input-bordered w-24 md:w-auto" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filteredRecords.length > 0 ? (
                    filteredRecords.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            imgurl={item.image} 
                            location={item.location}
                            price={item.price}
                            duration={item.duration}
                        />
                    ))
                ) : (
                    title && <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default Search;

