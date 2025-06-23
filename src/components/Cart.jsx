import React from "react";
import CategoryMenu from "./CategoryMenu";
import { useDispatch, useSelector } from "react-redux";
import { addItems, clearCart, deleteItems } from "../store/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAdditems = (menus) => {
    dispatch(addItems(menus));
  };

  const handleClearcartitems = () => {
    dispatch(clearCart());
  };

  const handleDeleteitems = (menus) => {
    console.log(menus);
    console.log("delete Clicked");
    dispatch(deleteItems(menus?.card?.info?.id));
  };
  return (
    <>
      <div className="my-4 pt-16 text-center text-2xl">Cart Page</div>
      <div className=" text-center">
        <button
          className="border rounded-sm py-1 px-2 cursor-pointer"
          onClick={handleClearcartitems}
        >
          ClearCart
        </button>
      </div>
      <div>
        {cartItems?.length === 0 ? (
          <div className="text-center font-bold my-2">
            Your cart is empty.Please Add Items To Your Cart...!
          </div>
        ) : (
          <div className=" bg-blue-50 mx-90 ">
            {cartItems?.map((menus, index) => (
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
                  <div className="flex-6/12">
                    <button
                      onClick={() => handleAdditems(menus)}
                      className="bg-white font-semibold text-green-700 px-6 rounded mx-6 hover:cursor-pointer mt-0 border-1  border-gray-300"
                    >
                      ADD+
                    </button>
                    <button
                      onClick={() => handleDeleteitems(menus)}
                      className="bg-white font-semibold text-green-700 px-3 rounded mx-6 hover:cursor-pointer mt-0 border-1  border-gray-300"
                    >
                      REMOVE-
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
