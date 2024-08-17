import { CategoryTitle } from './CategoryTitle';
import alleyRedImage from '../assets/images/alleyRed.png';
import flowerImage from '../assets/images/flower.jpg';
import collageImage from '../assets/images/firstCollage.jpg';

export const Gallery = () => {
  return (
    <>
      <CategoryTitle categoryTitle="GALLERY" />
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={alleyRedImage}
            alt="Alley Red"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={flowerImage}
            alt="Flower"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={collageImage}
            alt="First Collage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
