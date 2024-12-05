import Card from "./Card"

const ItemCard = (props) => {
  const {item}=props
  console.log(item)
  return (
    <div className="">
    <h1 className="text-center text-4xl text-red-500 font-bold  mt-10">{item.card}</h1>
    <div  className="flex justify-evenly w-[60%] mx-auto flex-wrap">
    {
      item.list.map((card)=>{
        return <Card key={card.id} card={card}/>
      })
    }
    </div>
    </div>
  
  )
}

export default ItemCard