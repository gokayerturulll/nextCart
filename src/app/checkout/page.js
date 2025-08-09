"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    zip: "",
    phone: "",
    name: "",
    cardNumber: "",
    cardDate: "",
    cardCvc: "",
  });

  const { cart } = useCart();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const getDiscountedPrice = (price, discountPercentage) => {
    return Math.floor((price * (100 - discountPercentage)) / 100);
  };

  let totalPrice = 0;
  for (const item of cart) {
    totalPrice +=
      getDiscountedPrice(item.price, item.discountPercentage) * item.quantity;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (
      !form.email ||
      !form.firstName ||
      !form.lastName ||
      !form.address ||
      !form.city ||
      !form.zip ||
      !form.name ||
      !form.cardNumber ||
      !form.cardDate ||
      !form.cardCvc
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    setSuccess(true);
    setError("");
  };

  return (
    <div className="max-w-full mx-auto py-10 flex justify-center gap-4 pt-[100px]">
      {/* Checkout form */}
      <form
        className="flex flex-col gap-5 bg-white p-6 rounded-2xl shadow w-[500px]"
        onSubmit={handleSubmit}
      >
        {/* CONTACT */}
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="checkout-form"
        />

        {/* DELIVERY */}
        <h2 className="text-2xl font-bold mt-4 mb-2">Delivery</h2>
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="checkout-form"
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="checkout-form"
          />
        </div>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="checkout-form"
        />
        <input
          type="text"
          name="apartment"
          value={form.apartment}
          onChange={handleChange}
          placeholder="Apartment, suite, etc. (optional)"
          className="checkout-form"
        />
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="checkout-form"
          />
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            placeholder="ZIP code"
            className="checkout-form"
          />
        </div>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
          className="checkout-form"
        />

        {/* PAYMENT */}
        <h2 className="text-2xl font-bold mt-4 mb-2">Payment</h2>
        {error && (
          <p className="mb-4 text-red-600 font-medium bg-red-100 px-4 py-2 rounded">
            {error}
          </p>
        )}
        {success && (
          <p className="mb-4 text-green-600 font-medium bg-green-100 px-4 py-2 rounded">
            Payment successfully completed!
          </p>
        )}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="checkout-form"
          placeholder="Name on Card"
        />
        <input
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          className="checkout-form"
          placeholder="Card Number"
          maxLength={16}
          inputMode="numeric"
          pattern="\d*"
        />
        <div className="flex gap-3">
          <input
            name="cardDate"
            value={form.cardDate}
            onChange={handleChange}
            className="checkout-form"
            placeholder="MM/YY"
            maxLength={5}
            inputMode="numeric"
            pattern="\d*"
          />
          <input
            name="cardCvc"
            value={form.cardCvc}
            onChange={handleChange}
            className="checkout-form"
            placeholder="CVC"
            maxLength={3}
            inputMode="numeric"
            pattern="\d*"
          />
        </div>
        <button className="w-full bg-gray-800 text-white p-3 rounded-xl font-semibold hover:bg-gray-700 transition cursor-pointer mt-2">
          Complete Order
        </button>
      </form>

      {/* ORDER SUMMARY */}
      <div className="w-[500px] bg-white p-6 rounded-2xl shadow space-y-4 h-fit">
        <h2 className="text-xl font-bold">Order Summary</h2>
        {cart.map((item, id) => (
          <ul key={item.id}>
            <li>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className=" bg-gray-300 w-15 h-20 object-cover "
                  />
                  <span className="absolute  bottom-15 left-10 rounded-full text-xs bg-red-600 text-gray-100 px-2 py-1 ">
                    {item.quantity}
                  </span>
                </div>
                <span className=" text-xl">{item.title}</span>
                <span className="font-bold text-xl ">
                  {getDiscountedPrice(item.price, item.discountPercentage) *
                    item.quantity}
                  $
                </span>
              </div>
            </li>
          </ul>
        ))}
        <div className="flex justify-between font-bold text-lg mt-4 mr-13">
          <span>Total:</span>
          <span>{totalPrice}$</span>
        </div>
      </div>
    </div>
  );
}
