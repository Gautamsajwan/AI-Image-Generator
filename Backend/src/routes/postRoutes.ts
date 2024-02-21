import express from 'express'
import { createPostController, getAllPostsController } from '../controllers/Post.js'
import fetchUser from '../middlewares/jwt.js'

const router = express.Router()

router.post('/allPosts', getAllPostsController)

router.post('/createPost', createPostController)
// router.post('/createPost', fetchUser, createPostController) there is an issue with the cookies hence removed fetch user
export default router