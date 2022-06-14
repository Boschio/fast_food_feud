import * as React from "react"     
import Chip from "./Chip/Chip"
import NutritionalLabel from "./NutritionalLabel/NutritionalLabel"

export function MenuDisplay(props) {
    return(
        <div className="MenuDisplay display">
        <div className="MenuItemButtons menu-items">
          <h2 className="title">Menu Items</h2>

          {props.currentMenuItems.map((item, index) => (
            
            <Chip key={index} label={item.item_name} 
            isActive={props.selectedMenuItem===item}
            onClick={() => {
              props.setSelectedMenuItem(item)
            }}
            onClose={(e) => {
              e.stopPropagation()
              props.setSelectedMenuItem(null)
            }}
            />
          ))}
        </div>

    {/* NUTRITION FACTS */}
        <div className="NutritionFacts nutrition-facts">
            
              <NutritionalLabel 
              item={props.selectedMenuItem}
              factList={props.selectedMenuItem}
              />

            </div>
        </div>
    )
}