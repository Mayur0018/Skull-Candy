import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart, decrementCart } from "../Store/cartSlice";
import { removeFromCart } from "../Store/cartSlice";
const ShopingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="mt-6 p-4 border">
      <h2 className="text-3xl font-bold text-center mb-6">Shopping Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="max-w-6xl mx-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-[10px] sm:text-[15px]  font-semibold">
                      {item.text}
                    </h2>
                    <p className=" text-[10px] sm:text-[15px] font-semibold">
                      {item.price}
                    </p>
                    <div className="flex justify-evenly">
                      <button
                        className="font-bold text-[20px] cursor-pointer"
                        onClick={() => dispatch(incrementCart(item.id))}
                      >
                        +
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="font-bold text-[20px] cursor-pointer"
                        onClick={() => dispatch(decrementCart(item.id))}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Order Summary */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Order summary</h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  {cartItems
                    .reduce(
                      (total, item) =>
                        total + Number(item.price.replace(/[^0-9.]/g, "")) * Number(item.quantity),
                      0
                    )
                    .toFixed(2)}
                </div>
                <div className="flex justify-between">
                  <span>Shipping estimate</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax estimate</span>
                  <span>$8.32</span>
                </div>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
                <span>Order total</span>
                {(
                  cartItems.reduce(
                    (total, item) =>
                      total + Number(item.price.replace(/[^0-9.]/g, "")) * Number(item.quantity),
                    0
                  ) +
                  5.0 +
                  8.32
                ).toFixed(2)}
              </div>
              <button className="w-full bg-black text-white py-2 mt-4 rounded-lg hover:bg-white hover:text-black">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopingCart;
