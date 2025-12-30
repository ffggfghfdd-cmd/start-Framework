import { faPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon}from "@fortawesome/react-fontawesome";
import img1 from'../assets/poert1 (1).png'
import img2 from'../assets/poert1.png'
import img3 from'../assets/port2.png'
import { useState } from "react";



export default function Portflio() {

    const arr = [img1, img2, img3, img1, img2, img3,]
    const [selectedImg ,setselectedImg] = useState(false)

    return (
        <>
        <div className="py-10">
            <div className=" flex flex-col gap-3 justify-center items-center text-sky-950">
            <h1 className='uppercase  font-bold  text-4xl'>portfolio component</h1>
            <div className="flex gap-4 items-center ">
                <div className='h-1 w-15 bg-sky-950'></div>
              <FontAwesomeIcon icon={faStar} />
              <div className='h-1 w-16 bg-sky-950'></div>
              </div>
            </div>
            <div className=" container mx-auto grid grid-cols-1 gap-1 md:grid-cols-3 gap-6 p-5 ">
                {arr.map((img,index) =>( 
                    <div key={index} className="relative" onClick={()=>setselectedImg(img)}> 
                    <img src={img} alt="img" className="w-full " />
                    <div className="  absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-teal-500/60 opacity-0 hover:opacity-100 duration-700">
                        <FontAwesomeIcon icon={faPlus} className="text-white text-8xl" />
                    </div>
                  </div>))
                }
                {
                    selectedImg &&
                    <div className="fixed inset-0 top-0  left-0 bottom-0 right-0 bg-teal-500/60 flex justify-center items-center  " onClick={() => setselectedImg(null)}>
                    <img src={selectedImg} alt="selectedImg" className="w-[600px] "/>
                </div>
                }
           </div>
           </div>

        </>
    );
}