import { useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { productData } from "./constants/data";
import PopUp from "./components/PopUp";

export default function App() {
    // Tracking CartList
    const [addedItems, setAddedItems] = useState([]);
    const [confirm, setConfirm] = useState(false);

    if(confirm) {
        document.body.style = "overflow: hidden";
    } else {
        document.body.style = "overflow: auto";
    }

    return (
        <div
            className={`p-6 mt-16 font-red-hat mx-auto lg:max-w-screen-2xl grid md:grid-cols-2 lg:grid-cols-3 md:gap-8`}
        >
            <ProductList
                productData={productData}
                addedItems={addedItems}
                onAddProduct={setAddedItems}
            />
            <Cart
                addedItems={addedItems}
                setAddedItems={setAddedItems}
                setConfirm={setConfirm}
            />
            {confirm && (
                <div className="h-screen w-full absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black">
                    <div className="absolute z-10 bottom-0 left-0 right-0 bg-white flex flex-col gap-8 px-6 py-12 rounded-t-xl md:h-fit md:w-[500px] lg:w-[750px] md:rounded-xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                        <PopUp
                            addedItems={addedItems}
                            setAddedItems={setAddedItems}
                            setConfirm={setConfirm}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
