
export const validate = (tweetZodSchema) => {
    // it returns a validating middleware
    return async (req, res, next) => {
        try {
            console.log(req.body);
            tweetZodSchema.parse(req.body);
            next();
        } catch(error) {
            return res.status(400).json({
                error: error.errors,
                success: false,
                message: "Validation failed"
            });
        }
    }
}
