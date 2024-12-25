import AddToCartButton from "./AddToCartButton";

/* eslint-disable react/prop-types */
function Product({ product, onAddProduct, addedItems }) {
    const p = [...addedItems].filter((item) => item.name === product.name);
    let amt = 0;
    if (p.length > 0) {
        amt = p[0].amount;
    }
    return (
        <li className="my-8 lg:my-4">
            <div className={`relative rounded-lg ${amt > 0 ? "border-2 border-Red" : ""}`}>
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={product.image.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={product.image.tablet}
                    />
                    <img
                        src={product.image.mobile}
                        alt={product.name}
                        className="rounded-lg"
                    />
                </picture>
                <AddToCartButton
                    addedItems={addedItems}
                    onAddProduct={onAddProduct}
                    product={product}
                />
            </div>
            <div className="mt-8">
                <p className="text-rose-400 font-fw-light text-sm">
                    {product.category}
                </p>
                <p className="text-rose-900 font-fw-normal">{product.name}</p>
                <p className="text-base text-Red font-fw-normal">
                    ${product.price.toFixed(2)}
                </p>
            </div>
        </li>
    );
}

export default Product;
