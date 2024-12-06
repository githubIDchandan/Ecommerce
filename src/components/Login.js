import { useEffect, useRef, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import LoginBody from "./LoginBody"
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";





const Login = () => {
  const [login,setLogin]=useState(false);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const navigate=useNavigate();

  const dispatch=useDispatch();

  // useEffect(()=>{
  //  const clearT= setTimeout(() => {
  //       setLogin(true)
  //   }, 5000);
  //   return ()=>{
  //     clearTimeout(clearT)
  //   }
  // },[])
 
  const formSubmitHandler=(e)=>{
      e.preventDefault();
      if(!login){
        
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => { 
               const user = userCredential.user;
               console.log(user)
              //  navigate("/store")
               
             })
            .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             
           });

      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                 const user = userCredential.user;
                 console.log(user)
                //  console.log("userName",user.name);
                //  dispatch(addUser(user))
                //  navigate("/store")
   
                 })
            .catch((error) => {
                   const errorCode = error.code;
                   const errorMessage = error.message;
                });
      }

  }

  const handleSignIn=()=>{
    console.log("true")
    setLogin(!login);
  }
console.log("ll",login)

  return (
    <div className={login&&("bg-black h-screen")} >
      
      {/* {!login&&(<><Header/><div className="relative top-20 z-10"><LoginBody/><Footer/></div></>)} */}
      <Header/>
       
      <form onSubmit={formSubmitHandler}  className="h-fit w-[25%] absolute mt-[10%] ml-[35%] bg-[#56CCF2] flex flex-col  mx-auto rounded-lg">
        <span className={"right-1 text-xl mr-2 p-2 text-white absolute cursor-pointer"} onClick={()=>setLogin(false)}>X</span>
          <h1 className="p-4 text-2xl font-bold">{login===true?"Login":"Sign Up"}</h1>
          {!login&&<input ref={name} className="p-3 w-[95%] m-2" placeholder="Name"></input>}
          <input ref={email} className="p-3 w-[95%] m-2" placeholder="Email"></input>
          <input ref={password} className="p-3 w-[95%] m-2" placeholder="Password"></input>
          <button className="bg-black text-white py-4 w-[95%] m-2 text-lg font-bold rounded-sm bg-gradient-to-r from-[#3e98b6]">Submit</button>
          <div className="mt-2 pb-6">
            <span className="p-2 text-gray-500 ">{login===false?"Already have an account?":"Create a new account : "}</span>
            <span className=" border-b-[1px] text-white cursor-pointer" onClick={handleSignIn}>{login===true?"Sing up":"Sign in"}</span>
          </div>
       </form>
     
      
    </div>
  )
}

export default Login