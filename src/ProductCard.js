

function ProductCard({ id, name, price, description }) {

    return (
        <>
            <div className="product-card">
                <h1>{id}</h1>
                <h2>{name}</h2>
                <p>Price is : ${price}</p>
                <p>Description is :{description}</p>

            </div>
        </>
    );
}

export default ProductCard