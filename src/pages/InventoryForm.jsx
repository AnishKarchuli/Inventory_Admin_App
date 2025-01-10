import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, removedItems } from "../actions";

const InventoryForm = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [entryType, setEntryType] = useState('addToStorage');

  const handleAddItem = (e) => {
    e.preventDefault();

    console.log('Current entryType:', entryType);
    
    if (!itemName || !itemQuantity || !entryType) {
      alert('Please fill in all fields');
      return;
    }
  
    const quantity = parseFloat(itemQuantity);
    if (isNaN(quantity) || quantity <= 0) {
      alert('Please enter a valid quantity');
      return;
    }
  
    if(entryType === 'addToStorage'){
      dispatch(addItems({itemName, itemQuantity: quantity, entryType}))
    } else {
      dispatch(removedItems({itemName, itemQuantity: quantity, entryType}))
    }
    
    // Reset form
    setItemName('');
    setItemQuantity('');
    setEntryType('addToStorage');
  }

  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form>
        <div>
          <label>Item Name:</label>
          <br />
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Item Quantity:</label>
          <br />
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Entry Type:</label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value='addToStorage'>Add to Storage</option>
            <option value='removeFromStorage'>Remove from Storage</option>
          </select>
        </div>
        <br />
        <button onClick={handleAddItem}>Add Item data</button>
      </form>
    </div>
  );
};

export default InventoryForm;
