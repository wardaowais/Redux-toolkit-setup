import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {
 const counterObj =  useSelector((store) => store.counter)
 const counter = counterObj.counterVal;

  return (
    <div>
        <p className="lead mb-4">Counter Value {counter}</p>
     </div>
  )
}

export default DisplayCounter
