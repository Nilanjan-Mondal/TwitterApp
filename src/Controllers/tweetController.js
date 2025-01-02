import { checkCreateTweet } from "../Services/tweetService.js";


export const geTweets = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route v1'
    });
}

export const geTweetsById = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route v1',
        id: req.params.id
    });
}

export const createTweet = async (req, res) => {
    try {
        const response = await checkCreateTweet({
            body: req.body.body
        });

        return res.status(201).json({
            success: true,
            data: response,
            message: 'Tweet created succesfully'
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Internal Server error',
            success: false
        });
    }
}