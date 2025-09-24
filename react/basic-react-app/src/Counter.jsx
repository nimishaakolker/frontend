import { useEffect, useState } from "react"

export default function Counter() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let incCount1 = () => {
        setCount1((currCount) => (currCount + 1))
    }

    let incCount2 = () => {
        setCount2((currCount) => (currCount + 1))
    }
    useEffect(function printHi(){
        console.log("hii")
    },[count2])
    return(
        <>
        {count1} <br />
        <button onClick={incCount1}>Count +</button>
        <hr />
                {count2} <br />
        <button onClick={incCount2}>Count +</button>
        </>
    )
}