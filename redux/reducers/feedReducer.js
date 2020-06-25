import { GET_TRUMP_TWEETS, GET_HILLARY_TWEETS } from '../actions/feedActions';

const feedReducer = (state = {trumpTweets: [], hillaryTweets: []}, action) => {
    switch (action.type) {
        case GET_TRUMP_TWEETS:
            return {...state, trumpTweets: action.payload}  
        
        case GET_HILLARY_TWEETS:
            return {...state, hillaryTweets: action.payload}    
        
        default:
            return {...state};
    }
};

export default feedReducer;