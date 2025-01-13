import React, { ReactNode } from 'react'

const ToursLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h4 className="w-1/2 text-4xl mx-auto text-center my-10 ">Our Popular Tours</h4>
      {children}
    </>
  )
}

export default ToursLayout