import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({ //mongoose contains a constructor called .Schema by which we can create a tweetSchema object
    body: {
        type: String,
        required: true,
        trim: true,  // remove whitespaces from the begining and the end of the string
        maxlength: 200
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema); //tweet collection (a set of data is known as collection in mongo db)

export default Tweet; // we are exporting tweet as with this we can create the queries of mongo DB

// go to repository layer, cuz queries are created in repository layer not in service layer