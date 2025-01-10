import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRemovedItems } from '../actions';

const RemovedItems = () => {
    const dispatch = useDispatch();
    const removedItems = useSelector((state) => state.removedItems)

    const removedTotalItems = removedItems.length;

    useEffect(() => {
        dispatch(fetchRemovedItems())
    }, [])

    return (
        <div>
            <h1>Removed Items From Inventory</h1>
            <ul>
                {removedItems.map((item, index) => (
                    <li key={index}>
                        {item.itemName}: {item.itemQuantity}
                    </li>
                ))}
            </ul>
            <h2>Removed Items Total: {removedTotalItems}</h2>

        </div>
    )
}

export default RemovedItems;