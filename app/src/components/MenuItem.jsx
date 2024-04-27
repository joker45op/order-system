import React from "react";
import burger from "../assets/burger.png";
import plus from "../assets/Icons/plus-solid.svg";
import minus from "../assets/Icons/minus-solid.svg";
import { useState } from "react";
import { store } from "../utils/store";
import { useEffect } from "react";
import QuantitySetter from "./QuantitySetter";

function MenuItem({ index, ...props }) {
  const { order, addOrder, getOrder, updateOrder } = store();

  const [thisOrder, setThisOrder] = useState(getOrder(index));

  useEffect(() => {
    setThisOrder(getOrder(index));
  }, [order]);

  const handleAddToCart = () => {
    addOrder({ item: index, quantity: 1 });
    setThisOrder(getOrder(index)); // Update thisOrder after adding to cart
    // console.log(thisOrder);/
  };

  return (
    <>
      <div className="card p-3 m-0 border-[0.5px] border-[#fbbf24] ">
        <div className="card-body p-0 flex ">
          <div className="flex flex-row">
            <div className="w-36">
              <img className="" src={burger} alt="Burger"></img>
            </div>
            <div className="divider divider-horizontal mx-2"></div>
            <div className="w-full flex flex-col justify-evenly">
              <div className="text-lg font-black leading-3">{props.name}</div>
              <div className="text-xs font-normal text-gray-600">
                {props.desc}
              </div>
              <div className="text-green-700 text-md">₹ {props.price}/-</div>
              <div className="h-8 max-h-8 flex flex-col justify-center">
                {thisOrder?.item !== undefined ? (
                  <QuantitySetter
                    itemNumber={thisOrder.item}
                    qty={thisOrder.quantity || 0}
                  />
                ) : (
                  // <div>
                    <button
                      className="btn btn-primary btn-xs rounded-full h-7 max-h-7 w-24 "
                      onClick={handleAddToCart}
                    >
                      Add To Cart
                    </button>
                  // </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
