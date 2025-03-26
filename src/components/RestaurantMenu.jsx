import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import Category from "./Category";

const RestaurantMenu = () => {
  const [isOpen, setIsOpen] = useState(0);
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);
  const networkStatus = useOnlineStatus();
  console.log(resMenu);

  if (networkStatus === false) {
    return <h1>Please Check Your Internet Connection...!😎</h1>;
  }

  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;

  const itemCards =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  const itemCards1 =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card
      ?.itemCards || [];

  const catagories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-[650px] border-0 shadow-2xl  mt-25 m-auto p-5">
      <div className="">
        <h1 className="font-bold p-1 text-center text-2xl">{name} 🏨</h1>
        <p className="text-center">
          {cuisines?.join(",")} - {costForTwoMessage}
        </p>
        <h5 className="py-4 font-serif">Category Available</h5>
        {catagories.map((listOfCat, index) => (
          <Category
            key={listOfCat.card.card.categoryId}
            Catagories={listOfCat}
            isOpen={isOpen === index ? true : false}
            setIsOpen={() => setIsOpen(isOpen === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
