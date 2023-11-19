import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:fixed md:w-full md:opacity-90">
      {/* オーバーレイ */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-700 ease-in-out z-20 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* モバイル用ハンバーガーアイコン */}
      <div className="fixed top-3 right-3 z-30 md:hidden">
        <button
          type="button"
          className="p-2 rounded-md text-gray-700 outline-none focus:border-gray-400 focus:border"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
      </div>

      {/* メニュー項目 */}
      <div>
        
      </div>
      <div 
        className={`fixed w-9/12 md:w-full max-w-full top-0 right-0 bottom-0 bg-white transition-transform duration-700 ease-in-out z-30 ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg md:relative md:translate-x-0`} 
      >
        <ul className="flex flex-col md:flex-row mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#top" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>TOP</a>
          </li>
          <li>
            <a href="#profile" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>PROFILE</a>
          </li>
          <li>
            <a href="#works" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>WORKS</a>
          </li>
          <li>
            <a href="#gallery" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>GALLERY</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
