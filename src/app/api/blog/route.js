import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { Post } from "@/lib/models";

export const GET = async (request) => {
    // Fetch data from your server
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.error(error);
    }
};
