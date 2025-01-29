import React from "react";
import cb from '../../assets/img/food-items/chicken-biriyani.jpg'

function ChickenBiriyani() {
    return(
        <div className="recipe-container">
            <div className="recipe-elements">
                <div className="require">
                    <img src={cb} alt="Chicken Biriyani" id="image" />
                    <div className="requirement-list"></div>
                </div>
                <div className="recipe"></div>
            </div>
        </div>
    )
}

export default ChickenBiriyani