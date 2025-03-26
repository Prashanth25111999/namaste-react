import { useState } from "react";

const CategoryMenu = ({ CategoryItem }) => {
  const CatMenus = CategoryItem?.card?.card?.itemCards;
  console.log(CatMenus);

  return (
    <div className=" bg-blue-50">
      {CatMenus?.map((menus, index) => (
        <div className="flex justify-between m-5 border-b-1" key={index}>
          <div className="flex-9/12 m-2 overflow-hidden ">
            <span className="font-bold">
              {menus?.card?.info?.name} - ₹
              {menus?.card?.info?.price / 100 ||
                menus?.card?.info?.defaultPrice / 100}{" "}
            </span>
            <br></br>
            <span>
              {menus?.card?.info?.description
                ?.split(" ")
                .slice(0, 16)
                .join(" ")}
            </span>
          </div>
          <div className="flex-3/12 m-2">
            <img
              className="h-20 w-35 rounded"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menus?.card?.info?.imageId}`}
            />
            <button className="bg-white font-semibold text-green-700 px-6 rounded mx-6 hover:cursor-pointer mt-0 border-1  border-gray-300">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryMenu;
