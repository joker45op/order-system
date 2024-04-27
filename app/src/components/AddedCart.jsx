import React from "react";
import { store } from "../utils/store";

const AddedCart = () => {
  const { order } = store();
  return (
    <>
      {order.length > 0 ? (
        <div className=" fixed bottom-0 w-full h-12 flex flex-col justify-center lg:left-50 lg:w-1/4 lg:max-w-1/4 bg-[#fffbf6]">
          <button
            onClick={() => {
              console.log(order);
            }}
            className="btn btn-secondary mb-2"
          >
            Cart
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddedCart;
