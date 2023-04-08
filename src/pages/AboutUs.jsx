import { useEffect } from "react";
import Header from "../components/Header";
import logo from "../img/rickAndMortyLogo.png"
import { Play } from "@phosphor-icons/react";
import rick from "../img/rickProfile.png"
import morty from "../img/mortyProfile.webp"
import summer from "../img/summerSmith.png"
import beth from "../img/BethSmith.png"
import jerry from "../img/JerrySmith.png"
import morty2 from "../img/MortySmith.png"
import rick2 from "../img/RickSanchez.png"

export default function AboutUs() {
    useEffect(() => {
        document.body.classList.remove("bg-background-galaxy", "bg-citadelofRicks", "bg-background-house")
        document.body.classList.add("bg-zinc-900")
    }, [])

    const scrollToAnchor = (anchorId) => {
        const anchor = document.getElementById(anchorId);
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main>
            <Header />

            <section className="bg-banner w-full h-[80vh] bg-cover bg-fixed relative">
                <div className="absolute top-1/2 left-16 -translate-y-1/2 w-96 flex flex-col items-center">
                    <img src={logo} alt="logo" className="w-full object-cover" />

                    <div className="flex gap-6">
                        <a href="https://www.hbomax.com/br/pt/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ" target="_blank" className="btn-banner">
                            <Play weight="fill" /> Assistir
                        </a>
                        <div className="btn-banner" onClick={() => scrollToAnchor('1')}>
                            Conhecer
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-center text-white" id="1">
                <div className="mb-8">
                    <h3 className="line-title text-2xl font-bold mb-6">Sobre a série</h3>
                    <p>
                        Rick and Morty é uma série animada de comédia e ficção científica criada por Justin Roiland e Dan Harmon. A série estreou em 2013 e atualmente conta com seis temporadas, além de vários episódios especiais.
                    </p>
                    <p>
                        A trama segue as aventuras de Rick Sanchez, um cientista brilhante, alcoólatra e egocêntrico, e seu neto Morty Smith, um adolescente inseguro e tímido. Juntos, eles viajam para outras dimensões e planetas, onde encontram criaturas estranhas, enfrentam perigos mortais e vivem experiências inusitadas.
                    </p>
                    <p>
                        A série é conhecida por seu humor irreverente e muitas vezes sombrio, assim como por sua narrativa complexa e cheia de referências à cultura pop e à ficção científica. Além disso, a série aborda temas profundos, como depressão, isolamento, relacionamentos tóxicos e existencialismo, em meio a todo o caos e absurdo que permeia as aventuras de Rick e Morty.
                    </p>
                    <p>
                        A série também ganhou popularidade por sua comunidade de fãs engajados e criativos, que produzem arte, teorias e até mesmo jogos inspirados na série. Rick and Morty é uma série única e inovadora que conquistou uma legião de fãs fiéis em todo o mundo.
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="line-title text-2xl font-bold mb-10">Protagonistas</h3>

                    <div className="flex gap-8 items-center justify-center">
                        <div className="w-80 flex items-center flex-col gap-6 group">
                            <div className="frame-profile group-hover:shadow-neon">
                                <img src={rick} alt="rick sanchez" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-center font-bold text-2xl">
                                Rick Sanchez
                            </span>
                            <p className="text-center">
                                Rick é um cientista brilhante e instável, o avô de Morty, que leva o neto em aventuras interdimensionais, muitas vezes sem se preocupar com as consequências, e é conhecido por sua personalidade egocêntrica, sarcástica e auto-destrutiva.
                            </p>
                        </div>

                        <span className="text-3xl text-lime-400">And</span>

                        <div className="w-80 flex items-center flex-col gap-6 group">
                            <div className="frame-profile group-hover:shadow-neon">
                                <img src={morty} alt="rick sanchez" className="w-full h-full object-contain rotate-y-180" />
                            </div>
                            <span className="text-center font-bold text-2xl">
                                Morty Smith
                            </span>
                            <p className="text-center">
                                Morty é um adolescente tímido, inseguro e muitas vezes arrastado pelo seu avô Rick em aventuras interdimensionais, mas ainda assim é corajoso e leal, e frequentemente responsável por salvar o dia com sua astúcia e habilidades de sobrevivência.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="line-title text-2xl font-bold mb-10">Família Smith</h3>

                    <div className="flex gap-8 items-center justify-center flex-wrap">
                        <div className="w-80 flex items-center flex-col gap-6 group">
                            <div className="frame-profile group-hover:shadow-neon">
                                <img src={rick2} alt="rick sanchez" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-center font-bold text-2xl">
                                Rick Sanchez
                            </span>
                        </div>

                        <div className="w-80 flex items-center flex-col gap-6 group">
                            <div className="frame-profile group-hover:shadow-neon">
                                <img src={morty2} alt="rick sanchez" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-center font-bold text-2xl">
                                Morty Smith
                            </span>
                        </div>
                        <div className="w-80 flex items-center flex-col gap-6 group">
                            <div className="frame-profile group-hover:shadow-neon">
                                <img src={beth} alt="Beth Smith" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-center font-bold text-2xl">
                                Beth Smith
                            </span>
                            <p className="text-center">
                                Mãe
                            </p>
                        </div>

                        <div className="w-80 flex items-center flex-col gap-6 group">
                            <div className="frame-profile group-hover:shadow-neon">
                                <img src={jerry} alt="Jerry Smith" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-center font-bold text-2xl">
                                Jerry Smith
                            </span>
                            <p className="text-center">
                                Pai
                            </p>
                        </div>
                        <div className="w-80 flex items-center flex-col gap-6 group">
                            <div className="frame-profile group-hover:shadow-neon">
                                <img src={summer} alt="Summer Smith" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-center font-bold text-2xl">
                                Summer Smith
                            </span>
                            <p className="text-center">
                                Irmã
                            </p>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}