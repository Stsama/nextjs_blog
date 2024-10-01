import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { Post } from "@/lib/models";

export const GET = async (request, {params}) => {
    const { slug } = params;
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        console.error(error);
        
    }
}


export const DELETE = async (request, {params}) => {
    const { slug } = params;
    try {
        connectToDb();
        await Post.deleteOne({slug});
        return NextResponse.json("Post deleted successfully");
    } catch (error) {
        console.error(error);
        
    }
}
