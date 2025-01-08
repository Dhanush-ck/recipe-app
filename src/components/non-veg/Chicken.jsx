import React from "react";
import cb from '../../assets/img/food-items/chicken-biriyani.jpg'
import bc from '../../assets/img/food-items/butter-chicken.jpg'
import cc from '../../assets/img/food-items/chilly-chicken.jpg'

function Chicken() {
    return(
        <div className="item-container h-screen w-screen flex justify-center items-center flex-col bg-slate-300 text-black">
            <div className="item-container-elements h-full w-full flex justify-center items-center gap-7 p-40">
                <div className="dish">
                    <img src={cb} alt="Chicken Biriyani"/>
                    <div className="dish-info">
                        <h2>Chicken Biriyani</h2>
                    </div>
                </div>
                <div className="dish">
                    <img src={bc} alt="Butter Chicken" />
                    <div className="dish-info">
                        <h2>Butter Chicken</h2>
                    </div>
                </div>
                <div className="dish">
                    <img src={cc} alt="Chilly Chicken" />
                    <div className="dish-info">
                        <h2>Chilly Chicken</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chicken