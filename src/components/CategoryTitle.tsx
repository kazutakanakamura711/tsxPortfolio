interface CategoryTitleProps {
  categoryTitle: string;
}

export const CategoryTitle = ({ categoryTitle }: CategoryTitleProps) => {
  return (
    <h2 className="text-center text-2xl tracking-widest mb-4">
      {categoryTitle}
    </h2>
  );
};
