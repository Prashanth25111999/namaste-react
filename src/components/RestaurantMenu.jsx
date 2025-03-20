import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  const [checkbox, setCheckbox] = useState(false);
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);
  const networkStatus = useOnlineStatus();

  if (networkStatus === false) {
    return <h1>Please Check Your Internet Connection...!</h1>;
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

  const checkClick = () => {
    setCheckbox(!checkbox);
  };
  console.log(resMenu);
  return (
    <div className="w-[550px] border-0 shadow-2xl mt-20 m-auto p-5">
      <div className="">
        <h1 className="font-bold p-1">{name} 🏨</h1>
        <p>{costForTwoMessage}</p>
        <p>Ratings - {avgRating}</p>
        <p>{cuisines?.join(",")}</p>
        <input type="checkbox" onClick={checkClick} /> Click For Special Items
        <h5 className="p-4">Items Available</h5>
        {checkbox ? (
          <ul>
            {itemCards1.length < 1 ? (
              <h3>No items Available </h3>
            ) : (
              itemCards1.map((item) => {
                return <li key={item.card.info.id}>- {item.card.info.name}</li>;
              })
            )}
          </ul>
        ) : (
          <ul>
            {itemCards.map((item) => {
              return <li key={item.card.info.id}>{item.card.info.name}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default RestaurantMenu;
