import RestaurantCard from "./RestaurantCard";
import { data } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restData, setResData] = useState(data);

  const handleTopResto = () => {
    const fildata = data.filter((res) => res.card.card.info.avgRating > 4.4);
    setResData(fildata);
  };
  return (
    <div className="body-cont">
      <div className="search-cont">
        <button className="res-btn" onClick={handleTopResto}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-cont">
        {" "}
        {restData.map((item, index) => {
          return <RestaurantCard key={index} resData={item} />;
        })}
      </div>
    </div>
  );
};
export default Body;
