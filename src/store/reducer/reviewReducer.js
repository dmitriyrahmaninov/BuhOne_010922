import { review } from '../../components/ReviewsContainer/data';

const defaultState = review;

const SCROLL_FORWARD_ACTION = 'SCROLL_FORWARD_ACTION';
const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW';

export const scrollForwardAction = (payload) => ({ type: SCROLL_FORWARD_ACTION, payload });
export const addNewReview = (payload) => ({ type: ADD_NEW_REVIEW, payload });

export const reviewReducer = (state = defaultState, action) => {
    
    if (action.type === SCROLL_FORWARD_ACTION) {
        return state.map(el =>
        {
            console.log(state)
            
            if (el.id === action.payload) {
                console.log(el.display);
                el.display = true;
                console.log(el)
            } 
            console.log(el);
            console.log(state)
            return el
            
        }
            
        )
    } else if(action.type === ADD_NEW_REVIEW){
        return [...state,
            {
            ...action.payload,
                id: Date.now(),
                display: true
            }
        ]
    } else {
        return state
    }
}
