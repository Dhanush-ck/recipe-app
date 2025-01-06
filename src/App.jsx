import React from "react";

function App() {
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
              <li className="list-item">Chicken</li>
              <li className="list-item">Fish</li>
              <li className="list-item">Mutton</li>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <h2>Vegetarian</h2>
            </div>
            <ul className="list">
              <li className="list-item">Paneer</li>
              <li className="list-item">Cauliflower</li>
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

export default App