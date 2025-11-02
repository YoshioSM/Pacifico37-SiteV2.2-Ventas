import { useEffect  } from "react";
import ImageGallery from "react-image-gallery";
import { fotos } from "../../assets/Fotos";
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: fotos.Pool1,
    thumbnail: fotos.Pool1,
  },
  {
    original: fotos.Gym,
    thumbnail: fotos.Gym,
  },
  {
    original: fotos.Garden,
    thumbnail: fotos.Garden,
  },
  {
    original: fotos.pool7,
    thumbnail: fotos.pool7,
  },
  {
    original: fotos.tenis,
    thumbnail: fotos.tenis,
  },
  {
    original: fotos.Gymv2,
    thumbnail: fotos.Gymv2,
  },
  {
    original: fotos.Pool4,
    thumbnail: fotos.Pool4,
  },
];

export default function Gallery() {

  useEffect(() => {
    isMovile();
  }, []);

  const isMovile = () => {
    if (window.innerWidth <= 768) {
      console.log("es movil");
      return true;
    } else {
      console.log("no es movil");
      return false;
    }

  }


  return (
   
      <ImageGallery items={images} />

  );
}