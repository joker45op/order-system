import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import burger from "./assets/burger.png";
import AddedCart from "./components/AddedCart";
import MenuItem from "./components/MenuItem";
import { store } from "./utils/store";

function App() {
  const { order } = store();

  let categories = [1, 2, 3, 4, 5, 6];

  return (
    <div className="lg:flex lg:justify-center">
      <div className="h-screen flex flex-col bg-[#fffbf6] lg:w-1/4">
        <div className="flex flex-row w-full h-36 overflow-x-scroll bg-white">
          {/* <div className="flex space-x-4 px-4"> */}
          {categories.map((item, index) => {
            return (
              <div
                key={item}
                className={`flex flex-col h-full border-r-[0.5px] border-b-4 pt-1.5 px-5 ${
                  index < categories.length - 1 ? "border-r-orange-800" : ""
                } ${
                  index === 2 ? "border-b-orange-800 " : "border-b-white"
                } place-content-center`}
              >
                <img
                  src={burger}
                  className="h-10 w-10 min-h-10 min-w-10"
                  alt="react"
                />
                <div className="text-sm p-0">lorem</div>
              </div>
            );
          })}

          {/* </div> */}
        </div>

        <div className="flex justify-items-start p-3 space-x-3 border-b border-b-orange-500">
          <div className="btn btn-outline btn-xs rounded-badge btn-secondary">
            All
          </div>
          <div className="btn btn-outline btn-xs rounded-badge btn-secondary">
            Veg
          </div>
          <div className="btn btn-outline btn-xs rounded-badge btn-secondary">
            NonVeg
          </div>
        </div>

        <div
          className={`flex flex-col ${
            order.length > 0 ? "pb-12" : ""
          } overflow-y-scroll`}
        >
          <div className="flex flex-col py-3">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div key={item} className="max-w-full p-3 py-1">
                  <MenuItem
                    name="BurgerOne"
                    desc="Nothing"
                    price="500"
                    index={item}
                  ></MenuItem>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {order.length > 0 && <AddedCart />}
    </div>
  );
}

export default App;
