import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  avataaars from'../assets/avataaars.svg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
    return (
        <>
        
        <div className='py-15 bg-teal-400 flex flex-col gap-3 justify-center items-center'>
            <div className='w-1/5 '>
                <img className='w-full' src={avataaars} alt="" />
            </div>
            <h1 className='uppercase text-white font-bold  text-2xl'>start Framework</h1>
            
            <div className='flex gap-4 items-center '>
            <div className='h-1 w-15 bg-white'></div>
            <FontAwesomeIcon icon={faStar} className='text-white'/>
            <div className='h-1 w-15 bg-white'></div>

            </div>
           <p className='text-white text-center text-xl'>Graphic Artist - Web Designer - Illustrator</p>
           </div>
        
        </>
    )
    
}