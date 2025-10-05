import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../redux/DataSlice';
import axios from 'axios';

const ViewCart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.data.cartData);

    if (!cartData || cartData.length === 0) {
        return (
            <div className="p-6 text-center text-gray-500">
                <p className="text-lg font-semibold">Your cart is empty.</p>
            </div>
        );
    }

    let totalPrice = 0;
    for (const item of cartData) {
        totalPrice += item.price * (item.quantity || 1);
    }

    const handleSubmit = async() => {
        try {
            const orderItems = cartData.map(({ id, quantity }) => ({
                id,
                quantity: quantity || 1,
            }));
            const res =await axios.post('http://localhost:4000/api/data/cart' , {orderItems});
            if(res.data.success){
                alert("check ot success");
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
            <ul className="divide-y divide-gray-200 mb-6">
                {cartData.map((item) => (
                    <li key={item.id} className="flex justify-between items-center py-4">
                        <div>
                            <p className="font-semibold text-gray-900">{item.name}</p>
                            <div className="flex items-center space-x-2 mt-1">
                                <button
                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <span className="font-medium">{item.quantity || 1}</span>
                                <button
                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-900">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
                <span className="text-xl font-bold text-gray-900">Total:</span>
                <span className="text-xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
            </div>
            <div>
                <button onClick={handleSubmit} className='w-full py-3 rounded-md text-black bg-orange-500 mt-5'>Check Out</button>
            </div>
        </div>
    );
};

export default ViewCart;
