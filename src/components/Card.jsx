import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Heart, Skull, X } from "@phosphor-icons/react";


export default function Card({ page, info, prev, next }) {
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((e) => e.json())
            .then((e) => {
                setCard(e.results); 
                info(e.info)
                if(e.info.prev != null){
                    prev(true)
                }
                else prev(false)
                if(e.info.next != null){
                    next(true)
                }
                else next(false)
            })
    }, [page])

    const [card, setCard] = useState([])

    return (
        <>
            {
                card.map((card, key) => {
                    return (
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <div className="flex items-center flex-col w-40 p-2" key={key}>
                                    <div className="w-40 h-40 rounded-md overflow-hidden">
                                        <img src={card.image} alt={card.name} className="object-cover" />
                                    </div>
                                    <span>
                                        {
                                            card.name
                                        }
                                    </span>
                                </div>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="bg-black/50 fixed inset-0" />
                                <Dialog.Content className="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
                                    <div className="flex gap-6">
                                        <div className="w-90 h-90">
                                            <img src={card.image} className="object-cover"/>
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <Dialog.Title className="text-mauve12 mb-4 text-2xl font-semibold">
                                                {card.name}
                                            </Dialog.Title>
                                            <Dialog.Description className="text-base leading-normal flex flex-col gap-4">
                                                <div>
                                                    <span className="text-zinc-700">Gênero: </span>
                                                    <span className="font-semibold"> 
                                                        {
                                                            card.gender === "Male" ? "Maculino" : (card.gender === "Female" ? "Feminino" : "Não definido")
                                                        }
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-zinc-700">Status: </span>
                                                    <span className="font-semibold">
                                                        {
                                                            card.status == "Alive" ? <Heart weight="fill" color="red"/> : (card.status == "Dead" ? <Skull weight="fill" color="black"/> : "???")
                                                        }
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-700">Espécie: </span>
                                                    <span className="font-semibold">
                                                        {
                                                            card.species
                                                        }
                                                    </span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <span className="text-zinc-700">Episódio: </span>
                                                    <div className="flex gap-4">
                                                        <span className="font-semibold">
                                                            {
                                                                card.episode.toString().split(",")[0].split("/")[5]
                                                            }
                                                        </span>
                                                        {
                                                            card.episode.toString().split(",").length > 1 && <a href="#" className="underline text-lime-700">ver mais</a>
                                                        }
                                                    </div>
                                                </div>
                                            </Dialog.Description>

                                        </div>
                                    </div>
                                    <Dialog.Close asChild>
                                        <button
                                            className="text-black absolute top-6 right-6"
                                            aria-label="Close"
                                        >
                                        <X size={24}/>
                                        </button>
                                    </Dialog.Close>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    )
                })
            }
        </>
    )
}