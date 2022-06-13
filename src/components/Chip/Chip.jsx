import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick = () => {}, onClose = () => {} }) {
  let buttonClassName = "chip";

  if (isActive === true) {
    buttonClassName += " active";
  }
  
  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={onClose}>{`X`}</span>
    </button>
  )
}

export default Chip
