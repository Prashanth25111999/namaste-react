import { useState } from "react";
import CategoryMenu from "./CategoryMenu";

const Category = ({ Catagories, isOpen, setIsOpen }) => {
  const { title } = Catagories?.card?.card;

  const accordianClick = () => {
    setIsOpen();
  };

  return (
    <div>
      <div
        className="flex justify-between shadow-2xl  bg-gray-200 mb-3 hover:cursor-pointer"
        onClick={accordianClick}
      >
        <h1 className="font-semibold">
          {title} ({title.length})
        </h1>
        <span>{isOpen ? "🔼" : "🔽"}</span>
      </div>
      <div>{isOpen && <CategoryMenu CategoryItem={Catagories} />}</div>
    </div>
  );
};
export default Category;
