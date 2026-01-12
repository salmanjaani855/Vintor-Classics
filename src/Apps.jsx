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
     

      'https://framerusercontent.com/images/gaoj4NspYFqVNU25rG52Sk6QFw.png?scale-down-to=1024',
 'https://framerusercontent.com/images/MmGlLEEwxDn4xtllX1Dg6zw.png?scale-down-to=512',
      'https://framerusercontent.com/images/GXApXposDafO6CmA1eavWIYrnc.png',
      'https://framerusercontent.com/images/KGqw7ExjRDFTLZHTLKy0Yc8JTY.png?scale-down-to=512',
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
         <Link to={'/details'}>
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
 </Link>
          
     
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
    className="fixed left-4 mt-50 top-1/2 -translate-y-1/2 z-40 p-4 cursor-pointer hover:bg-white hover:text-blue-500 hover:bg-opacity-10 rounded-full transition"
  >
    <ChevronLeft size={32} />
  </button>

  {/* Next Button */}
  <button
    onClick={onNext}
    className="fixed right-4 cursor-pointer mt-50 top-1/2 -translate-y-1/2 z-40 p-4 hover:bg-white hover:text-blue-600 hover:bg-opacity-10 rounded-full transition"
  >
    <ChevronRight size={32} />
  </button>

  {/* Side Text */}
  <Link to={'/showCase'}>
<div
      className="
        fixed
        top-1/2
        left-5
        -translate-y-1/2
        -rotate-90
        origin-left
        z-30
        text-[#e4d7c2]
      "
    >
      <button
        className="
          flex
          items-center
          gap-2
          text-lg
          tracking-widest
          cursor-pointer
          opacity-70
          hover:opacity-100
          transition
          fot
        "
      >
        Our Collection
        <ChevronRight size={20} className="rotate-90" />
      </button>
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
          className="w-[550px] pt-90 pr-20 h-auto drop-shadow-2xl cursor-gra hover:scale-115 cursor-grab transition-transform duration-500"
          onClick={onImageClick}
        />
      </div>

      {/* Text Section */}
      <div className="data absolute pt-30 right-10 top-1/2 -translate-y-1/2 text-right">
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
<div className="min-h-screen bg-white overflow-hidden">
  {/* NAVBAR */}
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6">
    
    <div>
      <div className="text-2xl tracking-widest text-black">VINTOR</div>
      <div className="text-xs tracking-wider text-gray-500">CLASSICS</div>
    </div>

    {/* <div className="flex gap-4 text-black">
      <button className="p-2 hover:opacity-60 transition">
        <User size={22} />
      </button>
      <button className="p-2 hover:opacity-60 transition">
        <Phone size={22} />
      </button>
    </div> */}
  </nav>

  {/* BACK BUTTON */}
  <button
    onClick={onBack}
    className="fixed cursor-pointer top-28 left-10 z-40 text-black text-lg hover:opacity-60"
  >
    ← Back to Collection
  </button>

  {/* MAIN CONTENT */}
  <div className="pt-40 max-w-7xl mx-auto px-10">
    {/* MAIN IMAGE */}
    <div className="flex justify-center mb-10">
      <img
        src={car.mainImage}
        alt={car.model}
        className="max-h-[420px] object-contain"
      />
    </div>

    {/* THUMBNAILS */}
    <div className="flex justify-center gap-4 mb-20">
      {car.images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt=""
          className="w-40 h-24 object-cover cursor-pointer hover:scale-105 transition"
        />
      ))}
    </div>

    {/* TEXT SECTION */}
    <div className="max-w-4xl text-[#6b0f0f]">
      <h1 className="text-5xl tracking-wider text-[#6b0f0f] mb-4 fot">
        {car.brand.toUpperCase()} {car.model.toUpperCase()} {car.year}
      </h1>

      <h2 className="text-2xl  tracking-widest text-[#6b0f0f] mb-2">
        DETAILS:
      </h2>

      <p className=" leading-relaxed text-[#6b0f0f]">
        {car.description}
      </p>
    </div>
  </div>

  {/* FOOTER */}
  <footer className="mt-32 px-10 py-6 flex justify-between text-sm border-t">
    <div className="flex gap-6">
      <span>FAQ</span>
      <span>POLICY</span>
      <span>SELL YOUR CAR</span>
      <span>CONTACT</span>
    </div>
    <div>© 2026 Vintor Classics</div>
  </footer>
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
        <CarDetails  car={selectedCar} onBack={handleBackToGallery}  />
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