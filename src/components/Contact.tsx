import { CategoryTitle } from './CategoryTitle';
import contactImage from '../assets/images/contact.jpg';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

export const Contact = () => {
  return (
    <>
      <CategoryTitle categoryTitle="CONTACT" />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:flex-1 mb-4">
          <img src={contactImage} alt="WorksImage" />
        </div>
        <div className="mx-8 md:flex-1">
          <p>お問い合わせはTwitterまたはInstagramのDMからお願いいたします。</p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-8 mt-10">
        <FaTwitter size={40} />
        <FaInstagram size={40} />
      </div>
    </>
  );
};
