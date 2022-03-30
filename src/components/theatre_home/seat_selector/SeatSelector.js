import React from 'react'

function SeatSelector() {
    const seats=[[{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}],
    [{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}],
    [{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}],
    [{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}],
    [{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}],
    [{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}],
    [{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}],
    [{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}],
    [{name:'A1',booked:false},{name:'A2',booked:false},{name:'A3',booked:false},{name:'GAP'},{name:'A4',booked:true}]];
  return (
    <div>
        {seats.map((row,index)=><div key={index}>
            {row.map((seat,index)=>{
                if(seat.name!='GAP')
                return <p style={{display:'inline', margin:'4px'}} key={index}>{seat.name}</p>;
                else
                return <div style={{width:'50px',display:'inline-block'}}></div>
            })}
            </div>)}
        </div>
  )
}

export default SeatSelector