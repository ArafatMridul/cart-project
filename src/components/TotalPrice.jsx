
/* eslint-disable react/prop-types */
const TotalPrice = ({ addedItems }) => {

    const totalPrice = addedItems.reduce((acc, item) => acc+(item.price * item.amount), 0).toFixed(2);

    return (
        <div className="flex items-center justify-between mt-8">
            <p className="text-rose-900 text-base font-fw-light">Order Total</p>
            <p className="text-rose-900 text-3xl font-fw-bold">${totalPrice}</p>
        </div>
    );
};

export default TotalPrice;
