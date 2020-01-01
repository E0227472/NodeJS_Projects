import express from 'express';
import {getPosts, createPosts} from '../controller/feedController';


export const router = express.Router();

router.get('/posts', getPosts);

router.post('/posts', createPosts);



