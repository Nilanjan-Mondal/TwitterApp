export const createTweetManualValidator = (req, res, next) => {
    if(!req.body || !req.body.tweet) {
        console.log('BODY TE KICHU NEI');
        return res.status(400).json({
            error: 'Tweet is required'
        });
    }
    if(req.body.tweet.length > 200) {
        return res.status(400).json({
            error: 'Tweet must be 200 characters or less'
        });
    }
    next();
}

