import multer from "multer";
import multerS3 from 'multer-s3';
import { s3 } from "./awsConfig.js";
import { AWS_BUCKET_NAME } from "./serverConfig.js";

export const s3Uploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function (req, file, cb) {
            if(!file) {
                // cb is an err first callback (first parameter is err) (if there is something in the first parameter then we know cb is called with an err, if the first parameter is null then we know that cb is called with success)
                // err callback in js
                // If an error occurs (e.g., the file doesn't exist), err will contain the error object, and the callback handles it.
                // If the file is read successfully, err will be null, and data will contain the file's contents.
                return cb(new Error('No file found'));
            }

            console.log(file);

            if(file.mimetype != 'image/jpeg' && file.mimetype != 'image/png') {
                return cb(new Error('Invalid file type'));
            }

            const fileExtension = file.originalname.split('.')[1];

            // if everything is fine, proceed with the upload
            cb(null, Date.now().toString()+"."+fileExtension); // use Date.now() as the file name
        }
    })
});