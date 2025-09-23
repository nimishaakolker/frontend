import { useEffect, useState } from "react"

export default function Joke(){
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup : jsonResponse.setup, punchline : jsonResponse.punchline})
    }

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch (URL);
            let jsonResponse = await response.json();
            setJoke({setup : jsonResponse.setup, punchline : jsonResponse.punchline});
        }
        getFirstJoke();
    }, [])

    return(
        <>
        <h3>Joke🤣</h3>
        <b>{joke.setup} <br />
        {joke.punchline}
        </b> 
        <br />
        <button onClick={getNewJoke}>New Joke</button>
        </>
    )
}