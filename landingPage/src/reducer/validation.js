const validationReducer = (state = 'black', action) =>{
    switch(action.type){
        case 'NAME':
            
            if(state  < 2){
                state = 'red';
                return state;
            }
                
            else{
                state = 'green';
                return state;
            }
                
        
        default:
            return state;
        
    }
}

export default validationReducer;

//Em input no form botar onChange={() => dispatch(validationInputName())}
//style={{ color: validation}} seta css dinamicamente

/*
    Em actions:
        export const validationInputName = () => {
    return {
        type: 'NAME'
    };
};
*/