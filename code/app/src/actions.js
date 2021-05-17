import config from "./config.json";



export const loadAllInfo = () => async dispatch => {
    try {
        const url = config.host+'/allInfo'
        const result = await fetch(url);
        const data = await result.json();
        
        console.log(result)
        console.log(data)
    
        dispatch({
            type: 'LOAD_ALLINFO',
            value: data
        })
    }
    catch(e) {
        dispatch({
            type: 'LOAD_ALLINFO',
            value: {error: 1000}
        })
        
    }
}

export const deleteNote = (bolValue) => dispatch =>{

    dispatch({
        type: 'DELETE_NOTE',
        value: bolValue
    })
}

