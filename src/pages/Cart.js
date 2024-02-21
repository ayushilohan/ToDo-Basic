import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../store/List';
import { buyListActions } from '../store/buyList'


const Cart = () => {
    const dispatch = useDispatch()
    const newList = useSelector((state)=>state.list.newList);
    const buyList = useSelector((state)=>state.buyList.buyList);
    // const [buyList, setBuyList] = useState([])

    const cancelHandler = (index) => {dispatch(listActions.cancelHandler(index))}
    const buyHandler = (index) => {
        let value =  newList[index]; 
        dispatch(listActions.buyHandler(index))
        dispatch(buyListActions.buyListHandler(value))
    }

  return (
    <>
    <h2>Welcome to Cart Page ! Your Cart Count is {newList.length}</h2>
    <div>
        <ul>
            {newList.map((item,index)=>{
                return (
                    <li key={index}>
                        {item}
                        <button onClick={()=>cancelHandler(index)}>Cancel</button>
                        <button onClick={()=>buyHandler(index)}>Buy</button>
                    </li>
                )
            })}
        </ul>
    </div>
    <div>
        <h2>Bought</h2>
        <ul>
            {buyList.map((item, index)=>{
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })}
        </ul>
    </div>
    </>
  )
}

export default Cart