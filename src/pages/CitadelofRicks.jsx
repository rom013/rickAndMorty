import { useEffect, useState } from "react"
import Header from "../components/Header"
import Card from "../components/Card"
import rickSanchez from "../img/rickSanchez.png"

export default function CitadelofRicks(){

    const [idCharacter, setIdCharacter] = useState([])
    const [characters, setCharacters] = useState([])
    const [show, setShow] = useState(false)

    useEffect(()=>{
        document.body.classList.remove("bg-background-galaxy", "bg-citadelofRicks", "bg-background-house")
        document.body.classList.add("bg-citadelofRicks")

        fetch("https://rickandmortyapi.com/api/location/3")
            .then(response => response.json())
            .then(response => setIdCharacter(response.residents))
    },[])

    useEffect(() => {
        Promise.all(
            idCharacter.map((id) => 
                fetch(id)
                    .then((response) => response.json())
            ))
            .then((responses) => {
                const newCharacters = characters.concat(responses)
                setCharacters(newCharacters)
            })
            .catch((error) => {
                console.error(error)
            })
      }, [idCharacter])

    return(
        <main>
            <Header/>

            <section className="mx-auto max-w-5xl bg-white my-20 p-8 flex flex-wrap justify-between gap-y-10 gap-x-3">
				{
                    
                    show && characters.map((character, key) => {
						return <Card info={character} key={key}/>
					})
				}
                {
                    !show && (
                        <div className="flex items-center gap-4">
                            <div className="w-60">
                                <img src={rickSanchez} alt="rick sanchez explicando" className="w-full object-cover drop-shadow-2xl"/>
                            </div>

                            <div className="flex-1 leading-relaxed">
                                <h3 className="mb-10 font-bold text-3xl pb-2 border-b-2 border-lime-400">Cidadela dos Ricks</h3>
                                <p className="mb-3">
                                    Bem, Morty, a Cidadela dos Ricks é basicamente um lugar onde Ricks de todas as dimensões se reúnem para trocar ideias e fazer negócios. É um centro de atividade para Ricks e Mortys de todos os cantos do multiverso.
                                </p>
                                <p className="mb-3">
                                    Mas não se deixe enganar pela aparência extravagante da Cidadela. Por trás de todas as luzes piscando e dos edifícios altos, existe uma política complexa e muitas vezes brutal. Há uma hierarquia de poder, com os Ricks mais fortes e mais astutos subindo para o topo.
                                </p>
                                <p className="mb-3">
                                    E, como você sabe, Morty, os Ricks não são exatamente conhecidos por serem os seres mais éticos ou gentis. A Cidadela pode ser um lugar fascinante para se visitar, mas também pode ser perigoso se você não sabe em quem confiar.
                                </p>
                                <p className="mb-3">
                                    Mas é claro, como um Rick experiente, eu sempre sei como lidar com essas situações. Bom, chega de enrolação e vamos conhecer a cidadela! Wubba lubba dub dub!
                                </p>

                                <button 
                                    className="bg-lime-400 rounded-lg py-2 px-6 mt-6 hover:bg-lime-500"
                                    onClick={()=> setShow(true)}
                                >
                                    Conhecer os residentes da cidadela
                                </button>
                            </div>
                        </div>
                    )
                }

				
			</section>
        </main>
    )
}




/*

    Bem, Morty, a Cidadela dos Ricks é basicamente um lugar onde Ricks de todas as dimensões se reúnem para trocar ideias e fazer negócios. É um centro de atividade para Ricks e Mortys de todos os cantos do multiverso.

Mas não se deixe enganar pela aparência extravagante da Cidadela. Por trás de todas as luzes piscando e dos edifícios altos, existe uma política complexa e muitas vezes brutal. Há uma hierarquia de poder, com os Ricks mais fortes e mais astutos subindo para o topo.

E, como você sabe, Morty, os Ricks não são exatamente conhecidos por serem os seres mais éticos ou gentis. A Cidadela pode ser um lugar fascinante para se visitar, mas também pode ser perigoso se você não sabe em quem confiar.

Mas é claro, como um Rick experiente, eu sempre sei como lidar com essas situações. Agora, vamos parar de falar sobre isso e continuar com nossa aventura interdimensional! Wubba lubba dub dub!

*/