import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return(
        <div className="container h-screen w-screen flex justify-center items-center flex-col">
      <div className="container-element w-full h-full p-10 flex flex-col items-center">
        <header className="header flex justify-center items-center text-5xl w-fit p-3 rounded-full text-black bg-white ">
          Recipe
        </header>
        <div className="menu w-full h-full p-5 flex justify-center items-center gap-4">
          
          <div className="item">
            <div className="item-header">
              <h2>Non-Veg</h2>
            </div>
            <ul className="list">
              <NavLink to={"/chicken"}><li className="list-item">Chicken</li></NavLink>
              <NavLink to={"/fish"}><li className="list-item">Fish</li></NavLink>
              <NavLink to={"/mutton"}><li className="list-item">Mutton</li></NavLink>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <h2>Vegetarian</h2>
            </div>
            <ul className="list">
              <NavLink to={"/paneer"}><li className="list-item">Paneer</li></NavLink>
              <NavLink to={"/cauliflower"}><li className="list-item">Cauliflower</li></NavLink>
              <li className="list-item">Potato</li>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <h2>Desserts</h2>
            </div>
            <ul className="list">
              <li className="list-item">Cake</li>
              <li className="list-item">Pudding</li>
              <li className="list-item">Cookies</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    )
}

export default Home