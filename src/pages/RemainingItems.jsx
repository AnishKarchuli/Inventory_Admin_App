import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchAddedItems, fetchRemovedItems } from '../actions';

const RemainingItems = () => {
    const dispatch = useDispatch();

    const inventory = useSelector((state) => state.inventory)
    const removedItems = useSelector((state) => state.removedItems)

    const totalItems = inventory.reduce((acc, curr) => acc + curr.itemQuantity , 0)
    const removedTotalItems = removedItems.reduce((acc, curr) => acc + curr.itemQuantity , 0)

    const remainingTotalItems = totalItems - removedTotalItems;

    useEffect(() => {
        dispatch(fetchAddedItems());
        dispatch(fetchRemovedItems())
    }, [dispatch])

    return (
        <div>
            <h1>Remaining Items in Inventory</h1>
            <h2>Inventory Total: {remainingTotalItems}</h2>
        </div>
    )
}

export default RemainingItems;