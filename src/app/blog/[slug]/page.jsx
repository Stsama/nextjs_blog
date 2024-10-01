import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug)
  return {
    title: post.title,
    description: post.body
  }
}


// Fetching data from an API
// const getSinglePost = async (slug) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if(!response.ok) {
//     throw new Error('Something went wrong')
//   }
//   return response.json()
// }


const SinglePostPage = async ({params}) => {
  // params is an object with the route parameters for this file for the server side
  // console.log(params)
  // searchParams is an object with the query parameters for this file for the server side
  // console.log(searchParams)

  const {slug} = params;

  // const post = await getSinglePost(slug)

  // fetching data without an API
  const post = await getPost(slug)

  return (
    <div className={styles.container} >
      {post.img && <div className={styles.imgContainer} >
        <Image src={post.img} alt="post" fill className={styles.img} />
      </div>}
      <div className={styles.textContainer} >
        <h1 className={styles.title} >{post?.title}</h1>
        <div className={styles.detail}>
          
          
          {/* annimation during waiting */}
          {post && <Suspense fallback={<div>Loading...</div>} >
            <PostUser userId = {post.userId} />
          </Suspense>}

          
          {/* <PostUser userId = {post.userId} /> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle} >Published</span>
            <span className={styles.detailValue} >{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>

  )
}

export default SinglePostPage