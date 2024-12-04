import Header from "./Header"

const Store = () => {
  return (
    <div>
        <Header/>
        <h1 className="text-center text-4xl font-bold">Music</h1>
        <div className="flex justify-evenly w-[40%] mx-auto flex-wrap">
            
           <div className="p-2">
           <h1 className="text-center p-2 text-2xl font-semibold">Album 1</h1>
            <img alt="img" className="w-[250px]" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"></img>
            <div className="flex justify-between">
                <h2 className="text-lg mt-2">$12.99</h2>
                <button className="bg-[#56CCF2] my-1 p-2 text-white font-bold">ADD TO CART</button>
            </div>
           </div>
           <div className="p-2">
           <h1 className="text-center p-2 text-2xl font-semibold">Album 2</h1>
            <img alt="img" className="w-[250px]" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"></img>
            <div className="flex justify-between">
                <h2>$12.99</h2>
                <button className="bg-[#56CCF2] my-1 p-2 text-white font-bold">ADD TO CART</button>
            </div>
           </div>
           <div className="p-2">
           <h1 className="text-center p-2 text-2xl font-semibold">Album 3</h1>
            <img alt="img" className="w-[250px]" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"></img>
            <div className="flex justify-between">
                <h2>$12.99</h2>
                <button className="bg-[#56CCF2] my-1 p-2 text-white font-bold">ADD TO CART</button>
            </div>
           </div>
           <div className="p-2">
           <h1 className="text-center p-2 text-2xl font-semibold">Album 4</h1>
            <img alt="img" className="w-[250px]" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"></img>
            <div className="flex justify-between">
                <h2>$12.99</h2>
                <button className="bg-[#56CCF2] my-1 p-2 text-white font-bold">ADD TO CART</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Store