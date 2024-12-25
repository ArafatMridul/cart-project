/* eslint-disable react/prop-types */
import cakeImg from "../assets/images/illustration-empty-cart.svg";
import treeImg from "../assets/images/icon-carbon-neutral.svg";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";

const Cart = ({ addedItems, setAddedItems, setConfirm }) => {
    const numOfCartItems = addedItems.reduce(
        (acc, item) => acc + item.amount,
        0
    );
    const isEmpty = numOfCartItems === 0;

    return (
        <div className="flex flex-col h-fit p-6 lg:px-8 lg:py-12 bg-white rounded-lg lg:col-start-3 lg:col-end-4">
            {isEmpty ? (
                <>
                    <h2 className="text-2xl text-Red font-fw-bold">
                        Your Cart ({numOfCartItems})
                    </h2>
                    <img
                        src={cakeImg}
                        alt="empty-cart"
                        className="mx-auto mt-10"
                    />
                    <p className="mt-6 text-sm text-rose-500 text-center font-fw-normal">
                        Your added items will appear here
                    </p>
                </>
            ) : (
                <>
                    <h2 className="text-2xl text-Red font-fw-bold">
                        Your Cart ({numOfCartItems})
                    </h2>
                    <ul className="flex flex-col py-6">
                        {addedItems
                            .filter((item) => item.amount !== 0)
                            .map((cartItem) => (
                                <CartItem
                                    cartItem={cartItem}
                                    setAddedItems={setAddedItems}
                                    key={cartItem.name}
                                />
                            ))}
                    </ul>
                    <TotalPrice addedItems={addedItems} />
                    <div className="flex items-center justify-center gap-2 my-8 bg-rose-100 p-4">
                        <img src={treeImg} alt="tree" />{" "}
                        <p className="text-rose-900 font-fw-light">
                            This is a{" "}
                            <span className="font-fw-normal">
                                carbon-neutral
                            </span>{" "}
                            delivary
                        </p>
                    </div>
                    <button
                        className="h-14 bg-Red rounded-full text-rose-50 text-lg font-fw-normal"
                        onClick={() => {
                            document.documentElement.scrollTop = 0;
                            setConfirm((pv) => !pv);
                        }}
                    >
                        Confirm Order
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
