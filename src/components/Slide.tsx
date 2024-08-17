import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import memoryWeaknessImage from '../assets/images/memoryWeakness.png';
import nuxtSlotImage from '../assets/images/nuxtSlot.png';
import forKidsImage from '../assets/images/forKids.png';

interface SlideList {
  title: string;
  githubUrl: string;
  technologyUsed: string;
  img: string;
  appUrl: string;
  alt: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // 自動再生を有効にする
  autoplaySpeed: 3000, // 3秒ごとにスライドする
};

const slideList: SlideList[] = [
  {
    title: '神経衰弱アプリ',
    githubUrl: 'https://github.com/kazutakanakamura711/memoryWeakness',
    technologyUsed: 'Nuxt,Vue,Illustrator,GarageBand',
    img: memoryWeaknessImage,
    appUrl: 'https://memory-weakness.netlify.app/',
    alt: 'memoryWeaknessImage',
  },
  {
    title: 'スロットアプリ',
    githubUrl: 'https://github.com/kazutakanakamura711/slotMaschine',
    technologyUsed: 'Nuxt,Vue,Vuetify,Illustrator,GarageBand',
    img: nuxtSlotImage,
    appUrl: 'https://slot-maschine-nuxt.netlify.app/',
    alt: 'nuxtSlotImage',
  },
  {
    title: '知育アプリ',
    githubUrl: 'https://github.com/kazutakanakamura711/forKids',
    technologyUsed: 'Nuxt,Vue',
    img: forKidsImage,
    appUrl: 'https://programming-go.netlify.app/',
    alt: 'forKidsImage',
  },
];

export const Slide = () => {
  return (
    <div className="overflow-x-hidden h-screen">
      <Slider {...settings}>
        {slideList.map((slide, index) => (
          <div key={index}>
            <div className="mb-8 text-center">
              <p>{slide.title}</p>
              <p>{slide.technologyUsed}</p>
              <p>
                <a
                  href={slide.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="w-full h-2/3 mb-4 image-container">
              <a href={slide.appUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
