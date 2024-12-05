import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../store/mealSlice";
import { useState } from "react";

const Cart = () => {
  const cardItem=useSelector((store)=>store.meal.items);
  const dispatch=useDispatch();
  const [showBtn,setShowBtn]=useState(true)
  const filteredCardItem=cardItem.filter((item,index,cardItem)=>{
    return index=== cardItem.findIndex((element)=>element.name===item.name)
  })
  const clearCartHandler=()=>{
        dispatch(clearCart())
        setShowBtn(!showBtn)
  }
  
 
  return (
    <div className="w-[25%] h-[750px] fixed right-0 top-20 border border-black shadow-2xl z-30 overflow-scroll">
       <h1 className="p-2 text-4xl font-semibold  text-gray-600 text-center border-b-2">CART</h1>
       <div className="flex text-center">
          <h1 className=" w-[30%] text-2xl mx-1 font-bold border-black border-b-2">ITEM</h1>
          <h1 className=" w-[20%]  text-2xl mx-1 font-bold border-black border-b-2">Price</h1>
           <h1 className="w-[50%] text-2xl mx-1 font-bold border-black border-b-2">Quantity</h1>
       </div>
       <div>

          {
            filteredCardItem.map((item)=>{
              return <CartItem item={item}/>
            })
          }
       </div>
       <button className={"w-40 text-black text-xl  py-2 rounded-sm font-semibold mx-24 mt-5 border border-black"+(showBtn===false?"border border-white text-8xl":"")}
         onClick={clearCartHandler}
       >{showBtn===true?"PURCHASE":"Your Order Place 😂😂😂"}</button>
    </div>
  )
}

export default Cart