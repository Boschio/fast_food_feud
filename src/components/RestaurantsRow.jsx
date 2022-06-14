import * as React from "react"     
import Chip from "./Chip/Chip"

export function RestaurantsRow(props) {
           
    return (
        <div className="RestaurantsRow">
        <h2 className="title">Restaurants</h2>
         <div className="restaurants options">{props.restaurant.map((restaurant, index) => (
             <Chip key={index} label={restaurant} 
               isActive={props.currRestaurant===restaurant}
               onClick={() => {
                 props.setCurrRestaurant(restaurant)
               }}
               onClose={(e) => {
                 e.stopPropagation()
                 props.setCurrRestaurant(null)
               }}
               />
             ))}
         </div>
     </div>
    )
}
