import React from "react";
import fb from '../../assets/img/food-items/fish-biriyani.jpg'
import ff from '../../assets/img/food-items/fish-finger.jpg'
import fc from '../../assets/img/food-items/fish-curry.jpg'

function Fish() {
    return(
        <div className="item-container h-screen w-screen flex justify-center items-center flex-col bg-slate-300 text-black">
            <div className="item-container-elements h-full w-full flex justify-center items-center flex-col p-40">
                <h2 className="text-4xl">Fish Items</h2>
                <div className="dish-holder flex justify-center items-center gap-7 ">
                    <div className="dish">
                        <img src={fb} alt="Fish Biriyani"/>
                        <div className="dish-info">
                            <h2>Fish Biriyani</h2>
                        </div>
                    </div>
                    <div className="dish">
                        <img src={fc} alt="Fish Curry" />
                        <div className="dish-info">
                            <h2>Fish Curry</h2>
                        </div>
                    </div>
                    <div className="dish">
                        <img src={ff} alt="Fish Finger" />
                        <div className="dish-info">
                            <h2>Fish Finger</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fish