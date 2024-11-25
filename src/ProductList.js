
import ProductCard from "./ProductCard";

function ProductList({ products }) {

    return (
        <>
            <div>
                {products.map((product) => (
                    <ProductCard
                        id = {product.id}
                        name = {product.name}
                        price = {product.price}
                        description = {product.description}
                    />

                ))
                }
            </div>
        </>
    );
}

export default ProductList