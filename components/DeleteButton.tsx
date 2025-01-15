import { removeUser } from "@/utils/actions"


const DeleteButton = ({ id }: { id: string }) => {
  const removeUserById = removeUser.bind(null, id);
  return (
    <div>
      <form action={removeUserById} className="">
        {/* <input type="hidden" name="id" value={id} /> */}
        <button className="bg-red-400 hover:bg-red-500 text-white text-xs px-2 py-1 rounded-sm" type="submit">Delete</button>
      </form>
    </div>
  )
}

export default DeleteButton