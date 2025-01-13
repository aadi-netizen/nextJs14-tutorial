"use client"

import { createUsers } from "../utils/actions"


const Form = () => {
  return (
    <form className="w-1/3 mx-auto my-16 shadow-md p-6 rounded-md" action={createUsers} >
      <div className="flex flex-col gap-2">
        <div className="">
          <label htmlFor="fname" className="text-black my-1 block text-sm">First Name</label>
          <input type="text" name="firstName" defaultValue={"peter"} id="fname" className="border-2 border-gray-300 px-2 py-1 w-full rounded-sm" />
        </div>
        <div className="">
          <label htmlFor="lname" className="text-black my-1 block text-sm">Last Name</label>
          <input type="text" name="lastName" defaultValue={"smith"} id="lname" className="border-2 border-gray-300 px-2 py-1 w-full rounded-sm" />
        </div>
        <button className="w-1/2 mx-auto px-2 py-1 bg-blue-400 hover:bg-blue-300 rounded-sm text-white mt-2" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Form