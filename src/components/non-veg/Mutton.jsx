import React from "react";
import mb from '../../assets/img/food-items/mutton-biriyani.jpg'
import mc from '../../assets/img/food-items/mutton-curry.jpg'
import ms from '../../assets/img/food-items/mutton-stew.jpg'

function Mutton() {
    return(
        <div className="item-container ">
            <div className="item-container-elements ">
                <h2 className="text-4xl">Mutton Items</h2>
                <div className="dish-holder ">
                    <div className="dish">
                        <img src={mb} alt="Mutton Biriyani"/>
                        <div className="dish-info">
                            <h2>Mutton Biriyani</h2>
                        </div>
                    </div>
                    <div className="dish">
                        <img src={mc} alt="Mutton Curry" />
                        <div className="dish-info">
                            <h2>Mutton Curry</h2>
                        </div>
                    </div>
                    <div className="dish">
                        <img src={ms} alt="Mutton Stew" />
                        <div className="dish-info">
                            <h2>Mutton Stew</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mutton