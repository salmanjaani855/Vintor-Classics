import React from "react";
import { X } from "lucide-react";
import maps from './assets/maps.png'



export default function VintorDetail({ setOpenVintor }) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "971501234567";
    const message = encodeURIComponent(
      "Hello, I would like to know more about Vintor Classics"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCallBack = () => {
    alert("Call back request submitted!");
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      {/* Header */}
      <div className="relative bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
         
          <div className="text-center flex-1">
            <h1 className="text-3xl tracking-widest text-gray-800 font-light">
              VINTOR
            </h1>
            <p className="text-xs tracking-widest text-gray-600 mt-1">
              CLASSICS
            </p>
          </div>

          <button
            onClick={() => setOpenVintor(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
     

      {/* Map Section */}
      <div className="relative h-[500px] bg-gray-200">
    <iframe className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.7348798801772!2d16.35163787672688!3d48.211722345995994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07956d1df595%3A0x6463d8612555dd77!2sWickenburggasse%201%2C%201080%20Wien!5e0!3m2!1sen!2sat!4v1750836942491!5m2!1sen!2sat"
       allowfullscreen="" aria-hidden="false">
    </iframe>
         
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <h2 className="text-6xl tracking-widest text-red-900 font-light">
              VINTOR
            </h2>
            <p className="text-sm tracking-widest text-red-900 mt-2">
              CLASSICS
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-4 py-12">
       
        <h1>great work</h1>
        <h2 className="text-2xl tracking-widest text-gray-800 font-light mb-2">
          VINTOR CLASSICS
        </h2>
        <p className="text-gray-600 text-sm tracking-wide mb-8">
          Dubai, United Arab Emirates
        </p>

        <div className="space-y-4 max-w-5xl pl-30">
          <button
            onClick={handleCallBack}
            className="w-full py-4 cursor-pointer bg-white border-2 border-gray-300 text-gray-700 tracking-widest text-sm hover:bg-gray-50 transition-colors"
          >
            REQUEST CALL BACK
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="w-full justify-center items-center cursor-pointer py-4 bg-red-900 text-white tracking-widest text-sm hover:bg-red-800 transition-colors"
          >
            REACH US ON WHATSAPP
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-sm text-gray-600">
          <div>
            <h3 className="text-lg tracking-wide text-gray-800 mb-3 font-light">
              ABOUT
            </h3>
            <p>
              Vintor Classics is a premier destination for luxury classic
              automobiles in Dubai.
            </p>
          </div>

          <div>
            <h3 className="text-lg tracking-wide text-gray-800 mb-3 font-light">
              CONTACT
            </h3>
            <p>
              Location: Dubai, United Arab Emirates
              <br />
              Get in touch via WhatsApp or request a call back.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
