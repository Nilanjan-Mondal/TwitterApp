import { checkCreateTweet, getTweets as getTweetService } from "../Services/tweetService.js";

export const geTweetsById = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route v1',
        id: req.params.id
    });
}

export const createTweet = async (req, res) => {
    console.log(req.file);
    try {
        const response = await checkCreateTweet({
            body: req.body.body,
            image: req.file?.location
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

export const getTweets = async (req, res) => {
    try {
        const response = await getTweetService();
        return res.status(200).json({
            success: true,
            data: response,
            message: "Tweets fetched successfuly"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}