/* eslint-disable react/prop-types */
const PopUpItems = ({ item }) => {
    const totalAmt = (Number(item.price) * item.amount).toFixed(2);
    return (
        <li className="flex items-center gap-4 py-4 border-b border-rose-100">
            <div className="w-14 rounded-lg overflow-hidden">
                <img src={item.image.thumbnail} alt={item.name} />
            </div>
            <div>
                <div>
                    <p className="text-rose-900 font-fw-normal">{item.name}</p>
                    <div className="flex items-center gap-5">
                        <p className="text-Red font-fw-bold">{item.amount}x</p>
                        <div className="flex items-center gap-2">
                            <p className="text-rose-400 font-fw-light">
                                @ ${item.price.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-2xl text-rose-900 font-fw-normal ml-auto">${totalAmt}</p>
        </li>
    );
};

export default PopUpItems;
