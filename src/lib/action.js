"use server";

import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";


export const addPost = async (formData) => {
    // const title = formData.get("title");
    // const body = formData.get("body");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");
    const {title, body, slug, userId} = Object.fromEntries(formData);
    try {
        connectToDb();
        const newPost = new Post({userId, title, body, slug});
        await newPost.save();
        console.log(`Post created successfully`);
        // allow next to refresh the page with our new data
        revalidatePath('/blog');

    } catch (e) {
        console.error(e);
    }
    
    // console.log(title, body, slug, userId);
    
};


export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        // allow next to refresh the page with our new data
        console.log(`Delete post`);
        revalidatePath('/blog');
    } catch (e) {
        console.error(e);
    }
    
};