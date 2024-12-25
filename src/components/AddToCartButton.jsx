import iconCart from "../assets/images/icon-add-to-cart.svg";

/* eslint-disable react/prop-types */
const AddToCartButton = ({ addedItems, onAddProduct, product }) => {
    const p = [...addedItems].filter((item) => item.name === product.name);
    let amt = 0;
    if (p.length > 0) {
        amt = p[0].amount;
    }

    function handleAddToCart() {
        onAddProduct((prevAddedItems) => {
            const existingItemIndex = prevAddedItems.findIndex(
                (item) => item.name === product.name
            );

            if (existingItemIndex !== -1) {
                return prevAddedItems.map((item, index) =>
                    existingItemIndex === index
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            } else {
                return [...prevAddedItems, { ...product, amount: 1 }];
            }
        });
    }

    function handleAdd() {
        onAddProduct((prevAddedItems) => {
            const existingItemIndex = prevAddedItems.findIndex(
                (item) => item.name === product.name
            );

            if (existingItemIndex !== -1) {
                return prevAddedItems.map((item, index) =>
                    existingItemIndex === index
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            } else {
                return [...prevAddedItems, { ...product, amount: 1 }];
            }
        });
    }

    function handleMinus() {
        onAddProduct((prevAddedItems) => {
            const existingItemIndex = prevAddedItems.findIndex(
                (item) => item.name === product.name
            );

            if (existingItemIndex !== -1) {
                return prevAddedItems.map((item, index) =>
                    existingItemIndex === index
                        ? { ...item, amount: item.amount - 1 }
                        : item
                );
            } else {
                return [...prevAddedItems, { ...product, amount: 1 }];
            }
        });
    }

    return amt === 0 ? (
        <div
            className="w-[160px] h-[45px] flex items-center justify-center gap-2 bg-white p-2 border border-rose-400 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer group"
            onClick={handleAddToCart}
        >
            <img src={iconCart} alt="cart-icon" />
            <p className="text-rose-900 font-fw-normal text-sm group-hover:text-Red transition-colors duration-300">
                Add to Cart
            </p>
        </div>
    ) : (
        <div className="w-[160px] h-[45px] flex items-center justify-between gap-2 bg-Red p-2 border border-Red rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transition-all">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
                className="border rounded-full p-[2px] h-5 w-5 cursor-pointer group hover:bg-white"
                onClick={handleMinus}
            >
                <path
                    fill="#fff"
                    d="M0 .375h10v1.25H0V.375Z"
                    className="group-hover:fill-Red"
                />
            </svg>
            <p className="font-fw-normal text-lg text-rose-50 cursor-default">
                {amt}
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
                className="border rounded-full p-[2px] h-5 w-5 cursor-pointer group hover:bg-white"
                onClick={handleAdd}
            >
                <path
                    fill="#fff"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    className="group-hover:fill-Red"
                />
            </svg>
        </div>
    );
};

export default AddToCartButton;
