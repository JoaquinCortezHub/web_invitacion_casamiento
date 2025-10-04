"use client";

import { Heart, Cross} from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  bgColor: string;
}

{/*Hay que buscar una manera de darle una inclinacion a estas cards*/}
function EventCard({ title, date, icon, bgColor }: EventCardProps) {
  return (
    <div className="bg-white  shadow-lg py-[170px] px-0 hover:shadow-xl  transition-shadow duration-300 cursor-pointer group">
      
      <h3 className="text-lg font-medium text-center text-gray-800 mb-4">
        {title}
      </h3>
      <p className="text-sm text-gray-600 text-center font-medium">
        {date}
      </p>
    </div>
  );
}

export default function ItinerarioSeccion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F1EA] to-[#EDE7DD]">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-cursiva">
          Itinerario
        </h1>
        <p className="font-cursiva text-gray-700 text-lg max-w-2xl mx-auto">
          Hace click en las estampillas para ver el horario de cada uno de ellos
        </p>
      </div>

      {/* Events Grid */}
      <div className=" container mx-auto px-4 pb-16 ">
        <div className="font-cuerpo color-background-green grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
          <EventCard
            title="Día de civil + fiesta"
            date="20 DE MARZO - VIERNES"
            icon={<Heart className="w-8 h-8 text-white" />}
            bgColor="bg-[#1E3A5F]"
          />
          <EventCard
            title="Ceremonia religiosa + lunch"
            date="21 DE MARZO - SÁBADO"
            icon={<Cross className="w-8 h-8 text-white" />}
            bgColor="bg-[#D4AF37]"
          />
        </div>
      </div>

      {/* Bottom Section with Images and Quote */}
      <div className=" py-16">
        <div className="container mx-auto px-4">
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative group overflow-hidden ">
                <div className="bg-gradient-to-br from-orange-300 to-orange-500 h-80 flex items-center justify-center relative">
                  {/* Placeholder for couple image */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white text-center">
                    <p className="text-sm opacity-75">Imagen {index}</p>
                    <p className="text-xs opacity-50">Pareja al atardecer</p>
                  </div>
                  {/* Overlay icon */}
                  <div className="absolute top-4 right-4 z-20">
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Romantic Quote */}
        </div>
          <div className="bg-celeste-500 w-100% text-center">
            <p 
              className="font-cursiva  text-white text-1xl md:text-3xl leading-relaxed max-w-2xl mx-auto p-10">
              “Sos mi lugar para volver y eres mi patria en movimiento “
            </p>
          </div>
      </div>
    </div>
  );
}