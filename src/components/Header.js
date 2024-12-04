import { Link, Links } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-black text-white h-20 flex justify-end ">
        <ul className="flex">
          <Link to={"/"}><li className="m-2 p-4 text-xl cursor-pointer">Home</li></Link>
          <Link to={"/store"}><li className="m-2 p-4 text-xl cursor-pointer">Store</li></Link>
         <Link to={"/about"}> <li className="m-2 p-4 text-xl cursor-pointer">About</li></Link>
        </ul>
        <button className="bg-orange-400 w-32 h-10 m-4 text-lg">Login</button>
    </div>
  )
}

export default Header