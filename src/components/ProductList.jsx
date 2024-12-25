import Heading from "./Heading";
import Product from "./Product";

/* eslint-disable react/prop-types */
const ProductList = ({ productData, onAddProduct, addedItems }) => {
    return (
        <div className="lg:col-start-1 lg:col-end-3">
            <Heading>Desserts</Heading>
            <ul className="grid lg:grid-cols-3 lg:gap-x-4">
                {productData.map((product, i) => (
                    <Product
                        product={product}
                        key={i}
                        addedItems={addedItems}
                        onAddProduct={onAddProduct}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
