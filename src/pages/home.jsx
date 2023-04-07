import Header from "../components/Header";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { CaretDoubleLeft, CaretLeft, CaretRight, CaretDoubleRight } from "@phosphor-icons/react";

export default function App() {
    const [page, setPages] = useState(1)
	const [control, setControl] = useState()
	const [prev, setPreve] = useState(false)
	const [next, setNext] = useState(true)

	document.body.classList.add("bg-background-house")

	return (
		<main className="">
			<Header />

			<section className="mx-auto max-w-5xl bg-white mt-20 p-8 flex flex-wrap justify-between gap-y-10 gap-x-3">
				<Card page={page} info={setControl} prev={setPreve} next={setNext}/>
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
