import Tweet from "../Schema/tweet.js";

export const createTweet = async ({ body }) => {
    try {
        const tweet = await Tweet.create({ body });
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const getTweets = async ({ body }) => {
    try {
        const tweets = await Tweet.find();
        return tweets;
    } catch (error) {
        throw error;
    }
}