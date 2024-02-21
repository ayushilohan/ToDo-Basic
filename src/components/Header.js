import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listActions } from '../store/List';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const list = useSelector((state)=>state.list.list)
    const newList = useSelector((state)=>state.list.newList)
    const [value, setValue] = useState()

    const inputHandler = (e) => {
        setValue(e.target.value)
    }
    const addToListHandler = () => {
        dispatch(listActions.addToList(value))
        setValue('')
    }
    const addToCartHandler = (index) => {dispatch(listActions.addToCart(index))}

    const navigateCart = () => {
        navigate('./cart')
    }

  return (
    <div>
        <div>
            <h3 onClick={navigateCart}>Cart: {newList.length}</h3>
            <input type="value" onChange={inputHandler} value={value}></input>
            <button onClick={addToListHandler}>Add To List</button>
        </div>
        <ul>
            {list.map((list,index)=>{
                return (
                    <li key={index}>{list}
                    <button onClick={()=>addToCartHandler(index)}>Add To Cart</button>
                    </li>
                )
            })}
        </ul>

    </div>
  )
}

export default Header