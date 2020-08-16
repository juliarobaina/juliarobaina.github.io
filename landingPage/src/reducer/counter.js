const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            if(state >= 5)
                return state;
            else
                return state + 1;
        case 'DECREMENT':
            if(state <= 0)
                return state;
            else
                return state - 1;
        default:
            return state;
        
    }
}

export default counterReducer;