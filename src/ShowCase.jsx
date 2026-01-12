import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.avif'

const ShowCase = () => {
  const cars = [
          {
      id: 1,
      name: "Porsche 928",
      image: "https://framerusercontent.com/images/ELzJqfByeet8ISyMTJkZOjyhE.png?scale-down-to=512"
    },
    {
      id: 2,
      name: "Ford Mustang",
      image: "https://framerusercontent.com/images/HSIb5LAd1OejaeWfV0ZaFGym9FI.png?scale-down-to=512"
    },
    {
      id: 3,
      name: "Mercedes Benz Gazelle 1929",
      image: "https://framerusercontent.com/images/gui5H6YlvpebHcr6ATQlmsqMRY.png?scale-down-to=512"
    },
    {
      id: 4,
      name: "Chevrolet Impala 1969",
      image: "https://framerusercontent.com/images/XWHXqJvX6Zl5Dak1O1FyRVyQ.png?scale-down-to=512"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EEE7E1]">
      {/* Header with Logo */}
      <header className="py-12">
        <div className="text-center">
          <h1 className="text-4xl font-serif tracking-widest text-black">
            VINTOR
          </h1>
          <p className="text-sm tracking-widest text-black mt-1">
            CLASSICS
          </p>
          
        </div>
      </header>

      {/* Title Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center mb-12 relative">
          <h2 className="text-5xl font-serif text-black fot">Our Collection</h2>
          <button className="text-black hover:opacity-70 transition-opacity absolute right-6">
           <Link to={'/'}> <X className="w-8 h-8" /></Link>
          </button>
        </div>

        {/* Cars Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
          {cars.map((car) => (
            <div key={car.id} className="text-center">
              {/* Car Image */}
              <div className="mb-6 flex items-center justify-center h-40">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="max-h-full w-auto object-contain max-w-xs"
                />
              </div>
              
              {/* Car Name */}
              <h3 className="text-xl font-serif text-black">
                {car.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;