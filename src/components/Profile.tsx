import profileImage from '../assets/images/profileImg.jpg';
import { CategoryTitle } from './CategoryTitle';

export const Profile = () => {
  return (
    <>
      <CategoryTitle categoryTitle="PROFILE" />
      <div className="w-3/5 max-w-sm mx-auto mb-4">
        <img src={profileImage} alt="TopImage" />
      </div>
      <p className="text-center mb-6">KAZUTAKA NAKAMURA</p>
      <p className="md:text-center">
        はじめまして。
        <br />
        愛媛県でフロントエンドエンジニアとして
        <br />
        活動させていただいております、
        <br />
        中村と申します。
        <br />
        印刷会社を退社後Web制作をさせていただいております。
      </p>
    </>
  );
};
