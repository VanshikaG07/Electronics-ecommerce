import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, getCartTotal, clearCart } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            clearCart();
            alert('Order placed successfully!');
            navigate('/');
        }, 2000);
    };

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Shipping Address */}
                    <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Shipping Address</h2>
                        <form id="checkout-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="First Name" required />
                            <Input label="Last Name" required />
                            <Input label="Email" type="email" className="md:col-span-2" required />
                            <Input label="Address" className="md:col-span-2" required />
                            <Input label="City" required />
                            <Input label="Postal Code" required />
                            <Input label="Country" required />
                            <Input label="Phone" type="tel" required />
                        </form>
                    </section>

                    {/* Payment Method */}
                    <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Payment Method</h2>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-primary transition-colors">
                                <input type="radio" name="payment" id="card" className="mr-4 text-primary focus:ring-primary" defaultChecked />
                                <label htmlFor="card" className="flex-1 font-medium text-gray-900 dark:text-white cursor-pointer">Credit / Debit Card</label>
                            </div>
                            <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-primary transition-colors">
                                <input type="radio" name="payment" id="paypal" className="mr-4 text-primary focus:ring-primary" />
                                <label htmlFor="paypal" className="flex-1 font-medium text-gray-900 dark:text-white cursor-pointer">PayPal</label>
                            </div>
                            <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-primary transition-colors">
                                <input type="radio" name="payment" id="cod" className="mr-4 text-primary focus:ring-primary" />
                                <label htmlFor="cod" className="flex-1 font-medium text-gray-900 dark:text-white cursor-pointer">Cash on Delivery</label>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Order Summary</h2>

                        <div className="space-y-4 mb-6 max-h-60 overflow-auto pr-2">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">{item.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3 mb-6">
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span>${getCartTotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Tax (Estimated)</span>
                                <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between font-bold text-lg text-gray-900 dark:text-white">
                                <span>Total</span>
                                <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            form="checkout-form"
                            className="w-full"
                            isLoading={isProcessing}
                        >
                            Place Order
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
