import React, { useEffect } from 'react'
import axios from 'axios'
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/DataSlice';

const Home = () => {

const dispatch = useDispatch();

useEffect(()=>{
    const getData = async()=>{
         try {
            const data = await axios.get('http://localhost:4000/api/data/product')
            if(data.data.success){
               dispatch(setData(data.data.data))
            }

         } catch (error) {
            console.log(error)
         }
    }
    getData();

},[dispatch])


const {data} = useSelector(store=> store.data)

  return (
    <div className='m-5'>
     <h1 className='my-10 text-2xl'>Products -</h1>
     <div className='grid grid-cols-3 gap-3'>
        {
          data.map((data)=>(
            <Cart key={data.id}  data= {data}/>
          ))
        }
     </div>
    </div>
  )
}

export default Home
