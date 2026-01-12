import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Details   = () => {
  const [isOpen, setIsOpen] = useState(true);

  const cars = [
    {
      id: 1,
      image: "https://framerusercontent.com/images/nblBMSrLvOqFpYCna9ZpDepPeo.png?scale-down-to=512",
      name: "Chevrolet 1967-69",
      subtitle: "CAMARO BUILD"
    },
    {
      id: 2,
      image: "https://framerusercontent.com/images/ycBzbZMhROSL06FX3eLvnbotatc.png?scale-down-to=512",
      name: "Ford Mustang 1967",
      subtitle: "GT 500 E BUILD"
    },
    {
      id: 3,
      image: "https://framerusercontent.com/images/SUQaWEn4hR8EjRw2t8v1Q64oL4.png?scale-down-to=512",
      name: "Ford Mustang 1967",
      subtitle: "COUPE TO FASTBACK BUILD"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#e8e4dc] z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-center pt-12 mb-16">
        <div className="text-center">
          <div className="text-4xl font-light tracking-[0.3em] text-gray-900">VINTOR</div>
          <div className="text-xs tracking-[0.3em] text-gray-600 mt-1">CLASSICS</div>
        </div>
      </div>

      {/* Close Button */}
      <Link to={'/'} >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-12 cursor-pointer right-12 p-2 hover:bg-gray-300 hover:bg-opacity-30 rounded-full transition"
      >
        <X size={32} className="text-gray-900" strokeWidth={1.5} />
      </button>
      </Link>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-8 pb-20">
        {/* Title */}
        <h1 className="text-4xl font-serif text-center mb-16 text-gray-900 tracking-wide">
          BESPOKE BUILD
        </h1>

        {/* Cars List */}
        <div className="space-y-12">
          {cars.map((car) => (
            <div key={car.id} className="text-center">
              <div className="mb-6 flex justify-center">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-29 w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-1">
                {car.name}
              </h3>
              <p className="text-sm tracking-wider text-gray-700">
                {car.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;