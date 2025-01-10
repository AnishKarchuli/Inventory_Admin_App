export const addItems = (entry) => async (dispatch) => {
    try{
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            }
        );

        const data = await response.json();
        if(data.success === true){
            console.log(data)
            dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data})
        }

    } catch (error) {
        console.error("Error in adding items", error)
    }
}

export const removedItems = (entry) => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(entry)
            }
        );

        const data = await response.json();
        if(data.success === true){
            console.log(data)
            dispatch({type: "ADD_ENTRY_SUCCESS", payload: data.data})
        }
    } catch (error) {
        console.error("Error in removing items", error)
    }
}

export const fetchAddedItems = () => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/storage-items")

        const data = await response.json();

        if(data){
            dispatch({type: "FETCH_INVENTORY_SUCCESS", payload: data})
        }
    } catch (error) {
        console.error("Error fetching inventory", error)
    }
}

export const fetchRemovedItems = () => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store")

        const data = await response.json();
        if(data){
            dispatch({type: 'FETCH_REMOVED_ITEMS_SUCCESS', payload: data})
        }
    } catch (error){
        console.error("Error fetching removed items", error)
    }
}