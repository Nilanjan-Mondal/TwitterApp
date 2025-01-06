import Tweet from "../Schema/tweet.js";

export const createTweet = async ({ body, image }) => {
    try {
        const tweet = await Tweet.create({ body });
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const getTweets = async () => {

    try {
        const tweets = await Tweet.find();
        return tweets;
    } catch (error) {
        throw error;
    }
}

export const getTweetsById = async (tweetId) => {
    try {
        const tweet = await Tweet.findById(tweetId);
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const updateTweet = async (tweetId, body) => {
    try {
        const tweet = await Tweet.findByIdAndUpdate(tweetId, {body}, {new: true});
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const deleteTweet = async (tweetId) => {
    try {
        const tweet = await Tweet.findByIdAndDelete(tweetId);
        return tweet;
    } catch (error) {
        throw error;
    }
}