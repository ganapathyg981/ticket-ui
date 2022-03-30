import React from 'react'

function CityData() {
    const theatres=['PVR','INOX']
    const movies=['Pushpa', "DJ Tillu"]
  return (
    <React.Fragment>
        <div>Theatres</div> 
        {theatres.map(screen=><p>{screen}</p>)}
        <div>Movies</div> 
        {movies.map(movie=><p>{movie}</p>)}
    </React.Fragment>
    
  )
}

export default CityData