import React from "react";
import pbm from '../../assets/img/food-items/paneer-butter-masala.jpg'
import pp from '../../assets/img/food-items/palak-paneer.jpg'
import mp from '../../assets/img/food-items/malai-paneer.jpg'

function Paneer() {
    return(
        <div className="item-container ">
            <div className="item-container-elements ">
                <h2 className="text-4xl">Paneer Items</h2>
                <div className="dish-holder ">
                    <div className="dish">
                        <img src={pbm} alt="Paneer Butter Masala"/>
                        <div className="dish-info">
                            <h2>Paneer Butter Masala</h2>
                        </div>
                    </div>
                    <div className="dish">
                        <img src={pp} alt="Palak Paneer" />
                        <div className="dish-info">
                            <h2>Palak Paneer</h2>
                        </div>
                    </div>
                    <div className="dish">
                        <img src={mp} alt="Malai Paneer" />
                        <div className="dish-info">
                            <h2>Malai Paneer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paneer