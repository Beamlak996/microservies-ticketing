import express from 'express'
import { validateResource } from '../middleware/validate-resource';
import { signupUserSchema } from '../schema/user.schema';
import { signupUserHandler } from '../controllers/user.controller';

const router = express.Router()

router.get('/currentuser', () => {

})

router.post("/signup", validateResource(signupUserSchema), signupUserHandler);
router.post("/signin", () => {});

router.post('/signout', () => {

})

export { router as userRouter }