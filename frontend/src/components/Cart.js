import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/DataSlice';

const Cart = ({ data }) => {
    const dispatch = useDispatch();

    const { cartData } = useSelector(store => store.data);
    console.log(cartData)
    const handuleSubmit = () => {

        dispatch(addToCart(data))
        alert('Add to the cart')
    }
    return (
        <div>
            <div className="border p-4 rounded-lg shadow-lg bg-white">
                <img className="w-full h-48 object-cover mb-4" src={data.imageUrl} alt='' />
                <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
                <p className="text-gray-500">${data.price}</p>
                <button
                    onClick={handuleSubmit}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Cart
