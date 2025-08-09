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

  const { cart, clearCart } = useCart();
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
    clearCart();
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>
        <p className="mt-2 text-lg">Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 flex flex-col-reverse lg:flex-row justify-center gap-8 pt-[100px] px-4">
      {/* Checkout form */}

      <form
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-full lg:w-3/5"
        onSubmit={handleSubmit}
      >
        {/* CONTACT */}
        <h2 className="text-2xl font-bold">Contact</h2>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="checkout-form"
        />

        {/* DELIVERY */}
        <h2 className="text-2xl font-bold mt-4">Delivery</h2>

        <div className="flex flex-col sm:flex-row gap-3">
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
        <div className="flex flex-col sm:flex-row gap-3">
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
        <h2 className="text-2xl font-bold mt-4">Payment</h2>
        {error && (
          <p className="text-red-600 font-medium bg-red-100 p-3 rounded">
            {error}
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
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            name="cardDate"
            value={form.cardDate}
            onChange={handleChange}
            className="checkout-form"
            placeholder="MM/YY"
            maxLength={5}
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
        <button className="w-full bg-gray-800 text-white p-4 rounded-xl font-semibold hover:bg-gray-700 transition cursor-pointer mt-2 text-lg">
          Complete Order
        </button>
      </form>

      {/* ORDER SUMMARY */}

      <div className="w-full lg:w-2/5 bg-white p-6 rounded-lg shadow-md space-y-4 h-fit">
        <h2 className="text-2xl font-bold border-b pb-4">Order Summary</h2>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md bg-gray-100"
                  />
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full text-xs bg-gray-800 text-white">
                    {item.quantity}
                  </span>
                </div>
                <span className="font-semibold">{item.title}</span>
              </div>
              <span className="font-bold text-lg whitespace-nowrap">
                $
                {getDiscountedPrice(item.price, item.discountPercentage) *
                  item.quantity}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold text-xl pt-4">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}
