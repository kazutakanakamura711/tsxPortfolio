import craneImage from '../assets/images/crane.png'
import { CategoryTitle } from './CategoryTitle'
import { Slide } from './Slide'

export const Works = () => {
  return (
    <>
      <CategoryTitle categoryTitle='WORKS' />
      <div className="flex flex-col md:flex-row-reverse mb-40">
        <div className="w-full md:flex-1 mb-4">
          <img src={craneImage} alt="WorksImage" />
        </div>
        <div className="mx-8 md:flex-1">
          <p>制作物です。神経衰弱やスロットは実際に遊べますので触っていただけたらと思います。今後はドローンを使用した空撮などを含めた制作を行っていこうと思います。</p>
        </div>
      </div>
      <div className="mx-8 mb-80">
        <Slide />
      </div>
    </>
  )
}
