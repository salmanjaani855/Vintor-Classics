
import React, { useState } from 'react';
import { Car } from 'lucide-react'
import { Link } from 'react-router-dom';

const ShowCase = () => {
    const [hoveredCar, setHoveredCar] = useState(null);

  const cars = [
    {
      id: 1,
      name: "Ferrari F8 Tributo",
      year: "2023",
      price: "$280,000",
      hp: "710 HP",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    },
    {
      id: 2,
      name: "Lamborghini Huracán",
      year: "2023",
      price: "$260,000",
      hp: "630 HP",
      image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80"
    },
    {
      id: 3,
      name: "Tesla Cybertruck",
      year: "2024",
      price: "$80,000",
      hp: "845 HP",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80"
    },
    {
      id: 4,
      name: "Ford Mustang GT",
      year: "2023",
      price: "$45,000",
      hp: "450 HP",
      image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=600&q=80"
    },
    {
      id: 5,
      name: "Porsche 911 Turbo S",
      year: "2023",
      price: "$210,000",
      hp: "640 HP",
      image: "https://images.unsplash.com/photo-1721944715075-8df85f3be497?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcmNoZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 6,
      name: "McLaren 720S",
      year: "2023",
      price: "$300,000",
      hp: "710 HP",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
    },
    {
      id: 7,
      name: "Chevrolet Corvette Z06",
      year: "2023",
      price: "$110,000",
      hp: "670 HP",
      image: "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?w=800&q=80"
    },
    {
      id: 8,
      name: "Aston Martin DB11",
      year: "2023",
      price: "$215,000",
      hp: "630 HP",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80"
    },
    {
      id: 9,
      name: "BMW M8 Competition",
      year: "2023",
      price: "$140,000",
      hp: "617 HP",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80"
    },
    {
      id: 10,
      name: "Mercedes-AMG GT",
      year: "2023",
      price: "$120,000",
      hp: "523 HP",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
    },
    {
      id: 11,
      name: "Dodge Challenger SRT",
      year: "2023",
      price: "$75,000",
      hp: "797 HP",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    },
    {
      id: 12,
      name: "Audi R8 V10",
      year: "2023",
      price: "$160,000",
      hp: "602 HP",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80"
    },
    {
      id: 13,
      name: "Jaguar F-Type R",
      year: "2023",
      price: "$105,000",
      hp: "575 HP",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80"
    },
    {
      id: 14,
      name: "Nissan GT-R Nismo",
      year: "2023",
      price: "$215,000",
      hp: "600 HP",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80"
    },
    {
      id: 15,
      name: "Bentley Continental GT",
      year: "2023",
      price: "$240,000",
      hp: "626 HP",
      image: "https://images.unsplash.com/photo-1610908374865-dae3c6392a2f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVudGxleXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 16,
      name: "Lexus LC 500",
      year: "2023",
      price: "$95,000",
      hp: "471 HP",
      image: "https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?w=800&q=80"
    },
    {
      id: 17,
      name: "Maserati MC20",
      year: "2023",
      price: "$215,000",
      hp: "621 HP",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80"
    },
    {
      id: 18,
      name: "Acura NSX Type S",
      year: "2023",
      price: "$170,000",
      hp: "600 HP",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    },
    {
      id: 19,
      name: "Alfa Romeo Giulia",
      year: "2023",
      price: "$80,000",
      hp: "505 HP",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80"
    },
    {
      id: 20,
      name: "Cadillac CT5-V",
      year: "2023",
      price: "$85,000",
      hp: "668 HP",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black">
      {/* Header */}
      <header className="bg-black/60 backdrop-blur-md border-b border-red-800/50 sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-4">
            <Car className="w-14 h-14 text-red-500" strokeWidth={2.5} />
            <Link to={'/'}>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent tracking-wider">
              VINTOR CLASSICS
            </h1>
            </Link>
          </div>
          <p className="text-center text-red-300/90 mt-3 text-xl tracking-widest font-light">
            PREMIUM LUXURY COLLECTION
          </p>
        </div>
      </header>

      {/* Cars Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCar(car.id)}
              onMouseLeave={() => setHoveredCar(null)}
            >
              <div className={`
                bg-gradient-to-br from-black/80 to-red-950/60
                rounded-2xl overflow-hidden
                transform transition-all duration-500
                ${hoveredCar === car.id ? 'scale-105 shadow-2xl shadow-red-500/50' : 'scale-100'}
                border-2 border-red-800/40
                hover:border-red-500/80
              `}>
                {/* Car Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className={`
                      w-full h-full object-cover
                      transition-all duration-500
                      ${hoveredCar === car.id ? 'scale-110 brightness-110' : 'scale-100 brightness-90'}
                    `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Car Info */}
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {car.name}
                  </h3>
                  
                  <div className="text-red-400 font-bold text-xl mb-3">
                    {car.price}
                  </div>

                  {/* Details on Hover */}
                  <div className={`
                    transition-all duration-500 overflow-hidden
                    ${hoveredCar === car.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="pt-3 border-t border-red-800/50 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-red-300/70 text-sm font-medium">Year</span>
                        <span className="text-white font-semibold">{car.year}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-red-300/70 text-sm font-medium">Power</span>
                        <span className="text-white font-semibold">{car.hp}</span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 mt-2">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-md border-t border-red-800/50 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-300/70 text-lg">
            © 2024 Vintor Classics - Where Luxury Meets Performance
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ShowCase
