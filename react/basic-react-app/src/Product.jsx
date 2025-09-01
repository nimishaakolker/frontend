import "./Product.css"
function Product( {title, price = 1, features }) {
    let styles = {backgroundColor : price > 30000 ? "teal" : null}
    // let styles = {color : price > 2000 ? "teal" : "red"}
    return (
        <div className="Product" style={styles}>
            <h3>{ title }</h3>
            <p>{ price }</p>
            {features.map((el)=> <li>{el}</li>)}
            {price > 20000 && <p>Discount : 5% </p>}
            {price < 200000 ? <b>Don't miss it</b>: null}
        </div>
    )
}

export default Product;