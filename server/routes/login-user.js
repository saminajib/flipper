import express from 'express';
import sendMail from '../utils/send-mail.js';
import connectMongo from '../utils/connect-mongo.js';
import {hashPassword, comparePassword} from '../utils/encrypt-password.js';

const router = express.Router();

// login endpoint
router.post('/login', async(req, res) => {

    const {collection, client} = await connectMongo('users');

    const {email, password} = req.body;

    const passwordHash = await hashPassword(password);

    try{

        const user = await collection.findOne({email, passwordHash});
        //const verified = await comparePassword(password, passwordHash);

        if(user){
            //if user isnt verified, resend verification email
            if(user.verified === false){
                res.status(202).json({error: "User not verified"});
                await sendMail(
                    user.email,
                    'Verify Your Email',
                    `Click the following link to verify your email: ${process.env.FRONTEND_URL}/api/verify/${user.token}`
                );
            }
            else{
                res.status(200).json({message: "Login successful", info: user});
            }
        }
        else{
            res.status(401).json({error: "Invalid email or password"});
        }
    }catch(error){
        console.error("Error logging in:", error);
        res.status(500).json({error: "Internal server error"});
    }
    finally{
        await client.close();
        console.log("MongoDB connection closed");
    }

});

export default router;
