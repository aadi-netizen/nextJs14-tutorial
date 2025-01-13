import Link from "next/link"

const Navbar = () => {
  return (
    <nav className=" mx-auto  px-4 py-3 flex justify-center items-center gap-4 sticky top-0 bg-white z-10">
      <Link className="border-b-2 border-transparent pb-2 hover:border-black" href={"/"} >Home</Link>
      <Link className="border-b-2 border-transparent pb-2 hover:border-black" href={"/counter"} >Counter</Link>
      <Link className="border-b-2 border-transparent pb-2 hover:border-black" href={"/tours"} >Tours</Link>
      <Link className="border-b-2 border-transparent pb-2 hover:border-black" href={"/actions"} >Actions</Link>
    </nav>
  )
}

export default Navbar