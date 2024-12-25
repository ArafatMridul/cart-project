/* eslint-disable react/prop-types */
import tickImg from "../assets/images/icon-order-confirmed.svg";
import PopUpItems from "./PopUpItems";
import TotalPrice from "./TotalPrice";

function PopUp({ addedItems, setAddedItems, setConfirm }) {
    return (
        <>
            <img src={tickImg} alt="tick" width={50} />
            <div>
                <h2 className="text-5xl text-rose-900 font-fw-bold w-[5ch] lg:w-full">
                    Order Confirmed
                </h2>
                <p className="text-lg mt-2">We hope you enjoy your food!</p>
            </div>
            <ul className="p-4 bg-rose-50 rounded-lg max-h-[180px] md:max-h-[300px] overflow-y-scroll">
                {addedItems.map((item, i) => (
                    <PopUpItems item={item} key={i} />
                ))}
                <TotalPrice addedItems={addedItems} />
            </ul>
            <button className="h-14 bg-Red rounded-full text-rose-50 text-lg font-fw-normal" onClick={() => {
                setAddedItems([]);
                setConfirm(false)
            }}>
                Start New Order
            </button>
        </>
    );
}

export default PopUp;
