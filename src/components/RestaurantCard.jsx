function RestaurantCard({ resData }) {
  const { name, avgRating, costForTwo, cuisines } = resData.info;

  return (
    <div className="card-cont">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
        alt="Resto Image"
      />
      <h3>{name}</h3>
      <h4>Ratings {avgRating}</h4>
      <p>Cost:{costForTwo}</p>
      <p style={{ wordWrap: "break-word" }}>{cuisines?.join(",")}</p>
    </div>
  );
}
export default RestaurantCard;
