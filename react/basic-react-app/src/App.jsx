import "./App.css"
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Msg from "./MsgBox.jsx"
function App() {
  return (
    <div>
      <Title></Title>
      <ProductTab />
      <Msg username="aloo" textColor="orange" />
    </div>
  )


 }

export default App;
