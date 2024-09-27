import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'




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
      <div className={styles.imgContainer} >
        <Image src="https://images.pexels.com/photos/28539589/pexels-photo-28539589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" fill className={styles.img} />
      </div>
      <div className={styles.textContainer} >
        <h1 className={styles.title} >{post?.title}</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/28539589/pexels-photo-28539589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" width={50} height={50} className={styles.avatar} />
          
          {/* annimation during waiting */}
          <Suspense fallback={<div>Loading...</div>} >
            <PostUser userId = {post.userId} />
          </Suspense>

          
          {/* <PostUser userId = {post.userId} /> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle} >Published</span>
            <span className={styles.detailValue} >01.01.2024</span>
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