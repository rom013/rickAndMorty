import { useNavigate } from "react-router-dom"
import portal from "../img/rickAndMortyLogoPortal.gif"
import { useEffect } from "react"
export default function Loading(){

    const navigate = useNavigate()

    // useEffect(()=>{
    //     setInterval(()=>{
    //         navigate("/home")
    //     }, 5000)
    // },[])

    return (
        <main className="h-screen w-full flex items-center justify-center bg-black">
            <div>
                <img src={portal} alt="" />
                <span className="absolute right-8 bottom-8 text-5xl text-white font-bold text-center">Loading ...</span>
            </div>
        </main>
    )
}