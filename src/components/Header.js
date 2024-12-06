import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
  const [viewCart,setViewCart]=useState(false);
  const cartItem=useSelector((store)=>store.meal.items);
  const user=useSelector((store)=>store.user.userProps)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const location=useLocation();

  const handleLogin=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if(location.pathname==="/"){
          navigate("/store");
        }
        else{
          navigate(location.pathname)
        }
        
        dispatch(addUser(uid));
        
      } else {
        if(location.pathname!=="/") navigate("/")
        dispatch(removeUser())
      }
    });

    return ()=>{
      unsubscribe()
    }


  },[navigate,location.pathname])
  

  
  return (
    <div>
     
    <div className={" text-white h-20 fixed top-0 z-20 flex justify-end  w-full "+(user===null?"":"bg-black")}>
       {user&&<div className="flex">
       <ul className="flex">
          <Link to={"/home"}><li className="m-2 p-4 text-xl cursor-pointer">Home</li></Link>
          <Link to={"/store"}><li className="m-2 p-4 text-xl cursor-pointer">Store</li></Link>
         <Link to={"/about"}> <li className="m-2 p-4 text-xl cursor-pointer">About</li></Link>
        {location.pathname==="/store"&&<li className=" h-fit mt-5 px-5 py-1 rounded-sm text-xl cursor-pointer border border-white"
           onClick={()=>{
            setViewCart(!viewCart)
           }}
         >Cart({cartItem.length})</li>}
        </ul>
        <button className="bg-orange-400 w-32 h-10 mx-4 my-5 text-lg" onClick={handleLogin}>Logout</button>
       </div>}
        
    </div>
    {viewCart&&<Cart/>}
    </div>
  )
}

export default Header