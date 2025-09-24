import { useState } from "react";
import { genTicket, sum } from "./LotteryHelper";
import Ticket from "./Ticket";
 export default function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(3))
    let isWinning = winCondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(n))
    }

    return(
        <>
        <h1>Lottery Game 🎰</h1>
        <Ticket ticket={ticket}/>
        <button onClick={buyTicket}>🎰Buy New Ticket🎰</button>

       <b> {isWinning && "Congratulations You Won"}
        </b>
        </>
    )
 }
// export default function Lottery(){
//     let [winner, setWinner] = useState(false);
//     function generateTicket(){
//         let num = (Math.floor(Math.random() * 900) + 100);
//         let sum = 0;
//         let tempnum = num;
//         while(tempnum > 0){       
//           let rem =  tempnum % 10;
//             sum += rem;
//             tempnum = Math.floor(tempnum / 10);
//         }
//         console.log(num);
//         console.log(sum);
//         if(sum == 15){
//             console.log("Winner");
//             setWinner(true);
//         }

//     }
//     return( 
//         <>
//         <h1>Lottery</h1>

//         <button onClick={generateTicket}>
//             Generate Ticket</button>

//             {winner ? (
//                <b>Congratulations! You Won 🙌</b>
               
//             ) : (
//                 <p>Try again ✊</p>
//             )}
//         </>
//     )
// }