
function printHello(event){
    console.log("Hello");
    console.log(event);
}

function hover(){
    console.log("hover");
}
export default function Button(){
    return (
        <div>
        <button onClick={printHello}>Click me!</button>
        <p onMouseOver={hover}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione id similique porro suscipit quaerat labore facilis tempora placeat, architecto nostrum est, eveniet quisquam, doloremque facere dolorum numquam perferendis?
        </p>
        </div>
    )
}

function printBye(){
    console.log("Byee!");
}