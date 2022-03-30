import React from 'react'
import CityData from './citydata/CityData'
import CitySelector from './citySelector/CitySelector'
import SeatSelector from './seat_selector/SeatSelector'
import ShowSelector from './show_selector/ShowSelector'
function MoviesHome() {
  return (
      <React.Fragment>
          <CityData></CityData>
      <CitySelector></CitySelector>
        <ShowSelector></ShowSelector>
        <SeatSelector></SeatSelector>
      </React.Fragment>
      
  )
}

export default MoviesHome