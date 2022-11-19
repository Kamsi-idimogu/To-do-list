
export default function Reducer(state, action){
    if(action.type === 'ADD_ITEM'){
        const newList = [...state.items, action.payload];
        return( 
            {
                ...state,
                items: newList,
                hasModal: true,
                modalContent: 'Item Added'
            }
        )
    }
    if(action.type === 'DELETE_ITEM'){
        const newList = state.items.filter((item) => item.id !== action.payload)
        return(
            {
                ...state,
                items: newList,
                hasModal: true,
                modalContent: 'Item removed'

            }
        )
    }
    if(action.type === 'NO_ITEM'){
        return(
            {
                ...state,
                hasModal: true,
                modalContent: 'please enter an item'
            }
        )
    }
    if(action.type === 'HIDE_MODAL'){
        return(
            {
                ...state,
                hasModal: false,
                // modalContent: ''
            }
        )
    }
    throw new Error('no matching action type')
}