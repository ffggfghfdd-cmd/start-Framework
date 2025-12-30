import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
        <>
         <footer>
            <div className="py-15 grid lg:grid-cols-3 text-white bg-slate-700">
                <div className="text-center">
                    <h1 className="font-bold text-xl">LOCATION</h1>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className=" flex flex-col text-center gap-3">
                    <h1 className="font-bold text-xl">AROUND THE WEB</h1>
                    <li className="flex gap-3 justify-center ">
                        <ul className="w-10 h-8 rounded-full border "><FontAwesomeIcon icon={faFacebook} /></ul>
                        <ul className="w-10 h-8 rounded-full border "><FontAwesomeIcon icon={faTwitter} /></ul>
                        <ul className="w-10 h-8 rounded-full border "><FontAwesomeIcon icon={faLinkedin} /></ul>
                        <ul className="w-10 h-8 rounded-full border "><FontAwesomeIcon icon={faGlobe} /></ul>
                    </li>
                </div>
                <div className="text-white text-center">
                    <h1 className="font-bold text-xl">ABOUT FREELANCER</h1>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>

            <div className="text-center py-6 bg-slate-800 text-white">
                <p>
                    Copyright © Your Website 2021
                </p>
            </div>
         </footer>
        </>
    )
    
}