import Footer from "./Footer"
import Header from "./Header"

const LoginBody = () => {
  return (
    <> <Header/>
    <div className="top-20 relative">
        <div className="bg-gray-400 h-[330px] mt-[2px] flex flex-col  items-center">
        <div className=" text-8xl font-bold text-white">The Generics</div>
        <div className="text-4xl mt-8 text-white border border-blue-100 p-4 rounded-sm">Get Our Latest Album</div>
        <div><button className="text-5xl mt-10 text-white">▶️</button></div>
    </div>
       <div className="w-[800px] mx-auto">
       <div className="">
        <h1 className=" mt-2 text-4xl font-bold font-serif text-center">Tours</h1>
        <div className=" border-b-2 border-gray-400 mx-auto w-[600px]  text-gray-500 p-1 hover:opacity-10 flex">
            <span className="p-2 w-[70px] block ">JUL16</span>
            <span className="p-2 block w-[150px] ml-4  ">DETROIT, MI</span>
            <span className="p-2 block w-[250px]  ml-4">DTE ENERGY MUSIC THEATRE</span>
            <button className="bg-[#56CCF2]  text-white rounded-sm w-32 h-8 ml-4 font-bold">Buy Ticket</button>

        </div>
        <div className=" border-b-2 border-gray-400 w-[600px] mx-auto text-gray-500 p-1 hover:opacity-10 flex">
            <span className="p-2  block w-[70px] ">JUL 19</span>
            <span className="p-2 block w-[150px] ml-4">TORONTO,ON</span>
            <span className="p-2 block w-[250px] ml-4">BUDWEISER STAGE</span>
            <button className="bg-[#56CCF2] text-white rounded-sm w-32 h-8 ml-4 font-bold">Buy Ticket</button>

        </div>
        <div className=" border-b-2 border-gray-400 w-[600px] mx-auto text-gray-500 p-1 hover:opacity-10 flex">
            <span className="p-2 block w-[70px]">JUL 22</span>
            <span className="p-2 block w-[150px] ml-4">BRISTOW, VA</span>
            <span className="p-2 block w-[250px] ml-4">JIGGY LUBE LIVE</span>
            <button className="bg-[#56CCF2] text-white rounded-sm w-32 h-8 ml-4 font-bold">Buy Ticket</button>

        </div>
        <div className=" border-b-2 border-gray-400 w-[600px] mx-auto text-gray-500 p-1 hover:opacity-10 flex">
           <span className="p-2 block w-[70px]">JUL 29</span>
            <span className="p-2 block w-[150px] ml-4">PHOENIX, AZ</span>
            <span className="p-2 block w-[250px] ml-4">AK-CHIN PAVILION</span>
            <button className="bg-[#56CCF2] text-white rounded-sm w-32 h-8 ml-4 font-bold">Buy Ticket</button>

        </div>
         <div className=" border-b-2 border-gray-400 w-[600px] mx-auto text-gray-500 p-1 hover:opacity-10 flex">
           <span className="p-2 block w-[70px]">AUG 2</span>
            <span className="p-2 block w-[150px] ml-4">LAS VEGAS, NV</span>
            <span className="p-2 block w-[250px] ml-4">T-MOBILE ARENA</span>
            <button className="bg-[#56CCF2] text-white rounded-sm w-32 h-8 ml-4 font-bold">Buy Ticket</button>

        </div>
        <div className=" border-b-2 border-gray-400 w-[600px] mx-auto text-gray-500 p-1 hover:opacity-10 flex">
            <span className="p-2 block w-[70px]">AUG 7</span>
            <span className="p-2 block w-[150px] ml-4">CONCORD, CA</span>
            <span className="p-2 block w-[250px] ml-4">CONCORD PAVILION</span>
            <button className="bg-[#56CCF2] text-white rounded-sm w-32 h-8 ml-4 font-bold">Buy Ticket</button>

        </div>
    </div>
       </div>
       <Footer/>
    </div>
    
    </>
  )
}

export default LoginBody