import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAddedItems } from '../actions';

const Inventory = () => {
    const dispatch = useDispatch();
    const inventory = useSelector((state) => state.inventory)

    const totalItems = inventory.reduce((acc, curr) => acc + curr.itemQuantity , 0);

    useEffect(() => {
        dispatch(fetchAddedItems())
    }, [dispatch])

    return (
        <div>
            <h1>Inventory Items</h1>
            <ul>
                {inventory.map((item, index) => (
                    <li key={index}>
                        {item.itemName}: {item.itemQuantity}
                    </li>
                ))}
            </ul>
            <h2>Total Inventory Items: {totalItems}</h2>
        </div>
    )
}

export default Inventory;