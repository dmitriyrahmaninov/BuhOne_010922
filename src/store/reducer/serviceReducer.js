const defaultState = [];

const ADD_SERVICE = 'ADD_SERVICE';

export const addService = (payload) => ({ type: ADD_SERVICE, payload });

export const serviceReducer = (state = defaultState, action) => {
    if (action.type === 'ADD_SERVICE') {
        return [...state,
            {
                ...action.payload,
                id: Date.now(),
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcpnSsx2S-vTTEoq6VV_6yo5vNtzFv943BR-FNvLFYtF1iw7QhdkqYv55jZyD9SrxIUw&usqp=CAU'
            }]
    } else {
        return state
    }
}