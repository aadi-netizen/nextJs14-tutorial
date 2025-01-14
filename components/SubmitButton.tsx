"use client"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <div className=''>
      <button className="w-1/2 mx-auto px-2 py-1 bg-blue-400 hover:bg-blue-500 rounded-sm text-white mt-2" type="submit" disabled={pending}>{pending ? 'submitting...' : 'submit'}</button>
    </div>
  )
}

export default SubmitButton