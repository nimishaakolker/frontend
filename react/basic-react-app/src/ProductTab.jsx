import Product from "./Product.jsx"
function ProductTab(){
    return(
        <div>
            < Product title="Phone" price={700000} features={['fast','hi-tech']}/>
            < Product title="Laptop" price={3000000} features={['i7','metallic body']}/>
            < Product title="Straightner" price={2000} features={['fast-heating','upto 72 hours']}/>
        </div>
    )
}

export default ProductTab;