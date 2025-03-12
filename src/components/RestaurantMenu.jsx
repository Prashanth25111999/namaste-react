import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [checkbox, setCheckbox] = useState(false);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966024&lng=77.6687231&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    setResMenu(json?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
    <div className="menu-cont">
      <div className="submenu-cont">
        <h1>{name} 🏨</h1>
        <p>{costForTwoMessage}</p>
        <p>Ratings - {avgRating}</p>
        <p>{cuisines?.join(",")}</p>
        <input type="checkbox" onClick={checkClick} /> Click For Special Items
        <h5>Items Available</h5>
        {checkbox ? (
          <ul>
            {itemCards1.length < 1 ? (
              <h3>No items Available </h3>
            ) : (
              itemCards1.map((item) => {
                return <li key={item.card.info.id}>{item.card.info.name}</li>;
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
