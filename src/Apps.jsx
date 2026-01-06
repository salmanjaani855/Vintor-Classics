import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, User, Play, X } from 'lucide-react';
import VintorDetail from "./VintorDetail";
import maps from './assets/date.avif'
import logo from './assets/logo.avif'
import ShowCase from './ShowCase';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';



// Car Data
const carsData = [
  {
    id: 1,
    brand: 'FORD',
    model: 'MUSTANG',
    year: '1967',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mainImage: 'https://framerusercontent.com/images/gaoj4NspYFqVNU25rG52Sk6QFw.png?scale-down-to=1024',
    images: [
      'https://framerusercontent.com/images/MmGlLEEwxDn4xtllX1Dg6zw.png?scale-down-to=512',
      'https://framerusercontent.com/images/KGqw7ExjRDFTLZHTLKy0Yc8JTY.png',
      'https://framerusercontent.com/images/GXApXposDafO6CmA1eavWIYrnc.png'
    ],
    description: 'The 1967 Ford Mustang represents the pinnacle of American muscle car design. This iconic pony car features a powerful V8 engine, sleek fastback styling, and classic chrome accents that defined an era.',
    specs: {
      engine: '289 V8',
      transmission: '4-Speed Manual',
      horsepower: '271 HP',
      topSpeed: '115 mph'
    }
  },
  {
    id: 2,
    brand: 'CHEVROLET',
    model: 'IMPALA',
    year: '1969',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mainImage: 'https://framerusercontent.com/images/q1x7GxN8jkVj191wKxLPEGS7qI.png?scale-down-to=1024',
    images: [
      'https://framerusercontent.com/images/HSIb5LAd1OejaeWfV0ZaFGym9FI.png?scale-down-to=512',
      'https://framerusercontent.com/images/ELzJqfByeet8ISyMTJkZOjyhE.png?scale-down-to=512',
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=600&q=80'
    ],
    description: 'The 1969 Chevrolet Impala is a legendary muscle car that combines raw power with stunning design. Built to compete with the Mustang, this beast features aggressive styling and exceptional performance.',
    specs: {
      engine: '396 V8',
      transmission: '4-Speed Manual',
      horsepower: '325 HP',
      topSpeed: '125 mph'
    }
  },
  {
    id: 3,
    brand: 'DODGE',
    model: 'CHARGER',
    year: '1970',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mainImage: 'https://framerusercontent.com/images/HSIb5LAd1OejaeWfV0ZaFGym9FI.png?scale-down-to=512',
    images: [
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=600&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80'
    ],
    description: 'The 1970 Dodge Charger is one of the most recognizable muscle cars ever made. With its distinctive styling, powerful HEMI engine options, and aggressive stance, it remains a collector\'s dream.',
    specs: {
      engine: '440 V8',
      transmission: '3-Speed Automatic',
      horsepower: '375 HP',
      topSpeed: '130 mph'
    }
  },
  {
    id: 4,
    brand: 'Tesla',
    model: 'Model-x',
    year: '1970',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mainImage: 'https://framerusercontent.com/images/nblBMSrLvOqFpYCna9ZpDepPeo.png?scale-down-to=512',
    images: [
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=600&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80'
    ],
    description: 'The 1970 Dodge Charger is one of the most recognizable muscle cars ever made. With its distinctive styling, powerful HEMI engine options, and aggressive stance, it remains a collector\'s dream.',
    specs: {
      engine: '440 V8',
      transmission: '3-Speed Automatic',
      horsepower: '375 HP',
      topSpeed: '130 mph'
    }
  },
  {
    id: 5,
    brand: 'TOYOTA',
    model: 'Model-G',
    year: '1970',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mainImage: 'https://framerusercontent.com/images/ycBzbZMhROSL06FX3eLvnbotatc.png?scale-down-to=512',
    images: [
      'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=600&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80'
    ],
    description: 'The 1970 Dodge Charger is one of the most recognizable muscle cars ever made. With its distinctive styling, powerful HEMI engine options, and aggressive stance, it remains a collector\'s dream.',
    specs: {
      engine: '440 V8',
      transmission: '3-Speed Automatic',
      horsepower: '375 HP',
      topSpeed: '130 mph'
    }
  }
];

// Navigation Component
const Navbar = () => {
  const [openForm, setOpenForm] = useState(false);
    const [openVintor, setOpenVintor] = useState(false);
  return (
    <nav className="fixed top-0  left-0 right-0 z-50 flex items-center justify-between p-6">
<div className="items-center gap-2">
  <img
    src={logo}   // yahan apna logo path do
    alt="Vintor Classics Logo"
    className="h-8 w-auto opacity-90"
  />
</div>



 {/* Icons */}
      <div className="flex gap-4">
        <button
          onClick={() => setOpenForm(true)}
          className="p-2 hover:bg-blue-600 cursor-pointer hover:bg-opacity-10 rounded-full transition"
        >
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 256 256"
  className="w-9 h-9"
  fill="#e4d7c2"
>
  <path d="M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,1,0,12.24,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.26-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm196.25,43.07-4.66-2.69a23.6,23.6,0,0,0,0-8.76l4.66-2.69a8,8,0,1,0-8-13.86l-4.67,2.7a23.92,23.92,0,0,0-7.58-4.39V108a8,8,0,0,0-16,0v5.38a23.92,23.92,0,0,0-7.58,4.39l-4.67-2.7a8,8,0,1,0-8,13.86l4.66,2.69a23.6,23.6,0,0,0,0,8.76l-4.66,2.69a8,8,0,0,0,8,13.86l4.67-2.7a23.92,23.92,0,0,0,7.58,4.39V164a8,8,0,0,0,16,0v-5.38a23.92,23.92,0,0,0,7.58-4.39l4.67,2.7a7.92,7.92,0,0,0,4,1.07,8,8,0,0,0,4-14.93ZM216,136a8,8,0,1,1,8,8A8,8,0,0,1,216,136Z" />
</svg>

        </button>
          
      <button
        onClick={() => setOpenVintor(true)}
        className="p-2 hover:bg-blue-600 cursor-pointer text-[#e4d7c2] hover:bg-opacity-10 rounded-full transition"
      >
        <Phone size={24} />
      </button>
      

      {openVintor && (
        <VintorDetail setOpenVintor={setOpenVintor} />
      )}
      </div>

      {/* Popup Form */}
      {openForm && (
<div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
  <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

        {/* Close Button */}
        <button
          onClick={() => setOpenForm(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Login</h1>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

              <div className="relative">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Email address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-placeholder-shown:top-2 transition-all
                  peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Password"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-placeholder-shown:top-2 transition-all
                  peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <button className="bg-cyan-500 text-white rounded-md px-4 py-1">
                  Submit
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Google Button */}
        <div className="w-full flex justify-center">
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
            <svg
              className="h-6 w-6 mr-2"
              viewBox="-0.5 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#FBBC05" d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604A23.9 23.9 0 0 0 .214 24c0 3.736.867 7.26 2.62 10.388l7.905-6.05A14.9 14.9 0 0 1 9.827 24z"/>
              <path fill="#EB4335" d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094l6.836-6.827C35.036 2.773 29.695.533 23.714.533c-9.287 0-17.268 5.311-21.09 13.07l7.909 6.04c1.823-5.532 7.017-9.51 13.18-9.51z"/>
              <path fill="#34A853" d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.51l-7.909 6.038c3.822 7.761 11.803 13.071 21.09 13.071 5.732 0 11.204-2.035 15.311-5.848l-7.507-5.804c-2.118 1.334-4.785 2.053-7.803 2.053z"/>
              <path fill="#4285F4" d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.345 5.468-4.8 7.014l7.507 5.804C43.34 37.614 46.145 31.65 46.145 24z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</div>

      )}
    </nav>
  );
};

// Video Modal Component
const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 hover:bg-white hover:bg-opacity-10 rounded-full transition"
      >
        <X size={32} className="text-white" />
      </button>
      
      <div className="w-full max-w-5xl px-8">
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Car Gallery Component
const CarGallery = ({ cars, currentIndex, onPrevious, onNext, onCarClick, onImageClick, setCurrentIndex, onVideoClick }) => {
  const currentCar = cars[currentIndex];

  return (
<div className="relative min-h-screen text-white overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${maps})`
    }}
  ></div>

  

  <Navbar />

  {/* Previous Button */}
  <button
    onClick={onPrevious}
    className="fixed left-4 mt-50 top-1/2 -translate-y-1/2 z-40 p-4 hover:bg-white hover:text-red-500 hover:bg-opacity-10 rounded-full transition"
  >
    <ChevronLeft size={32} />
  </button>

  {/* Next Button */}
  <button
    onClick={onNext}
    className="fixed right-4 mt-50 top-1/2 -translate-y-1/2 z-40 p-4 hover:bg-white hover:text-red-600 hover:bg-opacity-10 rounded-full transition"
  >
    <ChevronRight size={32} />
  </button>

  {/* Side Text */}
  <Link to={'/showCase'}>
  <div className="fixed top-1/2 -translate-y-1/2 z-30 -rotate-90 text-[#e4d7c2]">
    <button className="text-lg tracking-widest opacity-70 hover:opacity-100 transition flex items-center gap-2">
      Our Collection
    </button>
    <ChevronRight size={20} className="rotate-90 relative -right-12" />
  </div>
  </Link>

  {/* Main Content */}
  <div className="relative z-20 flex items-center justify-center min-h-screen">
    <div className="relative w-full flex items-center">

      {/* Car Image */}
      <div className="relative flex-1 flex justify-center items-center text-[#e4d7c2]">
        <img
          src={currentCar.mainImage}
          alt={`${currentCar.brand} ${currentCar.model}`}
          className="w-[550px] pt-80 pr-20 h-auto drop-shadow-2xl cursor-pointer hover:scale-115 transition-transform duration-500"
          onClick={onImageClick}
        />
      </div>

      {/* Text Section */}
      <div className="data absolute pt-30 right-20 top-1/2 -translate-y-1/2 text-right">
        <div className="text-xl tracking-widest opacity-80 mb-2 text-[#e4d7c2]">
          {currentCar.brand}
        </div>

        <h1 className="text-5xl font-light tracking-wider mb-4 text-[#e4d7c2]">
          {currentCar.model}
        </h1>

        <button
          onClick={onVideoClick}
          className="flex items-center cursor-pointer text-[#e4d7c2] gap-2 ml-auto text-lg tracking-wide hover:underline mb-8"
        >
          <Play size={20} />
          VIDEO
        </button>

        <div className="year text-[100px] text-black opacity-20 select-none pointer-events-none">
          {currentCar.year}
        </div>
      </div>

    </div>
  </div>

  {/* MORE DETAILS Button */}
  <button
    onClick={onCarClick}
    className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 group"
  >
    <div className="text-center cursor-pointer text-[#e4d7c2] font-bold">
      <div className="text-lg tracking-widest mb-2">
        MORE DETAILS
      </div>
      <ChevronRight
        className="mx-auto rotate-90 animate-bounce"
        size={28}
      />
    </div>
  </button>

</div>


  );
};

// Car Details Component
const CarDetails = ({ car, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-light tracking-widest">VINTOR</div>
          <div className="text-xs tracking-wider opacity-70">CLASSICS</div>
        </div>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition">
            <User size={24} />
          </button>
          <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition">
            <Phone size={24} />
          </button>
        </div>
      </nav>

      <button
        onClick={onBack}
        className="fixed top-24 left-6 z-50 px-6 py-2 cursor-pointer text-2xl bg-opacity-20 hover:bg-opacity-30 rounded-full backdrop-blur-sm transition"
      >
        ← Back to Collection
      </button>

      <div className="pt-32 pb-16 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xl tracking-widest opacity-80 mb-2">{car.brand}</div>
          <h1 className="text-7xl font-light tracking-wider mb-4">{car.model}</h1>
          <div className="text-6xl font-light opacity-40">{car.year}</div>
        </div>

        <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-8 mb-8">
          <img
            src={car.mainImage}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-96 object-cover rounded-2xl mb-6"
          />
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {car.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${car.model} angle ${idx + 1}`}
                className="w-full h-48 object-cover rounded-xl hover:scale-105 transition cursor-pointer"
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
            <div>
              <h2 className="text-3xl font-light mb-4 tracking-wide">About This Classic</h2>
              <p className="text-lg leading-relaxed opacity-90">{car.description}</p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4 tracking-wide">Specifications</h2>
              <div className="space-y-4">
                {Object.entries(car.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center border-b border-white border-opacity-20 pb-3">
                    <span className="text-lg capitalize opacity-70">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-xl font-light">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const Apps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? carsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === carsData.length - 1 ? 0 : prev + 1));
  };

  const handleCarClick = () => {
    setSelectedCar(carsData[currentIndex]);
    setShowDetails(true);
  };

  const handleImageClick = () => {
    setSelectedCar(carsData[currentIndex]);
    setShowDetails(true);
  };

  const handleBackToGallery = () => {
    setShowDetails(false);
    setSelectedCar(null);
  };

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      {showDetails && selectedCar ? (
        <CarDetails car={selectedCar} onBack={handleBackToGallery}  />
      ) : (
        <>
          <CarGallery
            cars={carsData}
            currentIndex={currentIndex}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onCarClick={handleCarClick}
            onImageClick={handleImageClick}
            setCurrentIndex={setCurrentIndex}
            onVideoClick={handleVideoClick} 
        
          />
          {showVideo && (
            <VideoModal
              videoUrl={carsData[currentIndex].videoUrl}
              onClose={handleCloseVideo}
            
            />
          )}
        </>
      )}
    </>
  );
};

export default Apps;