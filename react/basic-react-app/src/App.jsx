import "./App.css"
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Msg from "./MsgBox.jsx"
import Button from "./Button.jsx";
import CardTab from "./CardTab.jsx";
import Count from "./Count.jsx";
import Like from "./Like.jsx";
import Ludo from "./Ludo.jsx";
import Todo from "./Todo.jsx"
import Lottery from "./Lottery.jsx";
import Form from "./Form.jsx"
import CommentsForm from "./CommentsForm.jsx";
import Comment from "./Comment.jsx";
import Counter from "./Counter.jsx";
import Joke from "./Joke.jsx";
import TicketNum from "./TicketNum.jsx";
import Ticket from "./Ticket.jsx";
import {sum} from "./LotteryHelper.js"
function App() {

  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
  //  return ticket.every((num) => num===ticket[0]);
  return ticket[0] === 0;
  }
  return (
    <div>
      {/* <Title></Title>
      <ProductTab />
      <Msg username="aloo" textColor="orange" /> */}
      {/* < Button/> */}
      {/* <Count/> */}
      {/* <Like/> */}
      {/* <Ludo /> */}
      {/* <Todo /> */}
      <Lottery n={3} winCondition = {winCondition}/>
  
      {/* <Form /> */}
      {/* <CommentsForm /> */}
      {/* <Comment/> */}
      {/* <Counter /> */}
      {/* <Joke/> */}
    </div>
  )}

export default App;
