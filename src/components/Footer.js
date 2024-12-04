
const Footer = () => {
  return (
    <div className="bg-[#56CCF2] h-[55px] mt-2 flex">
        <h1 className=" ml-[20%] w-fit p-2 text-lg text-gray-600 inline-block">Made with {"❤️"} in India</h1>
        <div className=" flex justify-end w-[60%]">
            <h1 className="p-3 text-lg">Follow us</h1>
            <img alt="youtube" className="h-8 w-22 ml-1 mt-2 cursor-pointer rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"></img>
            <img alt="youtube" className="h-8 w-22 ml-4 mt-2 rounded-full cursor-pointer " src="https://upload.wikimedia.org/wikipedia/commons/0/06/Linkedin_circle_black-512.png"></img>
            <img alt="youtube" className="h-8 w-22 ml-5 mt-2 rounded-full cursor-pointer " src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"></img>
        </div>
    </div>
  )
}

export default Footer