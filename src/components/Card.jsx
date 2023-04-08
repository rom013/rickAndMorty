import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Heart, Skull, X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";


export default function Card({ info, key }) {
    const navigate = useNavigate()

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <div className="flex items-center flex-col w-40 p-2">
                        <div className="w-40 h-40 rounded-md overflow-hidden">
                            <img src={info.image} alt={info.name} className="object-cover" />
                        </div>
                        <span>
                            {
                                info.name
                            }
                        </span>
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/50 fixed inset-0" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
                        <div className="flex gap-6">
                            <div className="w-90 h-90">
                                <img src={info.image} className="object-cover" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <Dialog.Title className="text-mauve12 mb-4 text-2xl font-semibold">
                                    {info.name}
                                </Dialog.Title>
                                <div className="text-base leading-normal flex flex-col gap-4">
                                    <div>
                                        <span className="text-zinc-700">Gênero: </span>
                                        <span className="font-semibold">
                                            {
                                                info.gender === "Male" ? "Maculino" : (info.gender === "Female" ? "Feminino" : "Não definido")
                                            }
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-zinc-700">Status: </span>
                                        <span className="font-semibold">
                                            {
                                                info.status == "Alive" ? <Heart weight="fill" color="red" /> : (info.status == "Dead" ? <Skull weight="fill" color="black" /> : "???")
                                            }
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-zinc-700">Espécie: </span>
                                        <span className="font-semibold">
                                            {
                                                info.species
                                            }
                                        </span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="text-zinc-700">Episódio: </span>
                                        <div className="flex gap-4">
                                            <span className="font-semibold">
                                                {
                                                    info.episode.toString().split(",")[0].split("/")[5]
                                                }
                                            </span>
                                            {
                                                info.episode.toString().split(",").length > 1 && <a onClick={()=> navigate(`/episode?character=${info.id}`)} className="underline text-lime-700 cursor-pointer">ver mais</a>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Dialog.Close asChild>
                            <button
                                className="text-black absolute top-6 right-6"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}