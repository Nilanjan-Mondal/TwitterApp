import {    checkCreateTweet, 
            getTweets as getTweetService,
            getTweetById as getTweetByIdService,
            deleteTweet as deleteTweetService,
            updateTweet as updateTweetService

        } from "../Services/tweetService.js";

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

export const getTweetById = async (req, res) => {
    try {
        const response = await getTweetByIdService(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Tweets fetched successfuly"
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const updateTweet = async (req, res) => {
    try {
        const response = await updateTweetService(req.params.id, req.body.body);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Tweet updated successfuly"
        });
    } catch (error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                message: error.message,
                status: false
            });
        }
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const response = await deleteTweetService(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            message: `Successfuly deleted the tweet with id: ${req.params.id}`
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            success: false
        });
    }
}