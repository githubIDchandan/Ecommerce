import Header from "./Header"
import { cardlist } from "../utils/cardData"
import ItemCard from "./ItemCard"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Store = () => {
  const cardItem=useSelector((store)=>store.meal.items);
  const [view ,setView]=useState(true);
   useEffect(()=>{
    let clr;
    setView(true)
        if(cardItem.length>0){
           clr=setTimeout(() => {
            setView(false)
      }, 2000);
        
        }
        return ()=>{
          clearInterval(clr)
          
         }
   },[cardItem])

  return (
    <div className="">
        <Header/>
       {view&&cardItem.length? <div className="bg-[#56CCF2] w-[350px] fixed bottom-0 right-0 mb-5 mr-10 h-16 flex justify-center  items-center ">
        <h1 className=" font-bold">Your product:<span className="text-red-600">T-Shirts</span> added to your cart</h1>
        </div>:""}
<div className="relative">
  
{
            cardlist.map((item)=>{
                return <ItemCard key={item.id} item={item}/>
            })
        }
      
</div>
    </div>
  )
}

export default Store