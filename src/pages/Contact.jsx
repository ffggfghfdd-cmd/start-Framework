import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <>
        
        <div className="py-10">
            <div className=" flex flex-col gap-3 justify-center items-center text-sky-950">
            <h1 className='uppercase  font-bold  text-4xl'>conatct section</h1>
            <div className="flex gap-4 items-center ">
                <div className='h-1 w-15 bg-sky-950'></div>
              <FontAwesomeIcon icon={faStar} />
              <div className='h-1 w-16 bg-sky-950'></div>
              </div>
            </div>
        
                 <div className="w-full max-w-xl mx-auto p-8">
      <form className="space-y-10">
        
        <div className="relative border-b border-gray-300 focus-within:border-teal-500 transition-colors duration-300">
          <label className="block text-teal-600 text-sm mb-2">userName :</label>
          <input 
            type="text" 
            placeholder="userName"
            className="w-full pb-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        
        <div className="relative border-b border-gray-300 focus-within:border-teal-500 transition-colors duration-300">
          <label className="block text-teal-600 text-sm mb-2">userAge :</label>
          <input 
            type="number" 
            placeholder="userAge"
            className="w-full pb-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        
        <div className="relative border-b border-gray-300 focus-within:border-teal-500 transition-colors duration-300">
          <label className="block text-teal-600 text-sm mb-2">userEmail :</label>
          <input 
            type="email" 
            placeholder="userEmail"
            className="w-full pb-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

       
        <div className="relative border-b border-gray-300 focus-within:border-teal-500 transition-colors duration-300">
          <label className="block text-teal-600 text-sm mb-2">userPassword :</label>
          <input 
            type="password" 
            placeholder="userPassword"
            className="w-full pb-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        
        <button 
          type="submit" 
          className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out shadow-sm"
        >
          send Message
        </button>

      </form>
    </div>
            </div>
        </>
    )
    
}