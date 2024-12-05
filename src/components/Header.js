import { useSelector } from "react-redux"
import { Link, Links } from "react-router-dom"
import Cart from "./Cart";
import { useState } from "react";

const Header = () => {
  const [viewCart,setViewCart]=useState(false);
  const cartItem=useSelector((store)=>store.meal.items);
  
  return (
    <div className="   ">
    <div className="bg-black text-white h-20 fixed top-0 z-20 flex justify-end  w-full ">
        <ul className="flex">
          <Link to={"/"}><li className="m-2 p-4 text-xl cursor-pointer">Home</li></Link>
          <Link to={"/store"}><li className="m-2 p-4 text-xl cursor-pointer">Store</li></Link>
         <Link to={"/about"}> <li className="m-2 p-4 text-xl cursor-pointer">About</li></Link>
         <li className=" h-fit mt-5 px-5 py-1 rounded-sm text-xl cursor-pointer border border-white"
           onClick={()=>{
            setViewCart(!viewCart)
           }}
         >Cart({cartItem.length})</li>
        </ul>
        <button className="bg-orange-400 w-32 h-10 mx-4 my-5 text-lg">Login</button>
        
    </div>
    {viewCart&&<Cart/>}
    </div>
  )
}

export default Header