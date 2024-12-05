import Card from "./Card"

const ItemCard = (props) => {
  const {item}=props
  console.log(item)
  return (
    <>
    <h1 className="text-center text-4xl font-bold">{item.card}</h1>
    <div  className="flex justify-evenly w-[60%] mx-auto flex-wrap">
    {
      item.list.map((card)=>{
        return <Card card={card}/>
      })
    }
    </div>
    </>
  
  )
}

export default ItemCard