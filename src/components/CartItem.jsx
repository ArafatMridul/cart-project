import iconRemove from "../assets/images/icon-remove-item.svg";

/* eslint-disable react/prop-types */
const CartItem = ({ cartItem, setAddedItems }) => {
    const totalAmt = (Number(cartItem.price) * cartItem.amount).toFixed(2);

    function handleRemove(e) {
        const targetName = e.target.alt;

        setAddedItems((prevAdditems) =>
            prevAdditems.filter((item) => item.name !== targetName)
        );
    }

    return (
        <li className="flex items-center justify-between border-b border-b-rose-100 py-6">
            <div>
                <p className="text-rose-900 font-fw-normal">{cartItem.name}</p>
                <div className="flex items-center gap-5">
                    <p className="text-Red font-fw-bold">{cartItem.amount}x</p>
                    <div className="flex items-center gap-2">
                        <p className="text-rose-400 font-fw-light">
                            @ ${cartItem.price.toFixed(2)}
                        </p>
                        <p className="text-rose-500 font-fw-normal">
                            ${totalAmt}
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={iconRemove}
                alt={cartItem.name}
                className="h-5 border-2 p-[2px] border-rose-300 rounded-full cursor-pointer"
                onClick={(e) => handleRemove(e)}
            />
        </li>
    );
};

export default CartItem;
