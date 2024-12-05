import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/mealSlice";

 const Card = (props) => {
  const {card}=props;
  const dispatch=useDispatch();
  const cardItem=useSelector((store)=>store.meal.items)

  const cardHandler=()=>{
     
      for(let i=0;i<cardItem.length;i++){
          if(cardItem[i].name===card.name){
              alert("Already item added to the cart");
              return;
          }
           
      }
      dispatch(addItem({name:card.name,img:card.img,price:card.price}))
  }
    
  return (
    <div>
        <div>
        <div className="p-10">
           <h1 className="text-center p-2 text-2xl font-semibold">{card.name}</h1>
            <div className="overflow-hidden rounded-lg">
             <img alt="img" className="w-[250px] shadow-lg  duration-500 hover:scale-150 hover:ease-in hover:opacity-90 " src={card.img}></img>
           </div>
            <div className="flex justify-between">
                <h2 className="text-lg mt-2">{card.price}</h2>
                <button className="bg-[#56CCF2] my-1 p-2 text-white font-bold rounded-lg shadow-lg" onClick={cardHandler}>ADD TO CART</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Card