import collageImage from '../assets/images/firstCollage.jpg';

export const Top = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center mt-20 md:mt-0'>
        <div className='md:mt-32'>
          <img src={collageImage} alt="TopImage" />
        </div>
      </div>
    </>
  );
}
