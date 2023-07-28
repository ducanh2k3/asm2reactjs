import React from "react";
import { useEffect, useState } from "react";
import { fetchMenu } from "../../axios/config";
import FoodItems from "../items";
const Menu = () => {
  const [Menu, setMenu] = useState([]);
  useEffect(() => {
    async function Menu() {
      // You can await here
      const response = await fetchMenu();
      setMenu(response);
      // ...
    }
    Menu();
  }, []);
  console.log(Menu[0]?.Name);
  return (
    <div>
      {Menu.map((item,index) => {
        return (
          <>
            <FoodItems key={index} props={item}/>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
