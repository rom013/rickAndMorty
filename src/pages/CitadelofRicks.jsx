import { useEffect } from "react"
import Header from "../components/Header"

export default function CitadelofRicks(){
    useEffect(()=>{
        document.body.classList.remove("bg-background-galaxy", "bg-citadelofRicks", "bg-background-house")
        document.body.classList.add("bg-citadelofRicks")
    },[])
    return(
        <main>
            <Header/>
        </main>
    )
}