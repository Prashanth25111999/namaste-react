import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { NEW_SWIGGY_RESTO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restData, setResData] = useState([]);
  const [originaldata, setOriginalData] = useState([]);
  const [toprated, setTopRated] = useState(false);
  const [searchtext, setSearchText] = useState("");

  const fetchData = async () => {
    const response = await fetch(NEW_SWIGGY_RESTO_API);
    const json = await response.json();
    const Restaruant =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResData(Restaruant);
    setOriginalData(Restaruant);
  };
  const handleTopResto = () => {
    const fildata = originaldata?.filter((res) => res.info.avgRating > 4.2);
    setResData(fildata);
    setTopRated(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const networkStatus = useOnlineStatus();

  if (networkStatus === false) {
    return <h1>Please Check Your Internet Connection...!</h1>;
  }

  return originaldata?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-cont">
      <div className="search-cont">
        <input
          type="text"
          placeholder="Search Restaurants..."
          className="search-text"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="res-search"
          onClick={() => {
            const searchData = originaldata?.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase());
            });
            setResData(searchData);
          }}
        >
          Search
        </button>
        <button
          className="res-btn"
          onClick={handleTopResto}
          disabled={toprated}
        >
          Click For Top Rated Restaurant
        </button>
        <button
          className="res-btn"
          onClick={() => {
            setResData(originaldata);
            setTopRated(false);
          }}
          disabled={!toprated}
        >
          Click For All Restaurant
        </button>
      </div>
      <div className="res-cont">
        {" "}
        {restData?.map((item) => {
          return (
            <Link
              to={"/restaurantMenu/" + item.info.id}
              key={item.info.id}
              className="no-link-style"
            >
              <RestaurantCard resId={item.info.id} resData={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
