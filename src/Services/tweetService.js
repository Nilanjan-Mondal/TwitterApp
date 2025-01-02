// service layer contains the business logic

import { Filter } from "bad-words"
import { createTweet } from "../Repositories/tweetRepository.js";

export const checkCreateTweet = async ({ body }) => {
    // try to find blocked words in the tweet body and if any exits dont create the tweet and return an error message
    // if no blocked words found, create the tweet

    const filter = new Filter();

    if(filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw new Error("Tweet contains blocked words");
    }

    const tweet = createTweet({ body }); // if for writing business logic we need to interact with the database then we need to call the repository layer from here
    return tweet;

}