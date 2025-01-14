import { getUsers } from "@/utils/actions"
import DeleteButton from "./DeleteButton";


const List = async () => {
  const users = await getUsers();
  return (
    <section className=" my-16 ">
      <h1 className="text-xl text-center">Users</h1>
      <ul className=" mt-2 mx-auto shadow-md p-6 rounded-md">
        {users ? users.map((user) => (
          <li key={user.id} className="list-decimal p-2 ">
            {user.firstName} {user.lastName}
            <span className="float-end"> <DeleteButton id={user.id} />  </span>
          </li>
        )) : <h3 className="">No Users found !!</h3>}
      </ul>
    </section>
  )
}

export default List