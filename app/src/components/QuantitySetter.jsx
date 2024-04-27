import React from "react";
import plus from "../assets/Icons/plus-solid.svg";
import minus from "../assets/Icons/minus-solid.svg";
import { useState } from "react";
import { store } from "../utils/store";

function QuantitySetter(props) {
  const [quantity, setQuantity] = useState(props.qty);

  const { updateOrder,order } = store();

  const handleQuantity = (event) => {
    let inputVal = event.target.value;
    inputVal = inputVal === "" ? "0" : inputVal;
    let newValue = parseInt(inputVal, 10);
    newValue = newValue <= 99 ? newValue : 99;
    setQuantity(parseInt(newValue));
    updateOrder(props.itemNumber, parseInt(newValue));
    event.target.value = newValue;
  };

  const handelPlus = () => {
    if (quantity < 99) {
      setQuantity(Number(quantity) + 1);
      updateOrder(props.itemNumber, Number(quantity) + 1);
    }
  };

  const handelMinus = () => {
    if (quantity > 0) {
      setQuantity(Number(quantity) - 1);
      updateOrder(props.itemNumber, Number(quantity) - 1);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        className="btn btn-primary btn-circle btn-xs"
        onClick={handelMinus}
      >
        <div className="w-3 h-3 flex-row justify-center">
          <img src={minus} />
        </div>
      </button>
      <input
        type="number"
        className="text-center text-[12px] w-[40px] p-0 [&::-webkit-inner-spin-button]:appearance-none bg-inherit border-[0.5px] border-yellow-500 rounded-md"
        maxLength="2"
        value={quantity}
        onChange={handleQuantity}
      ></input>
      <button
        className="btn btn-primary btn-circle btn-xs"
        onClick={handelPlus}
      >
        <div className="w-3 h-3 flex flex-row justify-center">
          <img src={plus}></img>
        </div>
      </button>
    </div>
  );
}

export default QuantitySetter;
