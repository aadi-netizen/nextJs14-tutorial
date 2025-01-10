import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto px-4 py-4 flex gap-4 shadow-sm">
      <Link className="border-b-2 border-transparent hover:border-black" href={"/"} >Home</Link>
      <Link className="border-b-2 border-transparent hover:border-black" href={"/counter"} >Counter</Link>
      <Link className="border-b-2 border-transparent hover:border-black" href={"/tour"} >Tour</Link>
      <Link className="border-b-2 border-transparent hover:border-black" href={"/actions"} >Actions</Link>
    </nav>
  )
}

export default Navbar