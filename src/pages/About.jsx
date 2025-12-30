import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    return (
        <>
        
          <div className="py-52 bg-teal-400 flex flex-col gap-3 justify-center items-center">
            <h1 className="uppercase text-white font-bold  text-4xl">about component</h1>

            <div className="flex gap-4 items-center">
                <div className='h-1 w-15 bg-white'></div>
              <FontAwesomeIcon icon={faStar} className='text-white'/>
              <div className='h-1 w-15 bg-white'></div>
            </div>
            <div className="flex gap-6 text-white">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes
                    <br /> the complete source files including HTML, CSS, and JavaScript as well as
                    <br /> optional SASS stylesheets for easy customization.</p>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes 
                    <br />the complete source files including HTML, CSS, and JavaScript as
                    <br /> well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        
        </>
    )
    
}