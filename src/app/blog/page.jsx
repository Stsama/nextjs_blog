import styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'
import { getPosts } from '@/lib/data'

// Fetching data from an API
const getData = async () => {

  // By default next js will cache the data but if you want to disable the cache you can use the following code
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})


  // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'force-cache'}) // This will force the browser to cache the data

  //  if have data in your that's changing frequently you can use the following code
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-cache'}) // This will force the browser to make a request to the server
  
  // give a date in the future to cache the data for a week
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'max-age=604800'}) // This will cache the data for a week
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'max-age=60'}) // This will cache the data for 60 seconds

  const response = await fetch('http://localhost:3000/api/blog', {next:{revalidate: 3600}}) // This will refresh the data every 1 hour

//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!response.ok) {
    throw new Error('Something went wrong')
  }
  return response.json()
}

const BlogPage = async () => {

  const posts = await getData()

  // Fetching data without an API
  // const posts = await getPosts()

  // console.log(posts)

  return (
    <div className={styles.container}>
      {posts && posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default BlogPage