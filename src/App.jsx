import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import { useState } from "react"
import { RestaurantsRow } from "./components/RestaurantsRow"
import { CategoriesColumn } from "./components/CategoriesColumn"
import { MenuDisplay } from "./components/MenuDisplay"
import { DataSource } from "./components/DataSource"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [currCategory, setCurrCategory] = useState(null)
  const [currRestaurant, setCurrRestaurant] = useState(null)
  const [selectedMenuItem, setSelectedMenuItem] = useState(null)

  const currentMenuItems = data.filter((item) => {
    return item.food_category === currCategory && item.restaurant === currRestaurant;
  })

  const setInstructions = () => {
    if ((currCategory === null) && (currRestaurant === null)) {
      return appInfo.instructions.start
    } else if (currCategory === null) {
      return appInfo.instructions.onlyRestaurant
    } else if (currRestaurant === null) {
      return appInfo.instructions.onlyCategory
    } else if (selectedMenuItem === null) {
      return appInfo.instructions.noSelectedItem
    } else {
      return appInfo.instructions.allSelected
    }
  }

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <CategoriesColumn categories={categories} setCurrCategory={setCurrCategory} currCategory={currCategory}/>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <RestaurantsRow restaurant={restaurants} setCurrRestaurant={setCurrRestaurant} currRestaurant={currRestaurant}/>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions = {setInstructions()}/>

        {/* MENU DISPLAY */}
        <MenuDisplay currentMenuItems={currentMenuItems} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem}/>

        <DataSource dataSource={appInfo.dataSource}/>

      </div>
    </main>
  )
}

export default App
