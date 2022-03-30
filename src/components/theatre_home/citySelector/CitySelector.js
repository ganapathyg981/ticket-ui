import React from 'react'

function CitySelector() {
    const cities=['Chennai','Mumbai']
  return (
      cities.map(city=><div>{city}</div>)
  )
}

export default CitySelector