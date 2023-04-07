import Header from "../components/Header";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { CaretDoubleLeft, CaretLeft, CaretRight, CaretDoubleRight } from "@phosphor-icons/react";

export default function App() {
    const [page, setPages] = useState(1)
	const [control, setControl] = useState()
	const [prev, setPrev] = useState(false)
	const [next, setNext] = useState(true)
	const [cards, setCards] = useState([])
	
	
	useEffect(() => {
		document.body.classList.remove("bg-background-galaxy", "bg-citadelofRicks", "bg-background-house")
		document.body.classList.add("bg-background-house")

        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((e) => e.json())
            .then((e) => {
                setCards(e.results); 
                setControl(e.info)
                if(e.info.prev != null){
                    setPrev(true)
                }
                else setPrev(false)
                if(e.info.next != null){
                    setNext(true)
                }
                else setNext(false)
            })
		}, [page])
		
		return (
			<main className="">
			<Header />

			<section className="mx-auto max-w-5xl bg-white mt-20 p-8 flex flex-wrap justify-between gap-y-10 gap-x-3">
				{
					cards.map((card, key) => {
						return <Card info={card} key={key}/>
					})
				}
				
			</section>

			<div className="w-full flex justify-center my-8 px-4 py-2 bg-white gap-3">
				{
					prev && (
						<>
							<button 
								onClick={()=> {
									setPages(1)}
								}
								className="w-6 h-6 p border-2 border-lime-400 flex justify-center items-center"
								>
								<CaretDoubleLeft size={16}/>
							</button>
							<button 
								onClick={()=> {
									setPages(control.prev.toString().split("=")[1])}
								}
								className="w-6 h-6 p border-2 border-lime-400 flex justify-center items-center"
							>
								<CaretLeft size={16}/>
							</button>
						</>
					)
				}
				{
					next && (
						<>
							<button onClick={
								()=> {
									setPages(control.next.toString().split("=")[1])}
								}
								className="w-6 h-6 p border-2 border-lime-400 flex justify-center items-center"
							>
								<CaretRight size={16}/>
							</button>
							<button onClick={
								()=> {setPages(control.pages)}}
								className="w-6 h-6 p border-2 border-lime-400 flex justify-center items-center"
							>
								<CaretDoubleRight size={16}/>
							</button>
						</>
					)
				}	
			</div>
		</main>
	);
}
