import React, { useState } from "react";
import cartImage from "../assets/Icons/cart.svg";

const Cart = () => {
  const [isLeft, setIsLeft] = useState(true);
  const [optionToEat, setOptionToEat] = useState("On Table");
  const [tableNumber, setTableNumber] = useState("5");
  const [total, setTotal] = useState(5000);
  const [gstAmt, setGstAmt] = useState(69);

  const data = [
    {
      productName: "Burger One",
      quantity: 5,
      price: 100 * 5,
      pricePerQuantity: 100 * 5,
    },
    {
      productName: "Burger two",
      quantity: 3,
      price: 200,
      pricePerQuantity: 200 * 3,
    },
    {
      productName: "Burger three",
      quantity: 2,
      price: 500,
      pricePerQuantity: 500 * 2,
    },
    {
      productName: "Burger four",
      quantity: 1,
      price: 500 * 1,
      pricePerQuantity: 500 * 1,
    },
    {
      productName: "Burger three",
      quantity: 2,
      price: 500,
      pricePerQuantity: 500 * 2,
    },
    {
      productName: "Burger four",
      quantity: 1,
      price: 500 * 1,
      pricePerQuantity: 500 * 1,
    },
    {
      productName: "Burger three",
      quantity: 2,
      price: 500,
      pricePerQuantity: 500 * 2,
    },
    {
      productName: "Burger four",
      quantity: 1,
      price: 500 * 1,
      pricePerQuantity: 500 * 1,
    },
    {
      productName: "Burger three",
      quantity: 2,
      price: 500,
      pricePerQuantity: 500 * 2,
    },
    {
      productName: "Burger four",
      quantity: 1,
      price: 500 * 1,
      pricePerQuantity: 500 * 1,
    },
    {
      productName: "Burger three",
      quantity: 2,
      price: 500,
      pricePerQuantity: 500 * 2,
    },
    {
      productName: "Burger four",
      quantity: 1,
      price: 500 * 1,
      pricePerQuantity: 500 * 1,
    },
    // {
    //   productName: "Burger three",
    //   quantity: 2,
    //   price: 500,
    //   pricePerQuantity: 500 * 2,
    // },
    // {
    //   productName: "Burger four",
    //   quantity: 1,
    //   price: 500 * 1,
    //   pricePerQuantity: 500 * 1,
    // },
  ];

  const handleSwitch = () => {
    setIsLeft((prevState) => !prevState);
  };
  return (
    <div className="text-sm p-2 justify-center h-screen max-h-screen lg:flex">
      <div className="space-y-3 h-full overflow-hidden lg:w-1/3 pb-24">
        <div className="text-3xl mb-5 flex flex-row">
          {/* <div className="max-h-10 w-1/3 h-1/3 max-w-10 pe-2">
            <img src={cartImage} className=""></img>
          </div> */}
          <div>Cart</div>
        </div>
        <div className="shadow rounded border h-8 w-full flex px-1 relative bg-gray-200">
          <div className="w-full flex justify-center h-full">
            <button onClick={handleSwitch} className=" w-full h-full">
              On Table
            </button>
          </div>
          <div className="w-full flex justify-center h-full">
            <button onClick={handleSwitch} className="w-full  h-full m-0">
              Take Away
            </button>
          </div>
          <span
            className={`elSwitch font-black bg-white shadow text-gray-800 flex items-center justify-center w-1/2 rounded h-7 transition-all top-[1px] absolute ${
              isLeft ? "left-1" : "left-1/2"
            }`}
          >
            {isLeft ? "On Table" : "Take Away"}
          </span>
        </div>
        <div>
          <label
            className="input input-lg h-8 p-0 mt-2 flex items-center rounded-lg overflow-hidden border border-gray-400"
            disabled={isLeft ? false : true}
          >
            <span className="text-sm font-semibold w-3/6 h-full flex items-center justify-center border-r border-gray-400 bg-slate-200">
              Table No.
            </span>
            <select
              value={tableNumber}
              className="outline-none bg-inherit px-2 w-full h-full text-sm font-bold flex items-center justify-center focus:outline-none"
              name="tableNumberSelector"
              onChange={(e) => setTableNumber(e.target.value)}
              disabled={isLeft ? false : true}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
        <div className="divider py-3 pt-5 font-bold ">YOUR ORDER</div>
        <div className="h-[calc(100%-16rem)] max-h-[calc(100%-18rem)] min-h-[calc(100%-18rem)] overflow-y-scroll">
          <table className="table h-full max-w-full">
            <thead className="text-sm font-black h-4 text-black border-y-[1.5px] border-slate-300">
              <tr className="text-center">
                <th>Product</th>
                <th>Qty.</th>
                <th>Price</th>
                <th className="text-center">Total Price</th>
              </tr>
            </thead>
            <tbody className="text-xs text-center">
              {/* row 2 */}
              {data.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element.productName}</td>
                    <td>{element.quantity}</td>
                    <td>{element.price}</td>
                    <td className="text-center">{element.pricePerQuantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="divider p-0 m-0"></div>
        <div className="p-0 m-0">
          <div className="w-full h-7 max-h-7 flex justify-end text-sm ">
            <div className="flex w-2/4 gap-2 place-items-center">
              <div className="w-1/2 text-right font-bold">Net Amt. :</div>
              <div className="w-1/2 text-start font-semibold">{total}</div>
            </div>
          </div>
          <div className="w-full h-7 max-h-7 flex justify-end text-sm">
            <div className="flex w-2/4 gap-2 place-items-center">
              <div className="w-1/2 text-right font-bold ">GST :</div>
              <div className="w-1/2 text-start font-semibold">{gstAmt}</div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="divider p-0 m-0 w-1/2"></div>
          </div>
          <div className="w-full flex justify-end px-9 py-0">
            <div className="w-1/4 text-left">Total</div>
            <div className="w-1/4 text-end">₹ {total + gstAmt}</div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 h-12 left-50 w-full lg:w-1/3 py-3 text-center flex flex-col justify-center bg-white">
        <div className="flex py-3">
          <div className="w-1/2 mx-3">
            <select className="p-3 w-full bg-transparent outline-none text-center">
              <option className="">Online</option>
              <option className="">Cash</option>
            </select>
          </div>

          <div className="text-center p-3 w-1/2 bg-green-500 text-white">
            Pay
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
