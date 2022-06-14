import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  // console.log("name: ", props)
  if (props.item===null) {
    return null
  } 
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">{
        nutritionFacts.map((fact) => (
        <NutritionalLabelFact
        label={fact.label}
        // let attributes = {(fact.attribute==="fiber" ? "dietary_fiber" : fact.attribute)}
        value={props.item[fact.attribute]}
        />
        ))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.value}</span>
    </li>
  )
}

export default NutritionalLabel
