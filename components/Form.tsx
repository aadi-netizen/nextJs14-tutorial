"use client"

import { useFormState } from "react-dom"
import { createUsers } from "../utils/actions"
import SubmitButton from "./SubmitButton"


const Form = () => {
  const [message, formAction] = useFormState(createUsers, null)
  console.log(message)
  return (
    <section className="my-16">
      <h3 className="text-xl text-center "> Create User Form </h3>

      <form className="w-1/2 mx-auto mt-2 shadow-md p-6 rounded-md" action={formAction} >
        {message && <p className="text-xs text-blue-300">{message} </p>}
        <div className="flex flex-col gap-2">
          <div className="">
            <label htmlFor="fname" className="text-black my-1 block text-sm">First Name</label>
            <input type="text" name="firstName" defaultValue={"peter"} id="fname" className="border-2 border-gray-300 px-2 py-1 w-full rounded-sm" />
          </div>
          <div className="">
            <label htmlFor="lname" className="text-black my-1 block text-sm">Last Name</label>
            <input type="text" name="lastName" defaultValue={"smith"} id="lname" className="border-2 border-gray-300 px-2 py-1 w-full rounded-sm" />
          </div>
          <SubmitButton />
        </div>
      </form>
    </section>

  )
}

export default Form