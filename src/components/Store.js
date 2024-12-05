import Header from "./Header"
import { cardlist } from "../utils/cardData"
import ItemCard from "./ItemCard"

const Store = () => {
  return (
    <div>
        <Header/>
        {
            cardlist.map((item)=>{
                return <ItemCard item={item}/>
            })
        }
       
    </div>
  )
}

export default Store