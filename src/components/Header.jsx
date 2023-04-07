import { useNavigate } from "react-router-dom"
import logo from "../img/rickAndMortyLogo.png"

export default function Header(){
    const navigate = useNavigate()

    return(
        <header className="px-10 py-4 bg-white w-full flex justify-between">
            <div className="w-28 h-16 cursor-pointer" onClick={()=>navigate("/home")}>
                <img src={logo} alt="logo" className="object-cover"/>
            </div>
            <nav className="flex items-center">
                <ul className="flex gap-4">
                    <li>
                        <a onClick={()=>{navigate("/episode")}} className="cursor-pointer">Episódios</a>
                    </li>
                    <li>
                        <a href="#">Locais</a>
                    </li>
                    <li>
                        <a onClick={()=>{navigate("/citadelofRicks")}} className="cursor-pointer">Cidadela dos ricks</a>
                    </li>
                    <li>
                        <a href="#" className="border-2 border-lime-400 rounded-md py-2 px-6 font-bold hover:bg-lime-300/30">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}