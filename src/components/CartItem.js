import { useState } from "react";
import { useSelector } from "react-redux"

const CartItem = ({item}) => {
    const cardItem=useSelector((store)=>store.meal.items);
  
    let c1=0
     for(let i=0;i<cardItem.length;i++){
       
        if(item.name===cardItem[i].name){
            c1++;
          
        }
     }
    
   return (
    <div>
    <div className="w-full flex mt-2 border-gray-300 border-b-2">
        <div className="w-[30%]  text-center p-2 m-1">
            {/* <h1 className="text-2xl font-bold border-black border-b-2">ITEM</h1> */}
            <img alt="img" className="mt-2 rounded-full border border-[#56CCF2]" src={item.img}></img>
        </div>
        <div className="w-[20%]  text-center m-1 p-2">
             {/* <h1 className="text-2xl font-bold border-black border-b-2">Price</h1> */}
             <h2 className=" mt-10 font-bold text-xl text-gray-500">{item.price}</h2>
        </div>
        <div className="w-[50%]  text-center  m-1 p-2">
          {/* <h1 className="text-2xl font-bold border-black border-b-2">Quantity</h1> */}
          <button className="mt-10 mx-2 border border-[#56CCF2] px-4">{c1}</button>
          <button className=" mt-10   shadow-2xl px-4 py-1 rounded-full bg-red-600 text-white hover:bg-black">Remove</button>
        </div>
    </div>
    </div>
  )
}

export default CartItem