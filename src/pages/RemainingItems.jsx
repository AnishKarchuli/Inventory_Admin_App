import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchAddedItems, fetchRemovedItems } from '../actions';

const RemainingItems = () => {
    const dispatch = useDispatch();

    const inventory = useSelector((state) => state.inventory)
    const removedItems = useSelector((state) => state.removedItems)

    const totalItems = inventory.length;
    const removedTotalItems = removedItems.length;

    const remainingTotalItems = totalItems - removedTotalItems;

    useEffect(() => {
        dispatch(fetchAddedItems())
    }, [])

    useEffect(() => {
        dispatch(fetchRemovedItems())
    }, [])

    return (
        <div>
            <h1>Remaining Items in Inventory</h1>
            <h2>Inventory Total: {remainingTotalItems}</h2>
        </div>
    )
}

export default RemainingItems;