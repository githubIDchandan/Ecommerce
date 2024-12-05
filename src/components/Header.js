import { useSelector } from "react-redux"
import { Link, Links } from "react-router-dom"
import Cart from "./Cart";

const Header = () => {

  const cartItem=useSelector((store)=>store.meal.items);
  
  return (
    <>
    <div className="bg-black text-white h-20 flex justify-end fixed w-full ">
        <ul className="flex">
          <Link to={"/"}><li className="m-2 p-4 text-xl cursor-pointer">Home</li></Link>
          <Link to={"/store"}><li className="m-2 p-4 text-xl cursor-pointer">Store</li></Link>
         <Link to={"/about"}> <li className="m-2 p-4 text-xl cursor-pointer">About</li></Link>
         <li className=" h-fit mt-5 px-5 py-1 rounded-sm text-xl cursor-pointer border border-white">Cart({cartItem.length})</li>
        </ul>
        <button className="bg-orange-400 w-32 h-10 mx-4 my-5 text-lg">Login</button>
    </div>
   {/* <Cart/> */}
    </>
  )
}

export default Header