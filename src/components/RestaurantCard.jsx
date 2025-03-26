import { useContext } from "react";
import userContext from "../utils/userContext";

function RestaurantCard({ resData }) {
  const { name, avgRating, costForTwo, cuisines } = resData.info;
  const user = useContext(userContext);

  return (
    <div className="w-[230px] border-1 p-2 bg-gray-50 rounded-lg h-[380px] hover:scale-102 transition-transform ">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
        alt="Resto Image"
        className="h-40 w-65 px-2 rounded-lg"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>Ratings {avgRating}</h4>
      <p>Cost:{costForTwo}</p>
      <p style={{ wordWrap: "break-word" }}>{cuisines?.join(",")}</p>
      <p className="font-semibold">{user.loggedInUser}</p>
    </div>
  );
}

// HigherOrder Component -- > it takes the another component as input and return enhanced component
export const withLablePromoter = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoter</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
