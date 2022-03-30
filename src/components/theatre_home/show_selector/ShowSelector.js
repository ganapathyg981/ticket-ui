import React from 'react'

function ShowSelector() {
    const shows=['12:00','04:00']
  return (
      <React.Fragment>
          <div>ShowSelector</div>
        {shows.map(show=><p>{show}</p>)}
      </React.Fragment>
    
  )
}

export default ShowSelector