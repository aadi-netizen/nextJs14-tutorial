"use client"

import { useState } from "react"



const Counter = () => {
  const [count, setCount] = useState(0);

  return (<>
    <div className=" h-screen ">
      <div className="max-w-xl mx-auto flex gap-2 justify-center items-center h-96">
        <button className="bg-blue-400 text-white px-2.5 py-1.5 text-xs rounded-sm" onClick={() => setCount(count + 1)}> Increase Count </button>
        <h4>Count: {count}</h4>
        <button className="bg-blue-400 text-white px-2.5 py-1.5 text-xs rounded-sm" onClick={() => setCount(count - 1)}> Decrease Count </button>
      </div>
    </div>
  </>
  )
}

export default Counter