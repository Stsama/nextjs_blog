import { Post, User } from './models';
import { connectToDb } from './utils';
// use the cache without fecth
import { unstable_noStore as noStore  } from 'next/cache';

// const users = [
//     {id:1, name: 'John' },
//     {id:2, name: 'Jane' },
//     {id:3, name: 'Joe' },
//     {id:4, name: 'Jack' },
//     {id:5, name: 'Jill' },
    
// ]

// const posts = [
//     {id: 1, title: 'Post 1', body: "...............", userId: 1 },
//     {id: 2, title: 'Post 2', body: "...............", userId: 2 },
//     {id: 3, title: 'Post 3', body: "...............", userId: 1 },
//     {id: 4, title: 'Post 4', body: "...............", userId: 3 },
//     {id: 5, title: 'Post 5', body: "...............", userId: 3 },
// ]


export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find()
        return posts
    }catch(e) {
        console.error(e);    
    }

}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug: slug});
        return post
    }catch(e) {
        console.error(e);    
    }

}


export const getUser = async (id) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id)
        return user
    }catch(e) {
        console.error(e);    
    }

}


export const getUsers = async (id) => {
    try {
        connectToDb();
        const users = await User.find()
        return users
    }catch(e) {
        console.error(e);    
    }
}