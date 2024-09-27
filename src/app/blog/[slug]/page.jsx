import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = ({params, searchParams}) => {
  // params is an object with the route parameters for this file for the server side
  console.log(params)
  // searchParams is an object with the query parameters for this file for the server side
  console.log(searchParams)
  return (
    <div className={styles.container} >
      <div className={styles.imgContainer} >
        <Image src="https://images.pexels.com/photos/28539589/pexels-photo-28539589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" fill className={styles.img} />
      </div>
      <div className={styles.textContainer} >
        <h1 className={styles.title} >Title</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/28539589/pexels-photo-28539589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" width={50} height={50} className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle} >Author</span>
            <span className={styles.detailValue} >Therry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle} >Published</span>
            <span className={styles.detailValue} >01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae illum facilis, ex error veniam debitis sed voluptatibus vitae hic? Veritatis natus nisi reiciendis vel inventore, eveniet ipsam esse modi est?
        </div>
      </div>
    </div>

  )
}

export default SinglePostPage