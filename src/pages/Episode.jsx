import { useEffect, useState, memo } from "react"
import Header from "../components/Header"
import { useLocation } from "react-router-dom";

function Episode() {
    const [episodes, setEpisodes] = useState([]);
    const [episodesCharacter, setEpisodesCharacter] = useState([]);
    const [page, setPage] = useState("https://rickandmortyapi.com/api/episode")
    const [characterName, setCharacterName] = useState()

    const location = useLocation();
    const characterId = new URLSearchParams(location.search).get('character');

    useEffect(() => {
        document.body.classList.remove("bg-background-galaxy", "bg-citadelofRicks", "bg-background-house")
        document.body.classList.add("bg-background-galaxy")

        if (characterId !== null) {
            const arr = [...episodesCharacter]
            fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
                .then(res => res.json())
                .then(data => {
                    setCharacterName(data.name)
                    data.episode.forEach(ep => {
                        fetch(ep)
                            .then(e => e.json())
                            .then(e => {
                                arr.push(e)
                                setEpisodesCharacter(arr)
                            });
                    })
                })
        }

    }, [])

    useEffect(() => {
        fetch(page)
            .then(response => response.json())
            .then(data => {
                if (data.info.next != null) {
                    setPage(data.info.next)
                }
                const epUpdate = [...episodes]

                data.results.forEach(ep => {
                    epUpdate.push(ep);
                });

                setEpisodes(epUpdate)
            });
    }, [page])

    const seasons = {};
    if (characterId == null) {
        Object.values(episodes).map((episode) => {
            const match = episode.episode.match(/S(\d+)E/);
            if (match) {
                const season = match[1];
                if (!seasons[season]) {
                    seasons[season] = [];
                }
                seasons[season].push(episode);
            }
        });
    }

    return (
        <main>
            <Header />
            <div className="max-w-5xl mx-auto p-6 bg-black/70 flex flex-col gap-10 my-20">
                {
                    !characterId && Object.keys(seasons).map((season, i) => {
                        return (
                            <section className="flex flex-col gap-8">
                                <div>
                                    <h2 className="text-white font-bold text-2xl mb-6">
                                        {season}ª Temporada
                                    </h2>

                                    <div className="flex flex-wrap gap-x-4 gap-y-4">
                                        {
                                            Object.values(seasons)[i].map(episode => {
                                                return (
                                                    <div className="flex-1 bg-lime-500 px-6 py-2 rounded-lg flex flex-col min-w-[150px] max-w-[180px] items-center">
                                                        <span className="text-white">
                                                            Ep.
                                                            {
                                                                episode.episode.split("E")[1]
                                                            }
                                                        </span>
                                                        <span className="text-white text-center">{episode.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </section>
                        )
                    })
                }

                {
                    characterId && (
                        <>
                            <div className="flex items-center gap-2 text-white">
                                <h2 className="text-3xl text-lime-400 font-bold">
                                    {
                                        characterName
                                    }
                                </h2>
                                <p>
                                    esteve presente nos episódios:
                                </p>
                            </div>
                            <section className="flex gap-6 flex-wrap">
                                {
                                    episodesCharacter.map((e) => {
                                        return (
                                            <div className="flex-1 bg-lime-500 px-6 py-2 rounded-lg flex flex-col min-w-[150px] max-w-[180px] items-center">
                                                <span className="text-white">
                                                    {
                                                        e.episode
                                                    }
                                                </span>
                                                <span className="text-white text-center">{e.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </>
                    )
                }
            </div>
        </main>
    )
}

export default memo(Episode)