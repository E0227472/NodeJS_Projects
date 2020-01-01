import {posts} from '../data/Posts';

/* psuedo getting data from the database */ 
export const getPosts = (req: any, res: any, next:any) => {
    res.status(201).json({
        posts: posts
    })
};


/* psuedo posting data to the database */
export const createPosts = (req: any, res: any, next: any) => {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        post: { title: title, content: content}
    })
};