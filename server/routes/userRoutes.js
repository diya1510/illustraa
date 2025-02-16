import {registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay, googleLogin} from '../controllers/userController.js'
import express from 'express'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser )
userRouter.post('/login', loginUser)
userRouter.get('/credits',userAuth, userCredits)
userRouter.post('/pay-razor',userAuth, paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)

//updatedGoogleLogin
userRouter.post("/google",googleLogin)

export default userRouter