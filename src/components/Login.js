import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import LoginBody from "./LoginBody"

const Login = () => {
  const [login,setLogin]=useState(false)

  useEffect(()=>{
   const clearT= setTimeout(() => {
        setLogin(true)
    }, 5000);
    return ()=>{
      clearTimeout(clearT)
    }
  },[])
 
  return (
    <div className={login&&("bg-black h-screen")} >
       {!login&&(<><Header/><LoginBody/><Footer/></>)}
       
       {login&&<form  className="h-96 w-[25%] absolute mt-[10%] ml-[35%] bg-[#56CCF2] flex flex-col  mx-auto rounded-lg">
        <span className={"right-1 text-xl mr-2 p-2 text-white absolute cursor-pointer"} onClick={()=>setLogin(false)}>X</span>
          <h1 className="p-4 text-2xl font-bold">Login</h1>
          <input className="p-3 w-[95%] m-2" placeholder="Name"></input>
          <input className="p-3 w-[95%] m-2" placeholder="Email"></input>
          <input className="p-3 w-[95%] m-2" placeholder="Password"></input>
          <button className="bg-black text-white py-4 w-[95%] m-2 text-lg font-bold rounded-sm bg-gradient-to-r from-[#3e98b6]">Submit</button>
          <div className="mt-2">
            <span className="p-2 text-gray-500 ">Already have an account?</span>
            <span className=" border-b-[1px] text-white cursor-pointer ">Signup</span>
          </div>
       </form>}
      
    </div>
  )
}

export default Login