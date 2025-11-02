import { useState } from "react";
import { fotos } from "../../assets/Fotos";
import { X } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedImage, setSelectedImage] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Oceano Pacifico 37
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Descubre esta extraordinaria propiedad en Acapulco, ubicada cerca de
            increíbles atractivos, espectaculares albercas y un ambiente de paz
            incomparable.
          </p>
        </div>
        <div className="flex flex-wrap justify-center ">
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Gymv1}
                onClick={() => openModal(fotos.Gymv1)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Floower}
                onClick={() => openModal(fotos.Floower)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Garden}
                onClick={() => openModal(fotos.Garden)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Gym}
                onClick={() => openModal(fotos.Gym)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Gymv2}
                onClick={() => openModal(fotos.Gymv2)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Pool1}
                onClick={() => openModal(fotos.Pool1)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Pool2}
                onClick={() => openModal(fotos.Pool2)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Pool3}
                onClick={() => openModal(fotos.Pool3)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Pool4}
                onClick={() => openModal(fotos.Pool4)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Room2}
                onClick={() => openModal(fotos.Room2)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Pool5}
                onClick={() => openModal(fotos.Pool5)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.Pool7}
                onClick={() => openModal(fotos.Pool7)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.RontBath}
                onClick={() => openModal(fotos.RontBath)}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
            <div className="flex relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                src={fotos.kitchenv1}
                onClick={() => openModal(fotos.kitchenv1)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full p-2 transition-colors duration-200"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      <Analytics />
      <SpeedInsights />
    </section>
  );
}
