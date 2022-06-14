import * as React from "react"     
import Chip from "./Chip/Chip"

export function CategoriesColumn(props) {

return(
    <div className="CategoriesColumn col">
    <div className="categories options">
      <h2 className="title">Categories</h2>
      {props.categories.map((category, index) => (
        <Chip key={index} label={category} 
        isActive={props.currCategory===category} 
        onClick={() => {
          props.setCurrCategory(category)
        }}
        onClose={(e) => {
          e.stopPropagation()
          props.setCurrCategory(null)
        }}
        />
      ))}
    </div>
  </div>
)
}