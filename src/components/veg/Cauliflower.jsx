import React from "react";
import gm from '../../assets/img/food-items/gopi-manchurian.jpg'
import cfr from '../../assets/img/food-items/cauliflower-fried-rice.jpg'
import hgc from '../../assets/img/food-items/honey-garlic-cauliflower.jpg'

function Cauliflower() {
    return(
        <div className="item-container ">
            <div className="item-container-elements ">
                <h2 className="text-4xl">Cauliflower Items</h2>
                <div className="dish-holder ">
                    <div className="dish">
                        <img src={gm} alt="Gopi Manchurian"/>
                        <div className="dish-info">
                            <h2>Gopi Manchurian</h2>
                        </div>
                    </div>
                    <div className="dish">
                        <img src={cfr} alt="Cauliflower Fried Rice" />
                        <div className="dish-info">
                            <h2>Cauliflower Fried Rice</h2>
                        </div>
                    </div>
                    <div className="dish">
                        <img src={hgc} alt="Honey Garlic Cauliflower" />
                        <div className="dish-info">
                            <h2>Honey Garlic Cauliflower</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cauliflower