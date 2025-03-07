import express from "express"
import middlewares from "../../config/middlewares"
import userController from "./userController"

const userRouter = express.Router()

userRouter.post('/sign-up', userController.startWithJoincode)
userRouter.post('/organization/members',middlewares.uploadExel.single("excel"),userController.parseMemberList)
userRouter.post('/organization', userController.signUpOrganization)
userRouter.get('/',middlewares.jwtMiddleware,userController.getMyPageData)

export default userRouter