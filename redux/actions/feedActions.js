export const GET_TRUMP_TWEETS = "GET_TRUMP_TWEETS";
export const GET_HILLARY_TWEETS = "GET_HILLARY_TWEETS";

export const getTrumpTweets = (data) => ({
    type: GET_TRUMP_TWEETS, payload: data
});

export const getHillaryTweets = (data) => ({
    type: GET_HILLARY_TWEETS, payload: data
});